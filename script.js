const btnViewProjects = document.getElementById('btnProjects');

btnViewProjects.addEventListener('click', () => {
   document.getElementById("projectsScroll").scrollIntoView({ behavior: "smooth", });
})