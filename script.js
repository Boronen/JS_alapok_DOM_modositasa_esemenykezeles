window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekElerese6();
    feladat8();
    feladatSajat(5);
});

const lista = document.getElementsByClassName("kattintasutan")[0];
const listaaa = document.getElementsByClassName("lista")[0];
const feladatElem = document.getElementsByClassName("feladat")[0];
const ideElem2 = document.querySelectorAll(".ide")[0];
const ideElem = document.getElementById("ide");
const f1 = document.getElementById("f1");

listaaa.addEventListener("click", elemekElerese5);

function elemekElerese1() {
    console.log(f1.innerHTML);
}

function elemekElerese2() {
    ideElem.innerHTML = "<p>Jó reggelt</p>";
}

function elemekElerese3() {
    ideElem2.innerHTML = "<p>Jó reggelt</p>";
}

function elemekElerese4() {
    let szoveg = "<ul>";

    for (let index = 0; index < 5; index++) {
        let szam = Math.floor(Math.random() * 21 + 10);
        szoveg += `<li>${szam}</li>`;
    }

    szoveg += "</ul>";
    listaaa.innerHTML = szoveg;
    listaaa.classList.add("formazott");
}

function elemekElerese5() {
    lista.innerHTML = listaaa.innerHTML;
    lista.classList.add("formazott");
}
function elemekElerese6(){
    feladatElem.innerHTML = "<button id='gomb'>OK</button>";

    const button = document.getElementById("gomb");

    button.addEventListener("click", function() {
        feladatElem.innerHTML += `
            <div>
                <img id="kep" src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png">
            </div>
        `;
        feladat7_checker();
    });
}

//window.addEventListener("mousemove", feladat7_checker);

//let hoverBeallitva = false;

function feladat7_checker() {

    //legnagyobb spagetti kód megoldás valszeg, de if it works, dont fix it
    //sidenote bug: Valamiért, ha megvan nyitva az dev console akkor CSAK kattintáskor működik, LIKE WTF??????

    //set-checker -- basic
    //if (hoverBeallitva) return;

    const img = document.getElementById("kep");

    //if (!img) return;

    img.addEventListener("mouseover", function(){
        img.classList.add("kiemelt");
        img.classList.remove("kiemeltvissza");
    });

    img.addEventListener("mouseout", function(){
        img.classList.remove("kiemelt");
        img.classList.add("kiemeltvissza");
    });


    //set-checker -- varied
    //hoverBeallitva = true;
}
function feladat8(){
    //reminder: a getElementsByClassName egy listát add vissza , vagyis pontosabban *HTMLCollection-t* - nem tudom mi ez, de nekem ez marad lista , tömb 
    const elemek=document.getElementsByClassName("elem");
    const megjelenito=document.getElementsByClassName("megjelenito")[0];

    for (let index = 0; index < elemek.length; index++) {
        elemek[index].addEventListener("click",function(){
            megjelenito.innerHTML+=elemek[index].innerHTML
            
        });
    }
}


function feladatSajat(meddig, sortores) {

    const sajatdiv = document.getElementsByClassName("sajatdivem")[0];

    for (let i = 0; i < meddig; i++) {

        const cella = document.createElement("div");
        cella.classList.add("cell");
        cella.id = "cell-" + i;

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);


        //reminder : .style ** bármilyen belső css function ezzel is megtalálható
        cella.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        //span hozzáadás
        const span = document.createElement("span");
        span.innerHTML = "";
        cella.appendChild(span);

        cella.addEventListener("click", function() {
            const r2 = Math.floor(Math.random() * 256);
            const g2 = Math.floor(Math.random() * 256);
            const b2 = Math.floor(Math.random() * 256);

            //$ belső synthax ahogy látom - reminder ,, ennek még jobban utánanézni 
            //$ variable reference
            cella.style.backgroundColor = `rgb(${r2}, ${g2}, ${b2})`;
            span.innerHTML = `(${r2},${g2},${b2})`;
        });

        cella.addEventListener("dblclick", function() {
            sajatdiv.innerHTML = "";
            //reset [paraméteres rekurzivan]
            feladatSajat(meddig, sortores);
        });

        sajatdiv.appendChild(cella);
    }
}






