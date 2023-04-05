
// burger menu for mobiles function
const mobileNav = document.getElementById('mobile-nav')

// burger icon
const burgerIcon = document.getElementById('mobile')

//  mobile menu 
const mobileMenu = document.querySelector('nav.original-mobile')

const mobileMenuDiv = document.getElementById("mobile-menu")
mobileMenuDiv.hidden = true;


const burgerMenu = () => {
    // rotate the burger icon
    const burgerMenuIcon = document.querySelector('img.original-burger')
    burgerMenuIcon.classList.toggle("transformed-burger")

    mobileMenuDiv.hidden = !mobileMenuDiv.hidden

    // if (mobileMenu.style.display === 'block') {
    //     mobileMenu.style.display = 'none' 
    // } else {
    //     mobileMenu.style.display = 'block'
    // }
}

// show the menu when the burger menu is clicked
const burgerClicker = document.getElementById("burger-menu" );
burgerIcon.addEventListener('click', burgerMenu);


// hide the menu when a nav option is clicked
// function
const hideMobileMenu = () => {
    const burgerMenuIcon = document.querySelector('img.original-burger')
    burgerMenuIcon.classList = "original-burger"

    mobileMenuDiv.hidden = !mobileMenuDiv.hidden

    // mobileMenu.classList.toggle("block-property")
    // if (mobileMenu.style.display === 'block') {
    //     mobileMenu.style.display = 'none' 
    // } else {
    //     mobileMenu.style.display = 'block'
    // }
}


const menuArea = document.getElementById('mobile-menu')
menuArea.addEventListener('click', hideMobileMenu)
// mobileNavOption.addEventListener('click', burgerMenu)



// change my photo when clicked
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


