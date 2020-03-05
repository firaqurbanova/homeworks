let tabs = document.getElementById('tabs-link');
let tabsContent = document.getElementById('tabs-content');


tabs.onclick = (e) => {
	tabs.querySelector(".active").classList.toggle("active");
	tabsContent.querySelector("li:not([hidden])").hidden = true;
	e.target.classList.toggle("active");
	tabsContent.children[e.target.dataset.index].hidden = false;
}
 

for (let i = 0; i < tabsContent.children.length; i++){
	tabs.children[i].dataset.index = i;
	if(i)
    tabsContent.children[i].hidden = true;
}

const filterTitlesContainer = document.getElementById('filter-titles');
const projects = document.querySelectorAll('.project-item');
filterTitlesContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('filter-title'))
{
    const title = e.target;
    const type = title.dataset.filterby || 'project-item';
    const isActive = title.classList.contains('active');
    if(!isActive) {
        document.querySelector('.filter-title.active').classList.remove('active');
        title.classList.add('active');
            filterByClassName(projects, type);    }
    
}
});
function filterByClassName(elements, className){
    for(let element of elements){
        element.hidden = !element.classList.contains(className);
        }
}



// $(function () {
//     $(".box-hidden").slice(0, 4).show();
//     $("#loadMore").on('click', function (e) {
//         e.preventDefault();
//         $(".box-hidden:hidden").slice(0, 4).slideDown();
//         if ($(".box-hidden:hidden").length == 0) {
//             $("#load").fadeOut('slow');
//         }
        
//     });
// });

