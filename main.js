function setup(){
    canvas=createCanvas(300 , 300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GzOpmtacw/model.json",modelLoaded)
}

function modelLoaded(){
    console.log("Model is loaded")
    classifier.classify(video,gotResult)
}

function draw(){
    image(video,0,0,300,300);
}

function gotResult(error , results){
if (error){
    console.error(error)
}
else {
    console.log(results)
    document.getElementById("respatag").innerHTML=results[0].label
    document.getElementById("respatag2").innerHTML=results[0].confidence.toFixed(3)
}
}