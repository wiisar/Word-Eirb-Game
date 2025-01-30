const words = ["bonjour", "ordinateur", "javascript", "html", "projet"];
const words_index= ["../words/beers.csv","../words/fruits.csv","../words/fortnite.csv"];

const displayArea = document.getElementById('display-area');
const inputArea = document.getElementById('input-area');
const point = document.getElementById('points')

const def_audio = document.getElementById("audio_def");

let nb_mot=0;
let mot_limit = 10;

function addWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    displayArea.appendChild(wordElement);
    displayArea.scrollTop = displayArea.scrollHeight
    nb_mot++;

    if (nb_mot >= mot_limit){
        gameover(jeu)
    }
}

function checkWord() {
    const inputText = inputArea.value.trim();
    const wordElements = displayArea.getElementsByTagName('div');
    for (let wordElement of wordElements) {
        if (wordElement.textContent === inputText) {
            displayArea.removeChild(wordElement);
            game_points_count();
            inputArea.value = '';
            nb_mot--; 
            break;
        }
    }
}

function game_points_count(){
const points = parseInt(point.textContent);
point.textContent = points+1;
}

function gameover(jeu){
    clearInterval(jeu);


    def_audio.currentTime = 0;
    def_audio.play();

    displayArea.style.color = "red"
    displayArea.style.textAlign = "center"
    displayArea.style.alignContent = "center"
    displayArea.textContent = "Désolé, vous avez perdu !\n Votre score était de "+point.textContent+" point(s)";
}

inputArea.addEventListener('input', checkWord);

jeu=setInterval(addWord, 200);
