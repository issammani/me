window.addEventListener('load' , () => {
    const themedElement = document.querySelector('.theme-dark');
    const filteredImages = document.querySelectorAll('.black__white__filter');
    const themeToggle = document.querySelector('.theme__toggle');


    themeToggle.addEventListener('click', () => {
        themedElement.classList.toggle('theme-light');
        themedElement.classList.toggle('theme-dark');
        filteredImages.forEach((filteredImage ) => filteredImage.classList.toggle('black__white__filter'));
    });

    // Set footer year (This should be normally handled in server since client's clock could be easily manipulated)
    document.querySelector('#copyright__year').textContent = new Date().getFullYear();

});