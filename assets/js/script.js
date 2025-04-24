const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link");
    const navLinks = document.querySelectorAll(".nav-link li");
    
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-link-activated");
      burger.classList.toggle("toggle")
  
      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = "";
        }else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
      })
    });
  }
  
  navSlide();