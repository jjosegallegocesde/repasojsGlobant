
//rutina para detectar el clic sobre un boton
let botonCambio=document.getElementById("boton")
botonCambio.addEventListener("click",cambiarArtista)

//variable tipo bandera
let bandera=true





function cambiarArtista(){

    //cambio el estado de mi variable bandera
    bandera=!bandera

    //condicional para evaluar la bandera
    if(bandera==true){ //camino de verdad

        console.log("la bandera es positiva")
         //se crea referencia a la foto
         let etiquetaImagen=document.getElementById("imagen1")
         etiquetaImagen.src="img/foto1.jpeg"
 
         //se crea referencia al video
         let etiquetaVideo=document.getElementById("video1")
         etiquetaVideo.src="video/video1.mp4"
 
         //se crea referencia a la fecha del concierto
         let etiquetaFechaConcierto=document.getElementById("fechaConcierto")
         etiquetaFechaConcierto.textContent="Se presentan en marzo"

    }else{ //camino de la falsedad

        console.log("la bandera es falsa")
        //se crea referencia a la foto
        let etiquetaImagen=document.getElementById("imagen1")
        etiquetaImagen.src="img/foto2.jpg"

        //se crea referencia al video
        let etiquetaVideo=document.getElementById("video1")
        etiquetaVideo.src="video/video2.mp4"

        //se crea referencia a la fecha del concierto
        let etiquetaFechaConcierto=document.getElementById("fechaConcierto")
        etiquetaFechaConcierto.textContent="Se presentan en semana santa"
    }



    
}
