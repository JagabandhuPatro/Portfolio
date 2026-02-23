AOS.init();

new Typed("#typed", {
  strings: [
    "Software & Systems Architect",
    "Automotive Toolchain Expert",
    "HPC & Calibration Systems Specialist"
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
