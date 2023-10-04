//canvas selector

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

 //redimension

 canvas.width = innerWidth;
 canvas.height = innerHeight;


function drawCircle (posX, posY, radious, color){
    const PI_DOUBLE = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(posX, posY, radious, 0, PI_DOUBLE)
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

drawCircle(900, 900, 600, 'red');


function drawRect(posX, posY, width, height, color){
    ctx.beginPath();
    ctx.rect(posX, posY, width, height);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();  
};

drawRect(2000, 1000, 300, 400, 'orange');
