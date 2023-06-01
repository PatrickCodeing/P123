noseX=0;
noseY=0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);

    if(document.getElementById("gender").value == "boy"){
    image(moustache, noseX-15, noseY, 35, 35);
    }
    else{
     image(lipstick,noseX-15, noseY+5, 35, 35);          
    }
}

function take_snapshot(){
    save('MyFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
    }