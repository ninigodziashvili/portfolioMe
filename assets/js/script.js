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




  var eQuote = document.querySelector("#neat");

var regex = /\ /;
// save the original paragraph as array of words
// regex = /[,.?!;:]/; /* Uncomment for sentences */
var aQuote = eQuote.innerHTML.split(regex);

// wrap each word with a span
eQuote.innerHTML = "";
for(var word in aQuote){
  eQuote.innerHTML += "<span>" + aQuote[word] + "</span>";
}
// ...and save them for later
var eWords = document.querySelectorAll("span");


var repeat = setInterval(function() {
  if(Math.random() > 0.85) fClearAllHighlights(eQuote);
  fHighlightRandomWord(eWords);
}, 275);

function fHighlightRandomWord (e) {
  var iRandom = Math.floor(Math.random() * e.length);
  e[iRandom].classList.add("highlight");
}

function fClearAllHighlights (e) {
  var nlHighlights = e.querySelectorAll(".highlight");
  // convert the nodeList into an array
  var aHighlights = Array.prototype.slice.call(nlHighlights);
  // remove .highlight from the spans which have it
  Array.prototype.map.call(aHighlights, function(){
    arguments[0].classList.remove("highlight");
  });
}