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

    let pseudo = prompt("Entrez votre pseudo pour enregistrer votre score :");
    if (pseudo) {
        leaderboard(pseudo);
    }

}
/*
============================
    FONCTION LEADERBOARD
----------------------------

Création des entrées dans le leaderboard avec le pseudo du joueur, score et date d'essai.
On a décidé d'afficher que les 10 meilleurs joueurs.
On sauvegarde notre variable dans le storage local de la machine du joueur.
*/
function leaderboard(pseudo) {
    let joueur = { 
        nom: pseudo, 
        date: new Date().toLocaleString(), 
        score: parseInt(point.textContent, 10) 
    };

    // Récupérer le leaderboard existant ou initialiser un tableau vide
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    // Ajouter le nouveau joueur
    leaderboard.push(joueur);

    // Trier par score décroissant
    leaderboard.sort((a, b) => b.score - a.score);

    // Garder uniquement les 10 meilleurs scores (optionnel)
    leaderboard = leaderboard.slice(0, 10);

    // Sauvegarder dans le localStorage
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    // Afficher le leaderboard
    afficherLeaderboard();
}
/*
============================

====================================
    FONCTION AFFICHAGE LEADERBOARD
------------------------------------
Affichage du tableau contenant les scores des joueurs.
On affiche le pseudo, le score, la date de la partie.
*/

function afficherLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    let leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = "<h2>Leaderboard</h2>";

    leaderboard.forEach((joueur, index) => {
        leaderboardElement.innerHTML += `<p>${index + 1}. ${joueur.nom} - ${joueur.score} (${joueur.date})</p>`;
    });
}
/*
===================================
*/

/*
======================
    FONCTION raz

Permet de vider le leaderboard
*/
function raz(){
    localStorage.removeItem("leaderboard");
    afficherLeaderboard();
}
//Récupération de la demande d'appel de RAZ
reset=document.getElementById("reset");
reset.addEventListener("click",raz);
/*
======================
*/



inputArea.addEventListener('input', checkWord);
afficherLeaderboard();
jeu=setInterval(addWord, 2000);
