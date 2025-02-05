const fruits = ["abricot", "ananas", "avocat", "banane", "cerise", "citron", "clémentine", "datte", "figue", "fraise", "framboise", "grenade", "groseille", "kiwi", "litchi", "mandarine", "mangue", "melon", "mirabelle", "mûre", "myrtille", "nectarine", "noisette", "noix", "orange", "pamplemousse", "papaye", "pastèque", "pêche", "poire", "pomme", "prune", "raisin", "tomate", "abricotier", "amande", "amandier", "ananas", "arbre", "avocatier", "bananier", "basilic", "betterave", "bleuet", "brocoli", "cactus", "cassis", "cerisier", "châtaigne", "châtaignier", "chou", "citronnier", "clémentinier", "cocotier", "courge", "courgette", "cresson", "datte", "dattier", "endive", "estragon", "fenouil", "figuier", "fraisier", "framboisier", "grenadier", "groseillier", "haricot", "kiwi", "laitue", "légume", "lentille", "lierre", "litchi", "mandarinier", "mangue", "manguier", "melon", "menthe", "mûrier", "myrtille", "nectarine", "noisette", "noisetier", "noix", "noyer", "olivier", "orange", "oranger", "pamplemousse", "pamplemoussier", "papaye", "pêcher", "pistache", "pistachier", "poire", "poirier", "pomme", "pommier", "prune", "prunier", "raisin", "raisins", "tomate", "tomates", "romarin", "salade", "sauge", "thym", "topinambour", "trèfle", "tulipe", "valériane", "verveine", "vigne"];
const beers = ["Heineken", "Stella Artois", "Guinness", "Corona", "Budweiser", "Carlsberg", "Asahi", "Tsingtao", "Peroni", "Beck's", "Foster's", "Kronenbourg 1664", "Leffe", "Hoegaarden", "Tiger", "Singha", "Quilmes", "Brahma", "Paulaner", "Pilsner Urquell", "San Miguel", "Sapporo", "Tuborg", "Kirin", "Baltika", "Victoria Bitter", "Kingfisher", "Chang", "Miller", "Coors", "Blue Moon", "Samuel Adams", "Sierra Nevada", "Modelo", "Pacifico", "Dos Equis", "Tecate", "Amstel", "Grolsch", "Efes", "Mahou", "Moretti", "Super Bock", "Sagres", "Jupiler", "Palm", "Chimay", "Duvel", "Westmalle", "La Chouffe", "Delirium", "Orval", "Kwak", "Brooklyn", "Goose Island", "Lagunitas", "Stone", "Dogfish Head", "Founders", "Bell's", "New Belgium", "Flying Dog", "Rogue", "Deschutes", "Anchor Steam", "Victory", "Left Hand", "Russian River", "Three Floyds", "Mikkeller", "BrewDog", "Weihenstephaner", "Schneider Weisse", "Erdinger", "Warsteiner", "Bitburger", "Spaten", "Löwenbräu", "Augustiner", "Franziskaner", "Hofbräu", "Ayinger", "Schlenkerla", "Krombacher", "DAB", "Veltins", "Köstritzer", "Maisel's", "König Ludwig", "Alhambra", "Estrella Damm", "Cruzcampo", "San Miguel España", "Żywiec", "Tyskie", "Lech", "Okocim", "Perła", "Heineken Brasil", "Antarctica", "Skol", "Kaiser", "Bohemia", "Devassa", "Xingu", "Colorado", "Eisenbahn", "Baden Baden", "Dado Bier", "Way Beer", "Bodebrown", "Seasons", "Invicta", "DUM", "2 Cabeças", "Wäls", "Tupiniquim", "Urbana", "Backer", "Bamberg", "Dama Bier", "Morada", "Schornstein", "Stannis", "Brewpoint", "HopMundi", "Kraüt", "Dogma", "Outro Mundo", "Vinil", "3 Lobos", "Cerveja Blondine", "Cervejaria Nacional", "Cervejaria Campanária", "Cervejaria Bodoque", "Cervejaria Providência"];

