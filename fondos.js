
let imagenes = ["./fondo.jpeg", "./fondo2.jpeg", "./fondo3.jpeg"]
let fondo = document.getElementById("fondo")
let i = 0;
let cambiar = () => {
    fondo.src = imagenes[i]
    i = (i < imagenes.length - 1) ? i + 1 : 0;
}

let intervalo = () => {
    setInterval(cambiar, 2500)
}



export default intervalo