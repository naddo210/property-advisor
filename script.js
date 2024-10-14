document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const openIcon = document.querySelector(".open-icon");
    const closeIcon = document.querySelector(".close-icon");

    menuIcon.addEventListener("click", function () {
        console.log("Menu icon clicked");

        // Toggle the navbar visibility
        navbar.classList.toggle("active");

        // Toggle between open and close icons
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");

        console.log("Toggled classes: ", navbar.classList, openIcon.classList, closeIcon.classList);
    });
});
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')
        if (top >= offset && top + height) {
            // active navbat links 
            // navlinks.forEach(link => {
            //     link.classList.remove('active')
            //     document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

            // })
          
            // animation repeat on scroll

        }
        
    })
    // sticky header
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

  

}


const insta=document.querySelector(".instagram")
const facebook=document.querySelector(".facebook")
const youtube=document.querySelector(".youtube")
const x=document.querySelector(".twitter")
const whatsapp=document.querySelector(".whatsapp")


insta.addEventListener("click", function () {
  
    window.open("https://www.instagram.com/ahproperties89/profilecard/?igsh=MWF2b3h6dmxxZW40bQ==");
});
whatsapp.addEventListener("click", function () {
  
    window.open("https://api.whatsapp.com/send/?phone=919152174513&text&type=phone_number&app_absent=0");
});


facebook.addEventListener("click", function () {
  
    window.open("https://www.facebook.com/people/AH-Properties/61566399897219/?mibextid=ZbWKwL");
});
youtube.addEventListener("click", function () {
  
    window.open("https://www.youtube.com/channel/UC5lW3aNiF4kw3vr403moE0w");
});
x.addEventListener("click",function(){
    window.open("https://x.com/ahproperties89?t=6mCSpQB_9e6oQ8TSWU0F1g&s=09&mx=2");
})