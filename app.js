const displayResult = document.querySelector(".result");
const btnGetAPrediction = document.querySelector("button");

const options = [
    'You will fall in love this afternoon.', 
    'You will win a lottery.',
    'You will lose your phone. Check your left pocket.',
    'You will fall asleep on a couch.',
    'You will be taking a ring to Mordor.',
    'You will get your letter from Hogwarts.',
    'Elon Musk will buy TikTok.',
    'Your crash will be mad at you, or give you a kiss. I am just a programm, I have no idea of what will happen in the future.'
];

btnGetAPrediction.addEventListener('click', () => {

    const randomPredictionIndex = Math.floor(Math.random( ) * options.length);
    const prediction = options[randomPredictionIndex];
    
    displayResult.innerHTML = prediction;
});