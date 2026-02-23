AOS.init();

new Typed("#typed", {
  strings: [
    "I am a Software & Systems Architect",
    "I am a Automotive Toolchain Expert",
    "I am a HPC & Calibration Systems Specialist",
    "AI/Cloud Enthusiast"
  ],
  typeSpeed: 50,
  backSpeed: 60,
  loop: true
});

(function(){
emailjs.init("rUswCMZO5I4fSAKjb");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){
e.preventDefault();

emailjs.sendForm("service_zumespj","template_07qz7zl",this)
.then(function(){
alert("Message Sent Successfully!");
}, function(){
alert("Message Failed.");
});
});

// LANGUAGE TOGGLE
let isGerman = false;
function toggleLanguage(){
if(!isGerman){
document.getElementById("about-text").innerText =
"Ich entwerfe modulare, skalierbare Software-Ökosysteme, die eingebettete Systeme mit Unternehmensanwendungen verbinden.";
isGerman = true;
} else {
document.getElementById("about-text").innerText =
"I design modular, scalable ecosystems that bridge embedded systems and enterprise applications.";
isGerman = false;
}
}
