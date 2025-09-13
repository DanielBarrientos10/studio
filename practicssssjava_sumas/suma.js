
function sumar () {
    let numero1 = parseInt (document.getElementById("num1").value)
    let numero2 = parseInt (document.getElementById("num2").value)
    let suma = numero1 + numero2
    document.getElementById ("resultado").textContent = "la suma es "+ suma;
}











































function sd() {
    let op = parseFloat(document.getElementById("opciones").value)
    let text = document.getElementById("texto")

    if(op>=5) {
        text.textContent="mayor o igual a 5 "+ op;
    }else{
        text.textContent="menor a 5 "+ op;
    }
}