/**
 * Set all card divs to call hide
 * If div title contains search, remove the hide class.
 */



const searchInput = document.getElementById('input'),
      btnSearch = document.getElementById('btnSearch'),
      blogListingsContainer = document.getElementById('blog-listings');

const blog = (function() {
   const blogListings = [
      {
         title: 'should you learn webflow or coding',
         keywords: ['web', 'development'],
      },
      {
         title: 'Data Structures and Algorithms Crash Course',
         keywords: ['pointers'],
      }
   ];
   
   function getLastIndex() {
      return blogListings.length - 1;
   }
   
   btnSearch.addEventListener('click', () => {
      const searchInput = document.getElementById('input').value.toLowerCase();
      
      let searchResult = searchBlogListings(blogListings, getLastIndex(), searchInput);
      
      console.log(searchResult);

      const targetDivs = document.querySelectorAll(`[data-name='${searchResult.targetTitle}']`);
      console.log(targetDivs);
   
      function searchBlogListings(blogListings, lastIndex, targetWord) {
         let looker = 0,
             targetLocation = 0,
             found = false;

         console.log(lastIndex, targetWord);
   
         while(looker < lastIndex && !blogListings[looker].title.includes(targetWord))
            looker++;
         targetLocation = looker;
   
         if(blogListings[looker].title.includes(targetWord))
            found = true;

         let targetTitle = blogListings[targetLocation].title;
   
         return { targetLocation, found, targetTitle};
      }
   })

})

blog();