var car1x = 10;
var car1y = 10;
var car1height = 70;
var car1width = 120;
var car2x = 10;
var car2y = 100;
var car2height = 70;
var car2width = 120;
var car1_image,car2_image;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvas_image;
function add(){
    canvas_image = new Image();
    canvas_image.onload = canvasUpload;
    canvas_image.src = "background_image.jpg";
    car1_image = new Image();
    car1_image.onload = first_car;
    car1_image.src = "car1.png";
    car2_image = new Image();
    car2_image.onload = second_car;
    car2_image.src = "car2 (1).png";
}
function canvasUpload(){
    ctx.drawImage(canvas_image,0,0,canvas.width,canvas.height);
}
function first_car(){
    ctx.drawImage(car1_image,car1x,car1y,car1width,car1height);
}
function second_car(){
    ctx.drawImage(car2_image,car2x,car2y,car2width,car2height);
}
window.addEventListener("keydown", down_key);
function down_key(e){
    console.log(e.keyCode);
    if(e.keyCode == '38'){
        car1Up();
    }
    if(e.keyCode == '40'){
        car1Down();
    }
    if(e.keyCode == '37'){
        car1Left();
    }
    if(e.keyCode == '39'){
        car1Right();
    }
    if(e.keyCode == '87'){//w
        car2Up();
    }
    if(e.keyCode == '65'){//a
        car2Left();
    }
    if(e.keyCode == '68'){//d
        car2Right();
    }
    if(e.keyCode == '83'){//s
        car2Down()
    }
}
function car1Up(){
    console.log("inside car1Up()");
    if(car1y > 0){
        car1y = car1y - 10;
        canvasUpload();
        first_car();
        second_car();
    }
}
function car1Down(){
    if(car1y <= 500){
        console.log("inside car1Down()");
        car1y = car1y + 10;
        canvasUpload();
        first_car();
        second_car();
    }
}
function car1Right(){
    if(car1x <= 500){
        console.log("inside car1Right()");
        car1x = car1x + 10;
        canvasUpload();
        first_car();
        second_car();
    }
}
function car1Left(){
    if(car1x > 0){
        console.log("inside car1Left()");
        car1x = car1x - 10;
        canvasUpload();
        first_car();
        second_car();
    }
}
function car2Up(){
    if(car2y > 0){
        car2y = car2y - 10;
        canvasUpload();
        first_car();
        second_car();
    }
}
function car2Down(){
    if(car2y <= 500){
        car2y = car2y + 10;
        canvasUpload();
        first_car();
        second_car();
    }
}
function car2Left(){
    if(car2x > 0){
        car2x = car2x - 10;
        canvasUpload();
        first_car();
        second_car();
    }
}
function car2Right(){
    if(car2x <= 500){
        car2x = car2x + 10;
        canvasUpload();
        first_car();
        second_car();
    }
}
function car1win(){
    if(car1 > 700)
        document.getElementById('game_status').innerHTML = "Car 1 Wins";
}