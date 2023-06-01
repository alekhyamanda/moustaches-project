noseX = 0;
noseY = 0;
function preload()
{
   moustache = loadImage('https://i.postimg.cc/cCX9zLzs/360-F-260837391-2-ROd-U1i-W4qko-N0bgx-Xy-SAq-QYp-Uye3y-Iv-removebg-preview.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video,0 ,0, 300, 300);
    image(moustache, noseX-5, noseY+10, 30, 30);

}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}