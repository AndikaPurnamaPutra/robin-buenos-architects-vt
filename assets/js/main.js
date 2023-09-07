console.log("hallo");

// Navbar Mobile
const navbarToggler = document.querySelector(".nav-btn-responsive");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".nav-office").classList.toggle("active");
});

// logic respondsive

// const btnRes = document.querySelector('.nav-btn-respondsive');
// const menu = document.querySelector('.nav-menu');

// btnRes.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   btnRes.classList.toggle('cross');
// });
