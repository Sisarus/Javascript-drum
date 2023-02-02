var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Detecting Button Press

for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        MakeSound(buttonInnerHTML);
        ButtonAnimation(buttonInnerHTML);
    });
};

// Detecting Keyboard Press

document.addEventListener('keypress', function(event){
    MakeSound(event.key);
    ButtonAnimation(event.key);
});

function MakeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function ButtonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);

   activeButton.classList.add('pressed');

   setTimeout(function() {
    activeButton.classList.remove('pressed');
   }, 100);
}


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
// this.style.color = "white";


// var buttons = document.querySelectorAll(".drum");

// for (var i = 0; i < buttons.length; ++i)
//   buttons[i].addEventListener("click",handleClick);

// var sounds = {
//   w: "sounds/tom-1.mp3",
//   a: "sounds/tom-4.mp3",
//   s: "sounds/tom-3.mp3",
//   d: "sounds/tom-2.mp3",
//   j: "sounds/snare.mp3",
//   k: "sounds/kick-bass.mp3",
//   l: "sounds/crash.mp3"
// };

// function handleClick(Event){
//   if (sounds.hasOwnProperty(this.innerText))
//     (new Audio(sounds[this.innerText])).play();
// }


// var v = document.querySelectorAll(".drum");
//   var soundList = ["crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"];
//   var temp;
//   for (let i = 0; i < v.length; i++)
//    {
    
//     document.querySelectorAll("button")[i].addEventListener("click", function() 
//     {
 
//       temp = soundList[i];
//       var audio = new Audio('sounds/'+ temp);
//       audio.play();
//       (this).style.color = "white";
//       //document.getElementsByTagName(this).style.color = "white";
      
//     });
//   }