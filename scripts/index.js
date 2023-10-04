  //contexto del canvas

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

   //redimension

   canvas.width = innerWidth;
   canvas.height = innerHeight;
   const PI_DOUBLE = 2 * Math.PI;


//funcion circulo

function drawCircle (posX, posY, radious, color){
  const PI_DOUBLE = 2 * Math.PI;
  ctx.beginPath();
  ctx.arc(posX, posY, radious, 0, PI_DOUBLE)
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
};


//funcion rectangulo

function drawRect(posX, posY, width, height, color){
  ctx.beginPath();
  ctx.rect(posX, posY, width, height);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();  
};



  // Circunferencia main
  drawCircle(500, 300, 200, 'white');


   // Circunferencia ojo izq
   drawCircle(400, 200, 20, 'white');

  // Circunferencia ojo drcho

  drawCircle(600, 200, 20, 'white');


  // Circunferencia smile
  const PI = 3.1416;
  ctx.beginPath();
  ctx.arc(500, 300, 150, 0, PI)
  ctx.stroke();
  ctx.closePath();


  //Array colores:

  const colors = ['red', 'blue', 'brown', 'yellow', 'white'];


  /*--------------------------------------*/


  // Rectangulo main

  drawRect(250, 700, 300, 300, 'white');



  // Circunferencia up R
  ctx.beginPath();
  ctx.arc(470, 775, 45, 0, PI_DOUBLE)
  ctx.stroke();
  ctx.fillStyle = colors[2];
  ctx.fill();
  ctx.closePath();

  // Circunferencia up L
  ctx.beginPath();
  ctx.arc(330, 775, 45, 0, PI_DOUBLE)
  ctx.stroke();
  ctx.fillStyle = colors[1];
  ctx.fill();
  ctx.closePath();

  // Circunferencia DOWN L
  ctx.beginPath();
  ctx.arc(330, 920, 45, 0, PI_DOUBLE)
  ctx.stroke();
  ctx.fillStyle = colors[0];
  ctx.fill();
  ctx.closePath();

  // Circunferencia DOWN R
  ctx.beginPath();
  ctx.arc(470, 920, 45, 0, PI_DOUBLE)
  ctx.stroke();
  ctx.fillStyle = colors[3];
  ctx.fill();
  ctx.closePath();


  /*--------------------------------------*/

  // Rectangulo main
  drawRect(600, 700, 300, 300, 'white');


  //lines

  ctx.beginPath();
  ctx.moveTo(750, 700);
  ctx.lineTo(750, 870);
  ctx.stroke();
  ctx.closePath();

  //lines

  ctx.beginPath();
  ctx.moveTo(600, 1000);
  ctx.lineTo(750, 870);
  ctx.lineTo(900, 1000);
  ctx.stroke();
  ctx.closePath();

  /*--------------------------------------*/

  // Rectangulo main

  drawRect(950, 700, 300, 300, 'white');
    

  // Rectangulo inside

  drawRect(1000, 750, 200, 200, 'blue');


  // Circunferencia Inside
  ctx.beginPath();
  ctx.arc(1100, 850, 45, 0, PI_DOUBLE)
  ctx.stroke();
  ctx.fillStyle = colors[4];
  ctx.fill();
  ctx.closePath();