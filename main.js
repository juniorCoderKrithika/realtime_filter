noseX="";
noseY="";

function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
 
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX,noseY,20);
}
function take_snapshot(){
save("MyFilterSelfie.png")
}

function modelLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
console.log("noseX = " + results[0].pose.nose.x);
console.log("noseY = " + results[0].pose.nose.y);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
    }
}