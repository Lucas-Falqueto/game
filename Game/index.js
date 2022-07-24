const canvas = document.querySelector("canvas") //Canvas
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576



c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)


const image = new Image();
image.src = './img/Pellet Town.png'
console.log(image)

image.onload = () => {
    c.drawImage(image, -1100, -760) //param 1 = imagem, eixoX, eixoY
}



