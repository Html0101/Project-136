status = "";
video = "";
objectWant = document.getElementById("objectWantDetect");

function setup() 
{ 
    canvas = createCanvas(480, 580);
    canvas.center();

    video = createCapture(480, 580);
    video.hide();
}

function start() 
{ 
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() 
{ 
    console.log("Model Loaded");
    status = true;
}

function draw() 
{ 
    image(video, 0, 0, 480, 580);
}