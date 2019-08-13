'use strict';
(

  function() {

    console.log("Hola, tu javascript ha cargado!");

    function saludo(texto){
      console.log(texto);
    }

    var boton = document.getElementById("calcular");

    //Creamos una función para construir la fila que tenemos que agregar a nuestra tabla

    function calculoCO2(){

      //Mandamos a llamar a las entradas de donde sacaré los datos para agregar a la fila

      var correos = document.getElementById("correos");

      // var tabla = document.getElementById("mi-tabla"); //Esto en caso de haber usado el método getElementById y aplicando un id a la tabla en el HTML
      var tabla = document.querySelector(".list table");

      //Concatenar
      // 1 + 2 = 3
      // "1" + "2" = "12"


      //Condicionamos la construcción del renglón, hasta que sean llenados los valores de cada input/entrada de texto
        if (correos.value == "") {
           alert("Vamos, tu sabes cuántos correos tienes");
         } else {

                //Forma 1: construyendo el código html desde el javascript concatenando cadenas y valores

                var kilogramosCO2 = correos.value * 2.196 / 7300;

                var milesKm = kilogramosCO2 * 1000 / 2.196;

                var row = "<tr>"+
                              "<td>"+kilogramosCO2+"</td>"+
                              "<td>"+milesKm+"</td>"+
                          "</tr>";

                 tabla.insertRow(-1).innerHTML = row;

                //Forma 2 insertando el valor de cada input cela por

              //  var row = tabla.insertRow(-1);

              //  row.insertCell(0).innerHTML=name.value;
              //  row.insertCell(1).innerHTML=lastName.value;
              //  row.insertCell(2).innerHTML=email.value;
              //  row.insertCell(3).innerHTML=phone.value;


                //Forma 3: insetando cada ciclo en las celdas a través de un ciclo for

                  // var inputs = [name.value, lastName.value, email.value, phone.value];
                  //
                  // var row = tabla.insertRow(-1);
                  //
                  // for (var i=0; i<4; i++) {
                  //           row.insertCell(i).innerHTML = inputs [i];
                  // }
                  //


                  //Limpia los valores de las entradas de texto después de haberlos agregado a la tabla
                    // name.value = "";
                    // lastName.value = "";
                    // email.value = "";
                    // phone.value = "";
                  }

                }

  //Llamamos a la función saludo y a la función construirRow cada vez que damos click en el botón de guardar
    boton.addEventListener("click", function(){
      saludo("Hola desde el botón!");
      calculoCO2();
    })

    // Otro tipo de eventos que pueden suceder
    //
    // boton.addEventListener("mouseover", function(){
    //   saludo("Pasaste tu mouse por del botón!");
    // })
    //
    // boton.addEventListener("mouseout", function(){
    //   saludo("Hey! Qué haces? Quitaste tu mouse por del botón!");
    // })

    saludo("Hola desde la función saludo!");

    }

)();
