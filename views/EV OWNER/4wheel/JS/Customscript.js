var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
"use strict";
document.getElementById("alloys").addEventListener("change", (e) => {
    const alloys = document.querySelectorAll("path.alloys");
    alloys.forEach((alloy) => {
        alloy.style.fill = e.target.value;
    });
}, false);
document.getElementById("body").addEventListener("change", (e) => {
    document.querySelector("path.body").style.fill = e.target.value;
}, false);
document.getElementById("mirrors").addEventListener("change", (e) => {
    document.querySelector("path.mirrors").style.fill = e.target.value;
}, false);
document.getElementById("shiny").addEventListener("change", (e) => {
    document.querySelector("svg").classList.toggle("shiny");
});


let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main4",
    // pin: true,
    start: " 43%",
    // markers: true,
    end: "+=40",
    scrub: 1,
  }
});
t1.to('#main4', {
  dduration:3,
  opacity:0,
  ease:Expo.easeInOut,
  y:-150,
});