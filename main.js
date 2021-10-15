function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady);}
function modelReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
    console.log('gotresult');
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        if(results[0].label=="cow"){
            animal_Img='cow.png'
        }
        else if(results[0].label=="Bell"){
            animal_Img='dog.png'
        }
        else if(results[0].label=="Snapping"){
            animal_Img='pig.jpng'
        }
        else if(results[0].label=="Snapping"){
            animal_Img='sheep.png'
        }
        else if(results[0].label=="Snapping"){
            animal_Img='chicken.jpeg'    
        }
        else{
            animal_Img='horse.jpeg'
        }
        
    }
}