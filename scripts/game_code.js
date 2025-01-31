const fruits = ["abricot", "ananas", "avocat", "banane", "cerise", "citron", "clémentine", "datte", "figue", "fraise", "framboise", "grenade", "groseille", "kiwi", "litchi", "mandarine", "mangue", "melon", "mirabelle", "mûre", "myrtille", "nectarine", "noisette", "noix", "orange", "pamplemousse", "papaye", "pastèque", "pêche", "poire", "pomme", "prune", "raisin", "tomate", "abricotier", "amande", "amandier", "ananas", "arbre", "avocatier", "bananier", "basilic", "betterave", "bleuet", "brocoli", "cactus", "cassis", "cerisier", "châtaigne", "châtaignier", "chou", "citronnier", "clémentinier", "cocotier", "courge", "courgette", "cresson", "datte", "dattier", "endive", "estragon", "fenouil", "figuier", "fraisier", "framboisier", "grenadier", "groseillier", "haricot", "kiwi", "laitue", "légume", "lentille", "lierre", "litchi", "mandarinier", "mangue", "manguier", "melon", "menthe", "mûrier", "myrtille", "nectarine", "noisette", "noisetier", "noix", "noyer", "olivier", "orange", "oranger", "pamplemousse", "pamplemoussier", "papaye", "pêcher", "pistache", "pistachier", "poire", "poirier", "pomme", "pommier", "prune", "prunier", "raisin", "raisins", "tomate", "tomates", "romarin", "salade", "sauge", "thym", "topinambour", "trèfle", "tulipe", "valériane", "verveine", "vigne"];
const beers = ["Heineken", "Stella Artois", "Guinness", "Corona", "Budweiser", "Carlsberg", "Asahi", "Tsingtao", "Peroni", "Beck's", "Foster's", "Kronenbourg 1664", "Leffe", "Hoegaarden", "Tiger", "Singha", "Quilmes", "Brahma", "Paulaner", "Pilsner Urquell", "San Miguel", "Sapporo", "Tuborg", "Kirin", "Baltika", "Victoria Bitter", "Kingfisher", "Chang", "Miller", "Coors", "Blue Moon", "Samuel Adams", "Sierra Nevada", "Modelo", "Pacifico", "Dos Equis", "Tecate", "Amstel", "Grolsch", "Efes", "Mahou", "Moretti", "Super Bock", "Sagres", "Jupiler", "Palm", "Chimay", "Duvel", "Westmalle", "La Chouffe", "Delirium", "Orval", "Kwak", "Brooklyn", "Goose Island", "Lagunitas", "Stone", "Dogfish Head", "Founders", "Bell's", "New Belgium", "Flying Dog", "Rogue", "Deschutes", "Anchor Steam", "Victory", "Left Hand", "Russian River", "Three Floyds", "Mikkeller", "BrewDog", "Weihenstephaner", "Schneider Weisse", "Erdinger", "Warsteiner", "Bitburger", "Spaten", "Löwenbräu", "Augustiner", "Franziskaner", "Hofbräu", "Ayinger", "Schlenkerla", "Krombacher", "DAB", "Veltins", "Köstritzer", "Maisel's", "König Ludwig", "Alhambra", "Estrella Damm", "Cruzcampo", "San Miguel España", "Żywiec", "Tyskie", "Lech", "Okocim", "Perła", "Heineken Brasil", "Antarctica", "Skol", "Kaiser", "Bohemia", "Devassa", "Xingu", "Colorado", "Eisenbahn", "Baden Baden", "Dado Bier", "Way Beer", "Bodebrown", "Seasons", "Invicta", "DUM", "2 Cabeças", "Wäls", "Tupiniquim", "Urbana", "Backer", "Bamberg", "Dama Bier", "Morada", "Schornstein", "Stannis", "Brewpoint", "HopMundi", "Kraüt", "Dogma", "Outro Mundo", "Vinil", "3 Lobos", "Cerveja Blondine", "Cervejaria Nacional", "Cervejaria Campanária", "Cervejaria Bodoque", "Cervejaria Providência"];

const words_index = [beers, fruits];
const wordchoise = document.getElementById("word-list");

const displayArea = document.getElementById('display-area');
const inputArea = document.getElementById('input-area');

const point = document.getElementById('points')



function addWord() {
    const word = actualWordlist[Math.floor(Math.random() * actualWordlist.length)];
    console.log(word);
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
let actualWordlist = [];

function wordListConstructor (){
    actualWordlist = [...words_index[parseInt(wordchoise.value)]]; // récupére la liste saisie par l'utilisateur et remplace toutes les valeurs de actualWordlist
    //console.log(words_index[wordchoise.value])
    //console.log(actualWordlist);
}

function game_points_count(){
const points = parseInt(point.textContent);
point.textContent = points+1;
}

wordchoise.addEventListener('change',wordListConstructor);



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

const difficulty = document.getElementById("difficulty");

inputArea.addEventListener('input', checkWord);
let jeu;
const GameStart = document.getElementById("GameStart");
let GSCliquer = 0
GameStart.addEventListener('click',()=>{
    if(GSCliquer === 0){
        wordListConstructor();
        jeu = setInterval(addWord, parseInt(difficulty.value) * 100);
        console.log(jeu);

        GameStart.textContent = "Stop";
        GSCliquer = 1;
    }
    else{
        clearInterval(jeu);
        GSCliquer = 0;
        GameStart.textContent="Start";
    }
})