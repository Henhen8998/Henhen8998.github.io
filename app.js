/**
 * Henry Yang - Portfolio Logic
 * Handles Mobile Menu and Dynamic Year
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Current Year
    var yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.innerText = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle
    var mobileBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });

        var mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
