let sky;
let night;

async function setup(){
    sky = await loadImage("assets/blue-sky.jpg")
    night = await loadImage("assets/night-sky.jpg")
    createCanvas(sky.widh, sky.height)
}

function draw(){
    image(night, 0, 0);
    image(sky, 0, 0);
    sky.loadPixels();
    sky.pixels[3] = sky.pixels[3] - 1;
    sky.updatePixels()
}