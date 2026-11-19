let img;

async function setup(){
    createCanvas(512, 410)
    img = await loadImage("assets/pallas_cat.jpg")
}

function draw(){
    let h = height
    while (h <= image.height){
        image.height += 1
        image.width += 1
    }
    imageMode(CENTER);
    image(img, width/2, height/2, width, height)
}