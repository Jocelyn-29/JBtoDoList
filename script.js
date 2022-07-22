"use strict";

form.onsubmit = () => {
  const li = document.createElement("li");
  const spanDel = document.createElement("span");
  

  spanDel.textContent = "[X]";
  spanDel.onclick = () => del(li);
  
  li.innerHTML = champ.value;
  li.appendChild(spanDel);
  ol.appendChild(li);
  champ.value = "";
  noTache.style.display = "none";
  
  return false;
}
  function del(element) {
    element.remove();
    
    noTache.style.display = (ol.innerHTML == "") ? "block" : "none";
    
  }
  const bouton2 = document.getElementById("bouton2");
bouton2.onclick = ()=>{
  localStorage.setItem("bonjour", test.value);
}
test.value = localStorage.getItem("bonjour");