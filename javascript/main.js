const topBar = document.querySelector('#top-bar');
const exteriorColorSection = document.querySelector('#exterior-buttons');
const interiorColorSection = document.querySelector('#interior-buttons');

const exteriorImage = document.querySelector('#exterior-image')
const interiorImage = document.querySelector('#interior-image')

const wheelButtonsSelector = document.querySelector('#wheel-buttons');


const selectedColor = 'Stealth Grey';
const selectedOption = {
    'Performance Wheels': false,
    'Performance Package': false,
    'Full Self-Driving': false,
};

// handle top bar on scroll
const handleScroll = () =>{
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
};
// image mapping
const exteriorImages = {
    'Stealth Grey': './images/model-y-stealth-grey.jpg',
    'Pearl White': './images/model-y-pearl-white.jpg',
    'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
    'Solid Black': './images/model-y-solid-black.jpg',
    'Ultra Red': './images/model-y-ultra-red.jpg',
    'Quicksilver': './images/model-y-quicksilver.jpg'
}

const interiorImages = {
    Dark: './images/model-y-interior-dark.jpg',
    Light: './images/model-y-interior-light.jpg',
}

// handle color section
const handleColorButtonClick = (event) =>{
    let button;
    // console.log(event.target.tagName)  //out: IMG or BUTTON 
    if (event.target.tagName === 'IMG') {
        button = event.target.closest('button');
    } else if(event.target.tagName === 'BUTTON') {
        button = event.target;
    }

    if (button) {
        const buttons = event.currentTarget.querySelectorAll('button')
        buttons.forEach((btn) => btn.classList.remove('btn-selected'));
        button.classList.add('btn-selected');

        // change exterior image
        if (event.currentTarget === exteriorColorSection) {
            const color = button.querySelector('img').alt;
            exteriorImage.src = exteriorImages[color]
            
        }

        // change interior image
        if (event.currentTarget === interiorColorSection) {
            const color = button.querySelector('img').alt;
            interiorImage.src = interiorImages[color]
        }
    }
}

// wheel selection
const handleWheelButtonClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        const buttons = document.querySelectorAll('#wheel-buttons button');
        buttons.forEach((btn) => btn.classList.remove('bg-gray-700', 'text-white'));

        // add selected styles to clicked button
        event.target.classList.add('bg-gray-700', 'text-white');

        const selectedWheels = event.target.textContent.includes('Performance');

        exteriorImage.src = selectedWheels ? './images/model-y-stealth-grey-performance.jpg' 
        : './images/model-y-stealth-grey.jpg' 
    }
}


// even listeners
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener('click', handleColorButtonClick);
interiorColorSection.addEventListener('click', handleColorButtonClick);
wheelButtonsSelector.addEventListener('click', handleWheelButtonClick);