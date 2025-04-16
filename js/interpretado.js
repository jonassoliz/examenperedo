function Verificar(){
    var num = parseFloat(document.getElementById('numeroParImpar1').value);
    if (isNaN(num) || num === "") {
        document.getElementById("resultadoParImpar1").innerHTML="Por favor ingresa un número válido.";
        return;
    }
    else{
        if(num % 2 == 0){
           document.getElementById("resultadoParImpar1").innerHTML="resultado: par";
        } else{
            document.getElementById("resultadoParImpar1").innerHTML="resultado: impar";
        }
    }
    }
    function Verificar2(){
        var num = parseFloat(document.getElementById('numeroParImpar2').value);
        if (isNaN(num) || num === "") {
            document.getElementById("resultadoParImpar2").innerHTML="Por favor ingresa un número válido.";
            return;
        }
        else{
            if(num % 2 == 0){
               document.getElementById("resultadoParImpar2").innerHTML="resultado: par";
            } else{
                document.getElementById("resultadoParImpar2").innerHTML="resultado: impar";
            }
        }
        }
    function buscar(){
        var num1 = parseFloat(document.getElementById('num1_sec2').value);
        var num2 = parseFloat(document.getElementById('num2_sec2').value);
        var num3 = parseFloat(document.getElementById('num3_sec2').value);
        var mayor=0;
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            document.getElementById("mayorSec2").innerHTML = "Por favor ingresa números válidos en todos los campos.";
            return;
        }
        else{
        if(num1 > num2 && num1 > num3){
            mayor=num1;
            document.getElementById("mayorSec2").innerHTML="resultado: el mayor es el numero  "+mayor;
        } else if(num2 > num1 && num2 > num3){
            mayor=num2;
            document.getElementById("mayorSec2").innerHTML="resultado: el mayor es el numero " + mayor;
        } else if(num3 > num1 && num3 > num2){
            mayor=num3;
            document.getElementById("mayorSec2").innerHTML="resultado: el mayor es el numero " + mayor;
        }
    }
    }
    function buscar2(){
        var num1 = parseFloat(document.getElementById('num1_sec4').value);
        var num2 = parseFloat(document.getElementById('num2_sec4').value);
        var num3 = parseFloat(document.getElementById('num3_sec4').value);
        var mayor=0;
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            document.getElementById("mayorSec4").innerHTML = "Por favor ingresa números válidos en todos los campos.";
            return;
        }
        else{
        if(num1 > num2 && num1 > num3){
            mayor=num1;
            document.getElementById("mayorSec4").innerHTML="resultado: el mayor es el numero  "+mayor;
        } else if(num2 > num1 && num2 > num3){
            mayor=num2;
            document.getElementById("mayorSec4").innerHTML="resultado: el mayor es el numero " + mayor;
        } else if(num3 > num1 && num3 > num2){
            mayor=num3;
            document.getElementById("mayorSec4").innerHTML="resultado: el mayor es el numero " + mayor;
        }
    }
    }
    