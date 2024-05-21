// Switch function
const switchTheme = () => {
    // Get root element and data-theme value
    const rootElement = document.documentElement;
    let dataTheme = rootElement.getAttribute('data-theme'),
        newTheme;
    newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    // Set the new data-theme value
    rootElement.setAttribute('data-theme', newTheme);

    // Save the preferred date-theme in local storage
    localStorage.setItem('Illustrator Portfolio theme', newTheme)
}

// Add event listener
document.querySelector('#theme-switcher').addEventListener('click', switchTheme);
document.body.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === ' ') {
        switchTheme()
    }
});