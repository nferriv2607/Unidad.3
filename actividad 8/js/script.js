
function MensajeSwitch() {
    let numero1;
    numero1 = parseInt(document.getElementById("numero1").value, 10);
    switch (numero1){
        case 21:
        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            document.getElementById("solucion").innerHTML = "Buenas noches";
        break;

        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById("solucion").innerHTML = "Buenos dias";
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            document.getElementById("solucion").innerHTML = "Buenas tardes";
        break;
        default:
            document.getElementById("solucion").innerHTML = "No es un número válido";

 function MensajeIf() {
    let numero1;
        numero1 = parseInt(document.getElementById("numero1").value,10);
             if((numero1)>=7 &&(numero1)<=11){
                    document.getElementById("solucion").innerHTML = "Buenos dias";
                }
                else if ((numero1)>=12 &&(numero1)<=21){
                    document.getElementById("solucion").innerHTML = "Buenas tardes";
                }
                else if (((numero1)>=0 &&(numero1)<=6)  ((numero1)>=22 &&(numero1)<=24)) {
                    document.getElementById("solucion").innerHTML = "Buenas noches ";
                }
                else{
                    document.getElementById("solucion").innerHTML = "No es valido";
                }
            }
