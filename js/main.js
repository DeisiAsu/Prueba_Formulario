function IMC(elEvento){
    elEvento.preventDefault();

    var Edad = document.querySelector("#Edad").value;
    var peso = document.querySelector("#PesoA").value;
    var altura =document.querySelector("#Altura1").value;
    var boton = document.querySelector("#boton");
    var respuestas = document.querySelector("#respuestas");
    

    var formula = peso/(altura*altura);
    
    // Medidas de un adulto.

   if(formula < 18.5){
        respuestas.innerHTML = '<h3> Bajo peso y tu IMC es de:  </h3> ' + Math.round (formula)
    } else if (formula >18.5 & formula< 24.9){
        respuestas.innerHTML = '<h3> Peso normal y tu IMC es de: </h3>' + Math.round (formula)
    }else if (formula > 25 & formula < 29.9){
        respuestas.innerHTML = '<h3> Sobrepeso y tu IMC es de: </h3>'   + Math.round (formula)
    }else if (formula > 30 & formula < 39.9){
        respuestas.innerHTML = '<h3> Obsesidad y tu IMC es de: </h3>'   + Math.round (formula)
    }else if (formula >=40){
        respuestas.innerHTML = '<h3> Obsesidad extrema y tu IMC es de: </h3>'+ Math.round (formula)
    }    
}

var boton = document.querySelector("#boton");
boton.addEventListener("submit",IMC)
