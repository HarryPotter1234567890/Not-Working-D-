screen_width = 0;
scren_height = 0;

peterR = "";
speak_data = "";
to_number = "";

x = 0;
y = 0;

draw_peterR = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
loadImage(peterR);
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);

    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing Peter Rabbit "; 
      draw_peterR = "set";
    }else{
      document.getElementById("status").innerHTML = "The speech has not recognized a number D: ";
    }

    
}

function setup() {

  canvas = createCanvas(700, 400);
canvas.center();
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
createCanvas(screen_width, screen_height-150);
canvas.position(100);
}

function draw() {
  if(draw_peterR == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Peter Rabbits drawn";
    draw_peterR = "";
    for(var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      Image(peterR, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
