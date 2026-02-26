window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
});


function elemekElerese1() {
   let f1=document.getElementById("f1")
   console.log(f1.innerHTML)
}
function elemekElerese2() {
const ideElem=document.getElementById("ide")
console.log(ideElem)
   ideElem.innerHTML="<p>Jó reggelt</p>"
}
function elemekElerese3(){
const ideElem2=document.querySelectorAll(".ide")[0]
ideElem2.innerHTML="<p>Jó reggelt</p>"

}
function elemekElerese4(){
    const lista = document.getElementsByClassName("lista")[0];
    let szoveg = "<ul>";

    for (let index = 0; index < 5; index++) {
        let szam = Math.floor(Math.random() * 21 + 10);
        szoveg += `<li>${szam}</li>`;
    }

    szoveg += "</ul>";
    lista.innerHTML = szoveg;
    //5.
    lista.classList.add("formazott")
}
