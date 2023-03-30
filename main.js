
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

