 // Ambil URL halaman saat ini
 var currentLocation = window.location.href;

 // Jika URL sesuai dengan URL tautan menu, tambahkan kelas 'active'
 if (currentLocation.indexOf("index.html") !== -1) {
   document.getElementById("profile").classList.add("active");
 } else if (currentLocation.indexOf("project.html") !== -1) {
   document.getElementById("project").classList.add("active");
 } else if (currentLocation.indexOf("education.html") !== -1) {
   document.getElementById("education").classList.add("active");
 } else if (currentLocation.indexOf("achievement.html") !== -1) {
   document.getElementById("achievement").classList.add("active");
 }

 var currentLocation2 = window.location.pathname.split("/").pop();

 // Identifikasi tautan menu yang sesuai dengan halaman saat ini dan tambahkan kelas 'active'
 var menuItems = document.querySelectorAll("nav ul li a");
 menuItems.forEach(function (item) {
   if (currentLocation2 === item.getAttribute("href")) {
     item.parentElement.classList.add("active");
   }
 });

 let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

showSlide(slideIndex);
