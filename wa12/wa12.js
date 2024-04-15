var displayedImage = document.querySelector('.displayed-img');

const photoBtn = document.querySelector("#js-new-photo");
photoBtn.addEventListener('click', getRandomPhoto);

const linkBtn = document.querySelector("#js-open-link");
linkBtn.addEventListener('click', openLink);

const photoDisplay = document.querySelector("#js-photo-display");

const linkUrl = 'https://www.foodnetwork.com/recipes/photos/easy-dinner-recipes';

const apiEndpoint = 'https://api.thecatapi.com/v1/images/search';

async function getRandomPhoto() {
    try {
        const data = await response.json();
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //displayPhoto(data.image);
        console.log(response)
    } catch (error) {
        console.error('Failed to fetch new photo:', error);
        alert('Failed to fetch new photo');
    }
}

function displayPhoto(imageUrl) {
    photoDisplay.style.displayedImage = `url(${imageUrl})`;
    photoDisplay.textContent = '';
}

function openLink() {
    window.open(linkUrl, '_blank');
}

// Trigger the first random photo load when the page loads
window.onload = getRandomPhoto;