let ctx = document.getElementById('canvas').getContext('2d');
let XPosition = 100;
let w = 200;
let h = 100;

function draw() {
    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.fillRect(XPosition,YPosition,w,h);
}

let YPosition = 100;
let YDistance = 1;
let XDistance =1;

function moveUpDown() {
    ctx.clearRect(XPosition,YPosition,w,h);

    let touchTop = YPosition < 0;
    let touchBottom = YPosition + h > 630;

    if (touchBottom || touchTop) {
        YDistance = -YDistance;
    }
    YPosition += YDistance;
    draw();
}

function moveLeftRight() {
    ctx.clearRect(XPosition,YPosition,w,h);

    let touchLeft = XPosition  > 1155;
    let touchRight = XPosition + w < 200;

    if (touchLeft || touchRight) {
        XDistance = -XDistance;
    }
    XPosition += XDistance;
    draw();
}
setInterval(moveUpDown, 0.1);
setInterval(moveLeftRight, 0.1);
