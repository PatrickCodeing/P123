function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,130);

    pose = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}

function draw(){
    background('grey');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}