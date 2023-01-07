function preload(){
    
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.position(630,180);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,100, 80 , 450, 450);
}

function take_snapshot(){
    save("frame.png");
}