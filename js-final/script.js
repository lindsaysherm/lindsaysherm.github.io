const baseSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs.",
    "Jackdaws love my big sphinx of quartz.",
    "How vexingly quick daft zebras jump.",
    "Bright vixens jump; dozy fowl quack.",
    "Sphinx of black quartz, judge my vow.",
    "The five boxing wizards jump quickly.",
    "Jinxed wizards pluck ivy from the big quilt.",
    "Crazy Fredrick bought many very exquisite opal jewels.",
    "The job requires extra pluck and zeal from every young wage earner."
];
const challengeSentenceElement = document.getElementById('challengeSentence');
const inputField = document.getElementById('userInput');
const volumeDisplay = document.getElementById('volumeDisplay');
let currentVolume = 0;
let sentenceIndex = 0;

function generateSentence() {
    return baseSentences[sentenceIndex % baseSentences.length]; // cycles within the array
}

function updateChallenge() {
    if (sentenceIndex < baseSentences.length) {
        const newSentence = generateSentence();
        challengeSentenceElement.textContent = newSentence;
    } else {
        challengeSentenceElement.textContent = "Congratulations, you've completed all challenges!";
        inputField.disabled = true; 
    }
}

inputField.addEventListener('input', () => {
    if (inputField.value === challengeSentenceElement.textContent) {
        if (currentVolume < 100) {
            currentVolume += 10;
            volumeDisplay.textContent = currentVolume + "%";
            sentenceIndex++; // Increment to get next sentence
            updateChallenge(); // Update the sentence
        }
        inputField.value = "";
    } else if (!challengeSentenceElement.textContent.startsWith(inputField.value)) {
        currentVolume = Math.max(0, currentVolume - 10); // Decrease volume by 10% w error
        volumeDisplay.textContent = currentVolume + "%";
        inputField.value = ""; 
    }
});

updateChallenge(); 