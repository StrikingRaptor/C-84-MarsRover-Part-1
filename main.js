canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=100;

rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function addImage(){
background_imgTag=new Image();
background_imgTag.onload=uploadBg;
background_imgTag.src=background_image;

rover_imgTag=new Image();
rover_imgTag.onload=uploadR;
rover_imgTag.src=rover_image;
}
function uploadBg(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadR(){
ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_height,rover_width);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
 keyPressed=e.keyCode;
 console.log(keyPressed);
 
    if(keyPressed=='37'){
    left();
    console.log("leftkeyPressed");
 }
    if(keyPressed=='38'){
        up();
   console.log("upkeyPressed");
    }
    if(keyPressed=='39'){
        right();
       console.log("rightkeyPressed");
    }
    if(keyPressed=='40'){
            down();
           console.log("downkeyPressed");
        }}

