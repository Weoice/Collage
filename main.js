var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start() {

    var synth = window.speechSynthesis;
    
    Webcam.attach(camera);
    
    setTimeout(function(){
    img_id = "selfie1"
    Take_Snapshot();
    speak_data = "taking your next selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id = "selfie2"
        Take_Snapshot();
        speak_data = "taking your next selfie in 5 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
        setTimeout(function(){
            img_id = "selfie3"
            Take_Snapshot();
            speak_data = "Done"
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
                
            }, 5000);
            
        }, 5000);

        

    }, 5000);

    

    
    
    
    }

    function Take_Snapshot() {

        Webcam.snap(function(data_uri){
        if(img_id=="selfie1") {
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie2") {
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie3") {
        document.getElementById("result3").innerHTML = '<img id="selfie_img" src="'+data_uri+'"/>';
    }
        
        })
    }
