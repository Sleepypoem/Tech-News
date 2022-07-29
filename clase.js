/*
const paragraph = document.getElementById('para');
paragraph.style.color = "red";
console.log(paragraph.innerHTML);

let nuevoP = document.createElement("p");
let txt = document.createTextNode("Hola");
let div = document.getElementById("div");
cuerpo = document.getElementById("body")
div.prepend(nuevoP);
nuevoP.prepend(txt);

const cambiarColor = () => {
    if (nuevoP.style.color === "white") {
        nuevoP.style.color = "green"
    } else {
        nuevoP.style.color = "white"
    }

};
console.log(cuerpo);
cuerpo.addEventListener("click", cambiarColor);

let n = 127;

*/

function sample(n) {
    let s = 0, i = 0;
    while (n > 0) {
        let r = n % 10;
        let p = 8 ** i;
        s = s + p * r;
        i++;
        n = n / 10;
    }

    return s
}

console.log(sample(127))