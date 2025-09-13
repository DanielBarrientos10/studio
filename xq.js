function sumar() {
    let number1 = parseInt(document.getElementById("opciones1").value)
    let number2 = parseInt(document.getElementById("opciones2").value)
    let suma = number1 + number2
    document.getElementById("texto").textContent="La suma de es "+ suma;
}



function camisa() {
    let numberg = parseFloat(document.getElementById("opciones").value)
    let textoco = document.getElementById("texto2")

    if(numberg>5) {
        textoco.textContent="el numero es mayor a 5"
    } 
    else if(numberg<6, numberg>0) {
        textoco.textContent="el numero es menor o igual a 5"
    }
    else{
        textoco.textContent="el numero es incorrecto"
    }
}