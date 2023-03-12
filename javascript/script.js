'use strict';

// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});

// DarkMode

var darkmode = document.getElementById("darkmode");
darkmode.onclick = function(){
  document.body.classList.toggle("darkthem");
  if(document.body.classList.contains("darkthem")){
    darkmode.src = "images/sun.png";
  }
  else{
    darkmode.src = "images/moon.png";
  }
}
