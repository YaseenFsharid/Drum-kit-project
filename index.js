/*
 As the role said query selector will return an array and that is helpfull in this project 
casue i wanna target the whole buttons that's include sounds or intended to make sounds 
here we go and we will see the result and solution of this challenge 
and the length proparity will added to see how many buttons are there. 

// This comes from inhertance table that is as flow both video and audio inherts this interface 

    htmlMediaElemnts < --  htmlELemnt < -- Element < -- node <-- eventTarget

*/



var numOFDrumButton = document.querySelectorAll(".drum").length;


for(var i = 0; i < numOFDrumButton  ;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
       
    var buttonInnerHTML = this.innerHTML ; 
    makeSound(buttonInnerHTML); 
    buttonAnimation(buttonInnerHTML);
    });
}



//detecting keyboard click function callback when event is happened this is the key word event means
//and thus we we don't use any variable or query selection cause the function will start when the event is happened again 
document.addEventListener("keydown" ,function(event){
makeSound(event.key);
buttonAnimation(event.key)
});



//detecting button click 
function makeSound(key ){
 
  switch (key) {
    case 'w':
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case 'a':
        var kickboss = new Audio("sounds/kick-bass.mp3");
        kickboss.play();
        break;
    case 's':
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case 'd':
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case 'j':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case 'k' :
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case 'l':
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;           
    default:
        console.log(key);
        break;
  }
}

function buttonAnimation(currentKey){
 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");

 // this funtion takes two parameter the first is the thing that you wanna do and seconed is the duraition 
 setTimeout( function(){
    activeButton.classList.remove("pressed");
 },100);
}
