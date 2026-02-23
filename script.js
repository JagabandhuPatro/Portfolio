AOS.init();

new Typed("#typed", {
  strings: [
    "I am a Software & Systems Architect",
    "I am a Automotive Toolchain Expert",
    "I am a HPC & Calibration Systems Specialist"
    "AI/Cloud Enthusiast"
  ],
  typeSpeed: 50,
  backSpeed: 30,
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
