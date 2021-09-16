//Vẽ 2 hình tròn
class Circle {
    constructor(x,y,radius, left) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.left;
    }
}


//Set color
function getRamdomHex() {
    return Math.floor(Math.random() * 255);
}
function getColor() {
    let red = getRamdomHex();
    let green = getRamdomHex();
    let blue = getRamdomHex();

    return 'rgb(' + red + ',' + blue + ',' + green +')';
}


function drawCircle() {
    let ctx = document.getElementById('canvas').getContext('2d');

    let radius = Math.floor(Math.random() * 80);
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    let cirlce = new Circle(x,y,radius);

    ctx.beginPath();
    ctx.arc(cirlce.x, cirlce.y, cirlce.radius, 0, 2 * Math.PI);
    ctx.fillStyle = getColor();
    ctx.fill();

}
let myVar = setInterval(draw,2000);

function stop() {
    clearInterval(myVar);
}

function draw() {
    for (let i=0; i<30; i++) {
        drawCircle();
    }
}



