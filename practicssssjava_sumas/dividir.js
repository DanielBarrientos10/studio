function dividir() {
    let numero1 = parseInt (document.getElementById("num1").value)
    let numero2 = parseInt (document.getElementById("num2").value)
    let dividir = numero1 / numero2
    document.getElementById ("resultado").textContent = "la divicion es "+ dividir;
}