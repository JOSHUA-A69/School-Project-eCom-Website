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

