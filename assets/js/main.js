// var tabInterval = setInterval(function() {
//     var $active = $('#newsTab .nav-link.active');
//     var $next = $active.parent().next().length ? $active.parent().next().find('.nav-link') : $('#newsTab .nav-link').first();
//     $next.tab('show');
// }, 8000);

document.addEventListener("DOMContentLoaded", function () {
    var noticeSwiper = new Swiper(".notice-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false, // This allows autoplay to continue after user interaction
        },
        navigation: {
            nextEl: ".notice-next",
            prevEl: ".notice-prev",
        },
    });
});



// Function to animate counter increment
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the number, the faster the count

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // Get target number
        const count = +counter.innerText; // Get current number

        // Calculate increment
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 50); // Adjust speed of update (ms)
        } else {
            counter.innerText = target;
        }
    };

    const triggerCounter = () => {
        if (window.scrollY + window.innerHeight >= counter.offsetTop) {
            updateCount();
            window.removeEventListener('scroll', triggerCounter); // Run only once
        }
    };

    window.addEventListener('scroll', triggerCounter); // Trigger on scroll
});
