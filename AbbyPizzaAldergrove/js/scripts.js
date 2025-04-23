// Ensure the DOM is fully loaded before running any code
document.addEventListener('DOMContentLoaded', function() {
    // Your code here (e.g., event listeners, initialization)

    // Back to Top Button 
    const backToTopButton = document.getElementById("backToTop");

    // Scroll event listener to toggle the visibility of the button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 450) { // Button appears when scrolled 200px
            backToTopButton.style.display = 'block'; // Show the button
        } else {
            backToTopButton.style.display = 'none'; // Hide the button
        }
    });

    // Click event listener to scroll back to the top
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to the top
        });
    });


    //Phone button
    const orderNowButton = document.getElementById("orderNow")
    // Scroll event listener to toggle the visibility of the button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 450) { // Button appears when scrolled 200px
            orderNowButton.style.display = 'block'; // Show the button
        } else {
            orderNowButton.style.display = 'none'; // Hide the button
        }
    });
    //Click event listener to open a call option 
    orderNowButton.addEventListener('click')
});
