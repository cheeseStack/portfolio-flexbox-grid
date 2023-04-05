
const keithPhoto = document.getElementById('keith-photo')
const keithSketch = document.getElementById('keith-sketch')



const changeImage = () => {
        keithPhoto.style.display = 'block';
        keithSketch.style.display = 'none';
};

const changeBack = () => {
    keithPhoto.style.display = 'none';
    keithSketch.style.display = 'block';
}

keithSketch.addEventListener('click', changeImage)

keithPhoto.addEventListener('click', changeBack)


// burger menu for mobiles function
const mobileNav = document.getElementById('mobile-nav')
mobileNav.hidden = true;

const burgerMenu = () => {
    const burgerMenuIcon = document.querySelector('img.original-burger')

    burgerMenuIcon.classList.toggle("transformed-burger")
    mobileNav.hidden = !mobileNav.hidden;
}

// show the menu when the burger menu is clicked
const burgerClicker = document.getElementById("burger-menu");
burgerClicker.addEventListener('click', burgerMenu);


// hide the menu when a nav option is clicked
// function
const hideMobileMenu = () => {
    mobileNav.hidden = true;
    const burgerMenuIcon = document.querySelector('img.original-burger')
    burgerMenuIcon.classList = "original-burger"
}

const menuArea = document.getElementById('mobile-menu')

menuArea.addEventListener('click', hideMobileMenu)
// mobileNavOption.addEventListener('click', burgerMenu)


