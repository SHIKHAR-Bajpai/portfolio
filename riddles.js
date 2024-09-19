const r_url = 'https://riddles-api.vercel.app/random';
let flag = false;

async function fetchRiddle() {
    try {
        const response = await fetch(r_url);
        const data = await response.json();
        const riddle = data.riddle;
        const answer = data.answer;
        document.getElementById('riddle').innerHTML = riddle;
        document.getElementById('answer').innerHTML = answer;
        document.getElementById('answer').style.display = 'none'; 
        flag = false;
    } catch (error) {
        console.error('Error:', error);
    }
}

function showAnswer() {
    const answerElement = document.getElementById('answer');
    const answerButton = document.getElementById('answer-button');

    if (!flag) {
        answerElement.style.display = 'block';
        answerButton.textContent = 'Hide Answer';
    } else {
        answerElement.style.display = 'none';
        answerButton.textContent = 'View Answer';
    }

    flag = !flag; 
}

fetchRiddle();
