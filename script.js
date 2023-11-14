/**
 * Set all card divs to call hide
 * If div title contains search, remove the hide class.
 */



const searchInput = document.getElementById('input'),
      btnSearch = document.getElementById('btnSearch'),
      btnClear = document.getElementById('btnClear'),
      blogListingsContainer = document.getElementById('blog-listings'),
      blogCards = document.querySelectorAll('.blog-card');

const blog = (function() {
   const blogListings = [
      {
         title: 'should you learn webflow or coding keyword',
         keywords: ['web', 'development'],
      },
      {
         title: 'Data Structures and Algorithms Crash Course keyword',
         keywords: ['pointers'],
      }
   ];
   
   function getLastIndex() {
      return blogListings.length - 1;
   }

   function updateDisplayResults(div) {
      blogCards.forEach(card => {
         card.classList.add('hiden');
      });

      div.classList.remove('hiden');
   }

   btnClear.addEventListener('click', () => {
      blogCards.forEach(card => {
         card.classList.remove('hiden');
      })
   });
   
   btnSearch.addEventListener('click', () => {

      const searchInput = document.getElementById('input').value.toLowerCase();

      if(searchInput === '') return;
      
      let searchResult = searchBlogListings(blogListings, getLastIndex(), searchInput);

      const targetDiv = document.querySelector(`[data-name='${searchResult.targetTitle}']`);

      updateDisplayResults(targetDiv);
   
      function searchBlogListings(blogListings, lastIndex, targetWord) {
         let looker = 0,
             targetLocation = 0,
             found = false;
   
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