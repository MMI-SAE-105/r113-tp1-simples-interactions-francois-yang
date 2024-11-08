const collH2 = document.querySelectorAll("h2")
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
const Enrouge1 = document.querySelector = ("Trouvez tous les 'H2' du document") 

enRougeSuiteAClick.addEventListener("click", (evt)=>{
    enRougeSuiteAClick.style.color = "red"}); 

aMettreEnRouge.style.color = "red" 

collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = "red";});
}); 