const phrasefruit = ["Smoothie fraise-banane délicieux", "Achète des pommes et poires", "Savoureuse salade de fruits frais", "Oranges riches en vitamine C", "Délicieuse tarte aux cerises", "Grignoter raisins en télé", "Pique-nique avec pastèque fraîche", "Mangues juteuses et sucrées", "Avocatier planté dans jardin", "Figues, fromage et miel délicieux", "Confiture fraise maison", "Pêche juteuse d'été", "Gâteau citron meringué", "Ananas tranché frais", "Sorbet framboise rafraîchissant", "Jus de pomme bio", "Parfait kiwi et yaourt", "Coulis de fruits rouges", "Petit déjeuner banane", "Salade mangue avocat"];
const phrasebiere = ["Dégustation de bière locale", "Bière artisanale houblonnée", "Bière blonde rafraîchissante", "Bière brune maltée", "Bière IPA amère et fruitée", "Bière ambrée caramelisée", "Bière stout chocolatée", "Bière de saison épicée", "Bière lager légère", "Bière sans alcool", "Bière au gingembre piquante", "Bière fruitée à la framboise", "Bière blanche citronnée", "Bière de Noël épicée", "Bière au miel douce", "Bière au café intense", "Bière à la cerise", "Bière à la mangue", "Bière à la pêche", "Bière au citron"];

words_index = [[beers, fruits], [phrasebiere, phrasefruit]];
const wordchoise = document.getElementById("word-list");

const typechoise = document.getElementById("word-phrase");

const displayArea = document.getElementById('display-area');
const inputArea = document.getElementById('input-area');

const point = document.getElementById('points')

const def_audio = document.getElementById("audio_def");
let jeu;

let nb_mot=0;
let mot_limit = 10;

let game_loose = 0;

function addWord() {
    const word = actualWordlist[Math.floor(Math.random() * actualWordlist.length)];
    console.log(word);
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    displayArea.appendChild(wordElement);
    displayArea.scrollTop = displayArea.scrollHeight
    nb_mot++;

    if (nb_mot >= mot_limit){
        gameover(jeu);
    }
}

function cheatcode(){
    const points = parseInt(point.textContent);
    point.textContent= points +719;
    
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
let actualWordlist = [];

function wordListConstructor() {
    actualWordlist = [...words_index[parseInt(typechoise.value)][parseInt(wordchoise.value)]];
    console.log(actualWordlist);  // Pour vérifier si la liste est correcte
}

function game_points_count(){
const points = parseInt(point.textContent);
point.textContent = points+1;
}

/*
============================
    FONCTION GAMEOVER
----------------------------

Lancement d'un audio de defaite.
Message annonçant la défaite du joueur ainsi que son score
Lancement de la fonction leaderboard pour enregistrement de score
*/

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
    GameStart.textContent = "Restart";
    GSCliquer = 0;
    game_loose = 1;
    
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
    let diff = document.getElementById("difficulty").options[difficulty.selectedIndex].text

    let joueur = { 
        nom: pseudo, 
        date: new Date().toLocaleString(), 
        score: parseInt(point.textContent, 10) ,
        difficulte: diff
    };


    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push(joueur);
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
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
        leaderboardElement.innerHTML += `<p>${index + 1}. ${joueur.nom} - ${joueur.score} - ${joueur.difficulte} - (${joueur.date})</p>`;
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



wordchoise.addEventListener('change',wordListConstructor);
typechoise.addEventListener('change',wordListConstructor);


// () => {
//     fetch(words_index[parseInt(wordlist.value)])
//         .then(response => response.text())
//         .then(data => {
//             const csvWords = data.split('\n').map(word => word.trim()).filter(word => word.length > 0);
//             words.length = 0; // Clear the existing words array
//             words.push(...csvWords);
//         })
//         .catch(error => console.error('Error fetching the CSV file:', error));
// })


inputArea.addEventListener('input', checkWord);
afficherLeaderboard();

const difficulty = document.getElementById("difficulty");


const GameStart = document.getElementById("GameStart");
let GSCliquer = 0
GameStart.addEventListener('click',()=>{
    if(GSCliquer === 0){
        wordListConstructor();
        jeu = setInterval(addWord, parseInt(difficulty.value) * 100);
        console.log(jeu);
        GameStart.textContent = "Stop";
        GSCliquer = 1;
        if(game_loose === 1){
            console.log(game_loose);
            displayArea.style.color = "black"
            displayArea.innerHTML = '';
            game_loose = 0;
            nb_mot=0;
        }
        
    }
    else{
        clearInterval(jeu);
        GSCliquer = 0;
        GameStart.textContent="Start";
    }
})
