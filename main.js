song1 = "";
song2 = "";
leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function ModelLoaded(){
    console.log("PoseNet has been initialized!");
}

function gotPoses(results){
    if(results.length > 0){
    leftX = results[0].pose.leftWrist.x;
    rightX = results[0].pose.rightWrist.x;
    leftY = results[0].pose.leftWrist.y;
    rightY = results[0].pose.rightWrist.y;
    console.log("leftWristX = " + leftX + "leftWristY = " + leftY);
    console.log("rightWristX = " + rightX + "rightWristY = " + rightY);
}}

