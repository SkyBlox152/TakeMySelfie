var SpeechRecognition=window.webkitSpeechRecognition;// Web speech is an api which is used to recognise what we are speaking and convert that to text


var recognition=new SpeechRecognition();// we are calling SpeechRecognition From recongnition
 function Say()
 {
     document.getElementById("textbox").innerHTML="";
     recognition.start();
 }

 recognition.onresult=function run (event) { 
     console.log(event)
    var Content=event.results[0][0].transcript;//it will get the value from seech recognition event.
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        speak();
    }
 }

 function speak(){
     var synth =window.speechSynthesis; // This Api will convert Text To Speech
     
     speak_data="Taking your selfie in 5 seconds Say Cheese!!!!!";//This Will take the values from textbox and store it in speak data

     var utterThis=new SpeechSynthesisUtterance(speak_data)//This will store the text in utterThis and  SpeechSynthesisUtterance will convert it to speech ( SpeechSynthesisUtterance is a Api that will convert your text to speech)

     synth.speak(utterThis);//it will trigger the system to speak whatever you pass inside the speech function.
   
      Webcam.attach(camera)

      setTimeout(Selfie_app,5000);
      function Selfie_app(){
          take_snapshot();
          save();
      }
 }

 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });

  camera=document.getElementById("camera");

  function take_snapshot()
  {
      Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
      });
  }
  function save()
  {
      link=document.getElementById("link");
      image=document.getElementById("selfie_image").src;
      link.href=image;
      link.click();
  }

  