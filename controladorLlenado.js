let arregloProductos=[
    "aguardiente tapa azul",
    "aguardiente tapa roja",
    "aguardiente tapa verde",
    "ron viejo de caldas",
    "ron medellin",
    "tequila don julio",
    "vodka absulute",
    "whiskey old pard",
    "soda",
    "cerveza corona"
]

//Necesito una referencia a la lista del documento html
let etiquetaLista=document.getElementById("lista")

//Recorrer el arreglo para obtebner cada nombre del producto y asiganrlo a un <li></li>
arregloProductos.forEach(function(producto){
    
    //TRAVERSING: CREAER ETIQUETAS DE HTML DESDE JS
    let elementoLista=document.createElement("li")

    //ascociar el texto de cada producto al LI que cree
    elementoLista.textContent=producto

    //Asociemos las etiquetas creadas
    //ASOCIAMOS PADRES E HIJOS
    etiquetaLista.appendChild(elementoLista)
})


//CREEMOS BOLSOS (OBJETOS DE DATOS EN JS)
let objetoPersona={

    nombre:"Juan José",
    apellidos:"Gallego Mesa",
    edad:32,
    telefono:"3225962363",
    profesion:"Ingeniero",
    equipoFutbol:"Envigado FC",
    comidasFavoritas:["Salchichon","Frijoles","Chicharron"]

}
console.log(objetoPersona)
console.log(objetoPersona.nombre)
console.log(objetoPersona.comidasFavoritas)