let producto1="aguardiente tapa azul"
let producto2="aguardiente tapa roja"
let producto3="aguardiente tapa verde"
let producto4="ron viejo de caldas"
let producto5="ron medellin"
let producto6="tequila don julio"
let producto7="vodka absulute"
let producto8="whiskey old pard"
let producto9="soda"
let producto10="cerveza corona"
let producto11="Pilsen"
let producto12="Aguila"
let producto13="Red bull"
let producto14="coca cola"
let producto15="picada"
let producto16="arepa de chocolo"
let producto17="margarita"
let producto18="mojito"
let producto19="granizado con gomitas"
let producto20="four loko"
let producto21="vino tinto las moras"

//CREACION DE ARREGLO EN JS
let arregloProductos=["aguardiente tapa azul","aguardiente tapa roja","aguardiente tapa verde","ron viejo de caldas","ron medellin"]

let arregloproductosPOO=Array("aguardiente tapa azul","aguardiente tapa roja","aguardiente tapa verde","ron viejo de caldas","ron medellin")

//imprimiendo un arreglo
console.log(arregloProductos)
console.log(arregloproductosPOO)

//accediendo a un cajon del arreglo
console.log(arregloProductos[1])

//arreglo de numeros
let precioProductos=[145000,130000,95000,155000,100000]
console.log(precioProductos)
console.log(precioProductos[5])

//metodos para recorrer un arreglo (esculcar)

//FILTRAR UN ARREGLO
let filtrado=precioProductos.filter(function(precio){

    return(precio<=100000)

})
console.log(filtrado)

let filtrado2=precioProductos.filter(function(precio){

    return(precio==155000)
})
console.log(filtrado2)

let filtrado3=precioProductos.filter(function(precio){

    return(precio>=105000)
})
console.log(filtrado3)

let filtrado4=precioProductos.filter(function(precio){

    return(precio==130000)
})
console.log(filtrado4)

let filtrado5=precioProductos.filter(function(precio){

    return(precio==70000)
})
console.log(filtrado5)

//necesito aplicar el iva del 19% a todos los precios