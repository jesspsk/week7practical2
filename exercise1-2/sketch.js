let img1;
let img2;
let imgX1 = 50
let imgX2 = -350

async function setup(){
    img1 = await loadImage("assets/blue-sky.jpg");
    img2 = await loadImage("assets/plane.png")
    createCanvas(img1.width, img1.height)
}

function draw(){
    reset()
    image(img1, 0, 0)
    image(img2, imgX2, height/2, img2.width/4, img2.height/4)
    image(img2, imgX1, height/2, img2.width/2, img2.height/2)
    imgX1 += 2;
    imgX2 += 2.5;
}

function reset(){
    if(imgX1 > width){
        imgX1 = -300
    }
    if (imgX2 > width){
        imgX2 = -350
    }
}