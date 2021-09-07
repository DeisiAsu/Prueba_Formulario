function IMC(elEvento){
    elEvento.preventDefault();

    var Edad = document.querySelector("#Edad").value;
    var peso = document.querySelector("#PesoA").value;
    var altura =document.querySelector("#Altura1").value;
    var boton = document.querySelector("#boton");
    var respuestas = document.querySelector("#respuestas");
    

    var formula = peso/(altura*altura);

    
    if(formula < 18.5){
        respuestas.innerHTML = '<h3>"IMC: Bajo peso"</h3>'
    } else if (formula >18.5 & formula< 24.9){
        respuestas.innerHTML = '<h3>"IMC: Peso normal"</h3>'
    }else if (formula > 25 & formula< 29.9){
        respuestas.innerHTML = '<h3>"IMC: Sobrepeso"</h3>'
    }else if (formula >=30){
        respuestas.innerHTML = '<h3>"IMC: Obsesidad"</h3>'
    }
}

var boton = document.querySelector("#boton");
boton.addEventListener("submit",IMC)
