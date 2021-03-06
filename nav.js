let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY + 200;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop)
    {
      link.classList.add("active");
    } 
    else 
    {
      link.classList.remove("active");
    }
  });
});