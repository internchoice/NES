// AOS

AOS.init();



// AOS end
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


// academic

// document.addEventListener('DOMContentLoaded', function() {
//     const tabs = document.querySelectorAll('.school-tab li');
//     const sections = document.querySelectorAll('.content09 section');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', function() {
//             // Remove 'tab-current' class from all tabs
//             tabs.forEach(t => t.classList.remove('tab-current'));
//             // Hide all content sections
//             sections.forEach(section => section.style.display = 'none');

//             // Add 'tab-current' class to the clicked tab
//             this.classList.add('tab-current');
//             // Show the corresponding section
//             const activeTab = this.getAttribute('data-tab');
//             document.getElementById(activeTab).style.display = 'block';
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Select all tab items
    const tabs = document.querySelectorAll('.school-tab li');
    // Select all content sections
    const contentSections = document.querySelectorAll('.content09 section');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove the 'tab-current' class from all tabs
            tabs.forEach(item => item.classList.remove('tab-current'));
            // Hide all content sections
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Add 'tab-current' class to the clicked tab
            this.classList.add('tab-current');
            // Show the corresponding content section
            const selectedTab = this.getAttribute('data-tab');
            document.getElementById(selectedTab).style.display = 'block';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Select all tab items for the second tab set
    const tabs2 = document.querySelectorAll('.curriculum-tab li');
    // Select all content sections for the second tab set
    const contentSections2 = document.querySelectorAll('.curriculum-content section');

    tabs2.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove the 'tab-current' class from all tabs
            tabs2.forEach(item => item.classList.remove('tab-current'));
            // Hide all content sections
            contentSections2.forEach(section => {
                section.style.display = 'none';
            });

            // Add 'tab-current' class to the clicked tab
            this.classList.add('tab-current');
            // Show the corresponding content section
            const selectedTab = this.getAttribute('data-tab');
            document.getElementById(selectedTab).style.display = 'block';
        });
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     // Get all tabs and content sections
//     const tabs = document.querySelectorAll('.curriculum-tab li');
//     const sections = document.querySelectorAll('.curriculum-content > section');
    

//     // Function to handle tab clicks
//     tabs.forEach(tab => {
//         tab.addEventListener('click', function() {
//             // Remove 'tab-current' class from all tabs
//             tabs.forEach(t => t.classList.remove('tab-current'));

//             // Hide all content sections
//             sections.forEach(section => {
//                 section.style.display = 'none'; // Hide all sections
//             });

//             // Add 'tab-current' class to the clicked tab
//             this.classList.add('tab-current');

//             // Show the corresponding section
//             const activeTab = this.getAttribute('data-tab');
//             const activeSection = document.getElementById(activeTab);

//             // Check if the section exists before trying to display it
//             if (activeSection) {
//                 activeSection.style.display = 'block'; // Show the corresponding section
//             }
//         });
//     });

//     // Initially display the first section
//     sections.forEach(section => section.style.display = 'none'); // Hide all sections initially
//     sections[0].style.display = 'block'; // Show the first section (core)
//     tabs[0].classList.add('tab-current'); // Mark the first tab as active
// });



// document.addEventListener('DOMContentLoaded', function() {
//     // Function to handle tab clicks
//     function setupTabs(tabsSelector, sectionsSelector) {
//         const tabs = document.querySelectorAll(tabsSelector);
//         const sections = document.querySelectorAll(sectionsSelector);

//         // Handle tab clicks
//         tabs.forEach(tab => {
//             tab.addEventListener('click', function() {
//                 // Remove 'tab-current' class from all tabs
//                 tabs.forEach(t => t.classList.remove('tab-current'));

//                 // Hide all content sections
//                 sections.forEach(section => {
//                     section.style.display = 'none'; // Hide all sections
//                 });

//                 // Add 'tab-current' class to the clicked tab
//                 this.classList.add('tab-current');

//                 // Show the corresponding section
//                 const activeTab = this.getAttribute('data-tab');
//                 const activeSection = document.getElementById(activeTab);

//                 // Check if the section exists before trying to display it
//                 if (activeSection) {
//                     activeSection.style.display = 'block'; // Show the corresponding section
//                 }
//             });
//         });

//         // Initially display the first section
//         sections.forEach(section => section.style.display = 'none'); // Hide all sections initially
//         if (sections.length > 0) {
//             sections[0].style.display = 'block'; // Show the first section
//             tabs[0].classList.add('tab-current'); // Mark the first tab as active
//         }
//     }

//     // Setup both tab groups
//     setupTabs('.school-tab li', '.content09 > section');
//     setupTabs('.curriculum-tab li', '.curriculum-content > section');
// });
