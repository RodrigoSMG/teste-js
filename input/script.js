function verificaNumero(){
    var inputNumero = documen.getElementById("numero")
    function verificaNumero(){
    var numero = parseFloat(inputNumero.value);
    if(numero > 0){
        document.getElementById
        ("resultado").textContent =
        "Numero positivo";
    }else if(numero < 0){
        document.getElementById
        ("resultado").textContent =
        "Numro negativo;";
    }else{
        document.getElementById
        ("resultado").textContent =
        "Numero é zero";}
}
}