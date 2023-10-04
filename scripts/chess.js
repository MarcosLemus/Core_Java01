        //canvas selector

        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

         //redimension

         canvas.width = innerWidth;
         canvas.height = innerHeight;

         //Rectagle black
let posX = 0;


function chessBlack(posX, posY){
    ctx.beginPath();
    ctx.rect(posX, posY, 90, 90);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
};

chessBlack(0, 0);


function chessWhite(posX, posY){
    ctx.beginPath();
    ctx.rect(posX, posY, 90, 90);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
};

let aumentoX = 0;
chessWhite(aumentoX, 0)

for(let i = 0; i < 10; i++){
     aumentoX = aumentoX + 180;
}
//chessWhite(180, 0);

