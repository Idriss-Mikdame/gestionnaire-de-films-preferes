let titre = document.getElementById('titre');
let realisateur = document.getElementById('realisateur');
let description = document.getElementById('description');
let date = document.getElementById('date');
let img = document.getElementById('img');
let button = document.getElementById('button-click');

let mood = 'Ajouter';
let tmp;
let movis = localStorage.movises ? JSON.parse(localStorage.movises) : [];

function Ajouter() {
    let newmovi = {
        titre: titre.value,
        realisateur: realisateur.value,
        description: description.value,
        date: date.value,
        img: img.value,
    };

    if (mood === 'Ajouter') {
        movis.push(newmovi);
    } else {
        movis[tmp] = newmovi;
        mood = 'Ajouter'; 
    }

    localStorage.setItem('movises', JSON.stringify(movis));
    clearData();

    location.assign('Accueil.html'); 
}

function clearData() {
    titre.value = '';
    realisateur.value = '';
    description.value = '';
    date.value = '';
    img.value = '';
}

function showMovis() {
    let container = document.getElementById('filmscontainer');
    if (!container) return;

    let table = '';
    for (let i = 0; i < movis.length; i++) {
        table += `
        <div class="film">
            <a href="Films.html"> <img src="${movis[i].img}" alt="Film Image"></a>
            <button class="Modifier" onclick="modifierFilm(${i})">Modifier</button>
            <button class="Supprimer" onclick="supprimerFilm(${i})">Supprimer</button>
        </div>
        `;
    }
    container.innerHTML = table;
}
function supprimerFilm(i) {
    movis.splice(i, 1);
    localStorage.setItem('movises', JSON.stringify(movis));
    showMovis();
}

function modifierFilm(i) {
    localStorage.setItem('editIndex', i); 
    location.assign('Ajoute.html'); 
}
