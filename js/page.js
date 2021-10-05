
//Making button to use it for scrolling to the top of the page.
const button = document.querySelector('button');
window.onscroll = function() {
// This condition to make the button appears after scrolling down some space.
    if (window.pageYOffset >= 400){
        button.style.display = 'block';  
 }
    else {
        button.style.display = 'none';
             }
};
// This is an event by clicking the button we will reach the page top.
    button.onclick = ()=> {
    window.scrollTo({
    top: -1,
    behavior: "smooth",
    }); 
}; 
        
             /////////////////////////////////
              
// Declaring some global variables to get some elements(section, ul).
const allSections = document.querySelectorAll("section");
const navList = document.getElementById('navbar__list');
/* 
   *Creating fragment. 
   *This actually improves the speed of dynamically creating elements.
*/
const fragment = document.createDocumentFragment();
//Onloading the page this function will get (id & data-nav) attributes.
 window.onload = function() {
   for (const section of allSections) {
        const sectionData = section.getAttribute("data-nav");
        const sectionId = section.getAttribute("id");
//Using  (id & data-nav) attributes to make section name and section link.
// + sign to append innerHTML every time during looping.
        const list = document.createElement('li');
        list.innerHTML += (`<a class = "menu__link" 
                   href = "#${sectionId}">${sectionData}</a>`); 
        fragment.appendChild(list);                  
//This part of code for section smooth motion.
        list.addEventListener('click', (evt)=>{
        evt.preventDefault();
        section.scrollIntoView({behavior: "smooth"});
    })        
}                   
navList.appendChild(fragment);
}; 

               //////////////////////////////////

//This part of code to activate the section that is viewing on the page during scrolling event.
(window.addEventListener('scroll',activation));
    function activation(){
//  looping in the sections by using forEach. to get evry section postion according to the page.
         allSections.forEach(section =>{
         const secView = section.getBoundingClientRect();// to get evry section postion according to the page.
// This part of code to test when should the section be active on the screen?
      if (secView.top>-5 && secView.top<250){
         allSections.forEach(function(clear){
         clear.classList.remove('active');
        });
         section.classList.add('active');
        }
})
};

  