function preload(){
video=createVideo("");
video.hide();
}

function setup(){
canvas=createCanvas(500,400);
canvas.position(500,250);
}

function draw(){
image(video,0,0,500,400);
}

