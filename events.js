function handleButtonClick(buttonClass, message) {
    var buttons = document.querySelectorAll('.' + buttonClass);

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert(message);
        });
    });
}

handleButtonClick('heartButton', 'Added to Favorites');
handleButtonClick('addtoCart', 'Added to Cart');
