'use strict';

// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');

// nav toggle function
const navToggleFunc = function () {
    nav.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
}

// shopping cart toggle function
const cartToggleFunc = function () { shoppingCart.classList.toggle('active') }

// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {
    // If the shopping-cart has an `active` class, it will be removed.
    if (shoppingCart.classList.contains('active')) cartToggleFunc();
    navToggleFunc();
});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {
    // If the navbar-nav has an `active` class, it will be removed.
    if (nav.classList.contains('active')) navToggleFunc();
    cartToggleFunc();
});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', navToggleFunc);
}

// Testimonial slideshow functionality
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonials-card');
    let currentIndex = 0;

    const showTestimonial = () => {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to the first testimonial
        testimonials[currentIndex].classList.add('active');
    };

    setInterval(showTestimonial, 3000); // Change testimonial every 3 seconds
});

