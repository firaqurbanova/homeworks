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