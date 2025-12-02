// MOBILE MENU
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

menuIcon.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});


// SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[n].classList.add("active");
  dots[n].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(index);
  });
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);



// LIST YOUR HOME BUTTON
document.getElementById("listHome").addEventListener("click", function () {
  window.location.href = "./ListyourHome.html";
});

// LIST YOUR HOMES BUTTON
document.getElementById("listHomes").addEventListener("click", function () {
  window.location.href = "./ListyourHome.html";
});

// LOGIN BUTTON
document.getElementById("login").addEventListener("click", function () {
  window.location.href = "./SignUp.html";
});

// LOGINS BUTTON
document.getElementById("logins").addEventListener("click", function () {
  window.location.href = "./SignIn.html";
});





// PROPERTY FILTERING
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.property-maincard');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // remove active from all, add to clicked
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // get button data-type
    const type = btn.getAttribute('data-type');

    cards.forEach(card => {
      const cardType = card.getAttribute('data-type');

      if (type === "all" || type === cardType) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});



// TESTIMONIAL SLIDER
let sliderIndex = 0;

function slideTestimonials() {
  const wrapper = document.querySelector(".slider-wrapper");
  const cards = document.querySelectorAll(".slider-wrapper .client-card");
  const cardHeight = cards[0].offsetHeight + 20; // includes gap

  sliderIndex++;

  if (sliderIndex > cards.length - 2) {
    sliderIndex = 0;
  }

  wrapper.style.transform = `translateY(${-sliderIndex * cardHeight}px)`;
}

// Slide every 3 seconds
setInterval(slideTestimonials, 5000);







// FAQ ACCORDION
let faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  })
});



// BACK TO TOP BUTTON
let backBtn = document.querySelector(".back-top");

backBtn.onclick = function () {
  window.scrollTo(0, 0);
}


// SHOW BACK TO TOP BUTTON ON SCROLL
window.onscroll = function () {
  if (window.scrollY >= 500) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }
};
















// state list 
// const lga = document.getElementById('lga');
// async function fetchLga() {
//   try {
//     const response = await fetch('https://nga-states-lga.onrender.com/?state=Osun');
  

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   const states = await response.json();
// console.log(states);

// data.forEach(states => {
//   const option = document.createElement('option');
//   option.value = state.name;
//   option.textContent = state;
//   stateSelect.appendChild(option);
// });

// } catch (error) {
//   console.error('There has been a problem with your fetch operation:', error);
// }
// }

// fetchLga();