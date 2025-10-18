
// Variable para index.html //  lo cambio pq se repite
  let titulo = document.querySelector("main h2");
   if (titulo) {
    let colorInicial = "red";
    titulo.style.color = colorInicial;
    titulo.style.fontSize = "28px";
    setTimeout(() => {
    let nuevoColor = "";
    titulo.style.color = nuevoColor;
    }, 3000);
  }


//-- Variable para destinos -- //  Cambiar el texto y mostrar otro al que se le agrega un enlace

  function cambiartexto ()  {
    document.getElementById("oferta").innerHTML = `<a  href= "contacto.html" target="_blank">"Reservando en dos o más destinos precios especiales, contáctanos para más información.</a>`;
  }

  //-- Variable para Imagenes ( Hoteles y Actividades ) -- //

  const imagenes = document.querySelectorAll ("img");
  imagenes.forEach(function(img)  {
    img.addEventListener("click", function() {
      alert(img.alt);                                       // -- Muestra la desccipción de la ímagen si se hace click -- //
      });
    });
  const cambiocolor = document.querySelectorAll("ul li a,ol li a");
  cambiocolor.forEach(a => {
    a.addEventListener("mouseover", () => {
      a.style.color = "orange";   //                         //-- Cambio el color de todos los enlaces que esten dentro de li, que a su vez esten dentro de ol o ul cuando pasas el raton por encima y luego vuelve a su color original -- //
    });                                                                                   
    a.addEventListener("mouseout", () => {
      a.style.color = ""; 
    });
  });
  
// Variable para el formulario (Contacto)

const formulario = document.querySelector("form"); 

if(formulario) { 
  formulario.addEventListener("submit", function(event) {                                   //-- Para que salga un mensaje personalizado cuando se envia el formulario --//
    const nombre = formulario.nombre.value.trim();                                      
    const email = formulario.email.value.trim();
    const mensaje = formulario.mensaje.value.trim();
    if(nombre === "" || email === "") {
      alert("Por favor, completa los campos obligatorios: Nombre y Email");
      event.preventDefault();
      return; 
    }
    alert(`¡Gracias ${nombre}! Recibiras noticias nuestras muy pronto!`);
  });
}