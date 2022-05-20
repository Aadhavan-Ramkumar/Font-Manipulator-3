var Difference = 0

function setup() {
    Video = createCapture(VIDEO)
    Video.size(600, 500)
    Video.position(25, 100)

    Canvas = createCanvas(500, 500)
    Canvas.position(750, 100)

    PoseNet = ml5.poseNet(Video, function () {
        console.log("PoseNet is ready!")
    })
    PoseNet.on("pose", GetPoses)
}

function GetPoses(Results) {
    if (Results.length > 0) {
        LeftWristX = Results[0].pose.leftWrist.x
        RightWristX = Results[0].pose.rightWrist.x
        Difference = floor(LeftWristX - RightWristX)
    }
}

function draw() {
    background("#6C91C2")
    textSize(Difference)
    fill("#FFE787")
    text("Sus", 50, 400)
}