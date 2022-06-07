noseX="";
noseY="";

function preload(){

    clown_nose=loadImage("https://i.postimg.cc/HkgVNM4w/clown-nose.png");
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
image(clown_nose,noseX-15,noseY-15,30,30);
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
