// var sound=[];
// sound=new Audio("sounds/crash.mp3");
// sound[1]=new Audio("sounds/kick-bass.mp3");
// sound[2]=new Audio("sounds/snare.mp3");
// sound[3]=new Audio("sounds/tom-1.mp3");
// sound[4]=new Audio("sounds/tom-2.mp3");
// sound[5]=new Audio("sounds/tom-3.mp3");
// Detecting Button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var but=this.innerHTML;
    getTheBeat(but);
  });
}
  // Detecing key press
    document.addEventListener("keypress",function(event){
        getTheBeat(event.key);


      });
function getTheBeat(key){
            var sound;
                  switch (key) {
                    case 'w':
                    sound=new Audio("sounds/tom-4.mp3");
                    sound.play();
                    break;
                    case 'a':
                    sound=new Audio("sounds/tom-3.mp3");
                    sound.play();
                    break;
                    case 's':
                    sound=new Audio("sounds/tom-2.mp3");
                    sound.play();
                    break;
                    case 'd':
                    sound=new Audio("sounds/tom-1.mp3");
                    sound.play();
                    break;
                    case 'j':
                    sound=new Audio("sounds/snare.mp3");
                    sound.play();
                    break;
                    case 'k':
                    sound=new Audio("sounds/kick-bass.mp3");
                    sound.play();
                    break;
                    case 'l':
                    sound=new Audio("sounds/crash.mp3");
                    sound.play();
                    break;
                    default:console.log(this.innerHTML);


}
}
