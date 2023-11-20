function handleHeartButtonClick(buttonClass) {
    var buttons = document.querySelectorAll('.' + buttonClass);

    buttons.forEach(function(button) {
        var isFavorite = false;

        button.addEventListener('click', function() {
            isFavorite = !isFavorite; // Toggle between true and false

            if (isFavorite) {
                alert('Added to Favorites');
                button.classList.add('redHeart'); // Add a class to turn the heart red
            } else {
                alert('Removed from Favorites');
                button.classList.remove('redHeart'); // Remove the class to revert to the default color
            }
        });
    });
}

handleHeartButtonClick('heartButton');

function handleButtonClick(buttonClass, message) {
    var buttons = document.querySelectorAll('.' + buttonClass);

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert(message);
        });
    });
}

handleButtonClick('addtoCart', 'Added to Cart');


document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the "animated" class
    var animatedElements = document.querySelectorAll(".animated");
  
    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to handle scroll events
    function handleScroll() {
      animatedElements.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("show");
        }
      });
    }
  
    // Initial check on page load
    handleScroll();
  
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
  });