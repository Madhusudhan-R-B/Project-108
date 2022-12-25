function startClassify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/G7Drixqim/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        random_r = Math.floor(Math.random()*255)+1;
        random_g = Math.floor(Math.random()*255)+1;
        random_b = Math.floor(Math.random()*255)+1;

        document.getElementById("animal").innerHTML = "I can hear a " + results[0].label;
        document.getElementById("accuracy").innerHTML = "I feel " + (results[0].confidence * 100).toFixed(2) + "% accurate";
        document.getElementById("animal").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";
        document.getElementById("accuracy").style.color = "rgb("+random_r+", "+random_g+", "+random_b+")";
    }
}