let datoUno = document.getElementById('dato_1');
let datoDos = document.getElementById('dato_2');
let datoTres = document.getElementById('dato_3');
let datoCuatro = document.getElementById('dato_4');
let datoCinco = document.getElementById('dato_5');
let datoSeis = document.getElementById('dato_6');
let datoSiete = document.getElementById('dato_7');
let datoOcho = document.getElementById('dato_8');

    function mostrar(leer){
            let numeroAlAzar = Math.round(Math.random()*8);
            // let numeroAlAzarCopia = numeroAlAzar;

            // while(numeroAlAzarCopia == numeroAlAzar){
            //     numeroAlAzar = Math.round(Math.random()*8);

            //     console.log(numeroAlAzar);
            // }
            switch (numeroAlAzar){
                case 1:
                    function mostrarDatoUno (){
                        datoUno.style.display = 'block'
                        datoDos.style.display = 'none'
                        datoTres.style.display = 'none'
                        datoCuatro.style.display = 'none'
                        datoCinco.style.display = 'none'
                        datoSeis.style.display = 'none'
                        datoSiete.style.display = 'none'
                        datoOcho.style.display = 'none'
                    }
                    leer = mostrarDatoUno();
                    break;
                case 2: 
                    function mostrarDatoDos (){
                        datoUno.style.display = 'none'
                        datoDos.style.display = 'block'
                        datoTres.style.display = 'none'
                        datoCuatro.style.display = 'none'
                        datoCinco.style.display = 'none'
                        datoSeis.style.display = 'none'
                        datoSiete.style.display = 'none'
                        datoOcho.style.display = 'none'
                    }
                    leer = mostrarDatoDos();
                    break;
                case 3:
                    function mostrarDatoTres (){
                        datoUno.style.display = 'none'
                        datoDos.style.display = 'none'
                        datoTres.style.display = 'block'
                        datoCuatro.style.display = 'none'
                        datoCinco.style.display = 'none'
                        datoSeis.style.display = 'none'
                        datoSiete.style.display = 'none'
                        datoOcho.style.display = 'none'
                    }
                    leer = mostrarDatoTres();
                    break;
                case 4:
                    function mostrarDatoCuatro(){
                        datoUno.style.display = 'none'
                        datoDos.style.display = 'none'
                        datoTres.style.display = 'none'
                        datoCuatro.style.display = 'block'
                        datoCinco.style.display = 'none'
                        datoSeis.style.display = 'none'
                        datoSiete.style.display = 'none'
                        datoOcho.style.display = 'none'
                    }
                    leer = mostrarDatoCuatro();
                    break;
                case 5:
                    function mostrarDatoCinco(){
                        datoUno.style.display = 'none'
                        datoDos.style.display = 'none'
                        datoTres.style.display = 'none'
                        datoCuatro.style.display = 'none'
                        datoCinco.style.display = 'block'
                        datoSeis.style.display = 'none'
                        datoSiete.style.display = 'none'
                        datoOcho.style.display = 'none'
                    }
                    leer = mostrarDatoCinco();
                    break;
                case 6:
                    function mostrarDatoSeis(){
                        datoUno.style.display = 'none'
                        datoDos.style.display = 'none'
                        datoTres.style.display = 'none'
                        datoCuatro.style.display = 'none'
                        datoCinco.style.display = 'none'
                        datoSeis.style.display = 'block'
                        datoSiete.style.display = 'none'
                        datoOcho.style.display = 'none'
                    }
                    leer = mostrarDatoSeis();
                    break;    
                case 7:
                    function mostrarDatoSiete(){
                        datoUno.style.display = 'none'
                        datoDos.style.display = 'none'
                        datoTres.style.display = 'none'
                        datoCuatro.style.display = 'none'
                        datoCinco.style.display = 'none'
                        datoSeis.style.display = 'none'
                        datoSiete.style.display = 'block'
                        datoOcho.style.display = 'none'
                    }
                    leer = mostrarDatoSiete();
                    break;
                default:
                    function mostrarDatoOcho(){
                        datoUno.style.display = 'none'
                        datoDos.style.display = 'none'
                        datoTres.style.display = 'none'
                        datoCuatro.style.display = 'none'
                        datoCinco.style.display = 'none'
                        datoSeis.style.display = 'none'
                        datoSiete.style.display = 'none'
                        datoOcho.style.display = 'block'
                    }
                    leer = mostrarDatoOcho();
                    break;
            }
        }

   