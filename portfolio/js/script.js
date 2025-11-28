function cambiarcolores() {

            const logofoot=document.getElementById("logo2");
            const logohead=document.getElementById("logo");
            const temas = document.getElementById("tema");

            if(temas.getAttribute("href")==="./css/estilos.css"){

                logofoot.setAttribute("src", "./img/logocabecera2.webp");
                logohead.setAttribute("src", "./img/logocabecera2.webp");
                temas.setAttribute("href","./css/estilosalter.css");
            }else{
                temas.setAttribute("href","./css/estilos.css");
                logohead.setAttribute("src", "./img/logocabecera.webp");
                logofoot.setAttribute("src", "./img/logocabecera.webp");
            }

        }