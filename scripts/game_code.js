const words = ["bonjour", "ordinateur", "javascript", "html", "projet"];
const words_index= ["../words/beers.csv","../words/fruits.csv","../words/fortnite.csv"];

const displayArea = document.getElementById('display-area');
const inputArea = document.getElementById('input-area');
const point = document.getElementById('points')



function addWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    displayArea.appendChild(wordElement);
    displayArea.scrollTop = displayArea.scrollHeight
}

function checkWord() {
    const inputText = inputArea.value.trim();
    const wordElements = displayArea.getElementsByTagName('div');
    for (let wordElement of wordElements) {
        if (wordElement.textContent === inputText) {
            displayArea.removeChild(wordElement);
            game_points_count();
            inputArea.value = '';
            break;
        }
    }
}

function game_points_count(){
const points = parseInt(point.textContent);
point.textContent = points+1;
}

inputArea.addEventListener('input', checkWord);
setInterval(addWord, 2000);