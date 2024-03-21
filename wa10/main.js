const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 Fahrenheit outside, yet :insertx: felt compelled to venture out. As they arrived at :inserty:, a look of utter disbelief took over their face, followed swiftly by :insertz:. Bob witnessed everything from a distance, but his reaction was one of nonchalance — :insertx:, known for their adventurous spirit, was out braving the heat, despite weighing 300 pounds.';
const insertX = ['Kevin Hart', 'Big Papa', 'RuPaul'];
const insertY = ['The Miami Club', 'The Sahara Desert', 'the humane society'];
const insertZ = ['Tripped over a rogue garden gnome, launching into a surprisingly graceful series of somersaults', 'Laughed so hard they turned into a burst of confetti', 'Mistook a street magician for a real wizard and ended up temporarily transformed into a duck'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
