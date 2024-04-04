const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector ('button')
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* alts */
const alts = ['Penguins About', 'Friends on Rocks', 'Flowery Ocean', 'Sandy Pup', 'Painting Time']

//img loop access 
function thumbnailLoop() {
    var i;
    for (let i=0; i < 5; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', "pic" + (i+1) + ".jpg");
        newImage.setAttribute('alt', alts[i]);
        thumbBar.appendChild(newImage);
    }
}

thumbnailLoop();
thumbBar.addEventListener('click', (e) => {
    if(e.target && e.target.nodeName == "IMG") {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    }
});

//darken/lighten button
btn.addEventListener('click', (e) => {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
