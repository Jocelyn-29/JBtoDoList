"use strict"

btnAjouter.onclick = ()=>{
    //fonction qui crée un li 
    const li = document.createElement("li");
    //on ajoute du texte dans ce li
    li.textContent = champ.value;
    //on ajoute ce li à la liste ol
    ol.appendChild(li);
    //on vide le champ juste après
    champ.value="";
}