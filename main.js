let titre = document.getElementById('titre');
let realisateur = document.getElementById('realisateur');
let description = document.getElementById('description');
let date = document.getElementById('date');
let img = document.getElementById('img');
let button = document.getElementById('button-click');
let  movis;
if(localStorage.movises != null){
   movis = JSON.parse(localStorage.movises)
}else{
    movis = [];
}
button.onclick = function(){
    let newmovi ={
        titre:titre.value,
        realisateur:realisateur.value,
        description:description.value,
        date:date.value,
        img:img.value,
    }
    movis.push(newmovi)
    localStorage.setItem('movises',JSON.stringify(movis))
    cleardata();
    showMovis();
}
