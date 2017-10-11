
//let html : HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
 var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D; 
var baume : number = 4;
var wolke : number = 2;
var berge : number = 4;

window.onload = () => {
   canvas = <HTMLCanvasElement>document.getElementById('cnvs');
   ctx = canvas.getContext("2d");
    himmel();
    for(let i:number = 0; i < berge; i++){
         berg(Math.round(Math.random()*100+i*100),Math.round(Math.random()*100));
        }
    
    lieft(0,0); //benutze ich für den Lieft 
        for(let i:number = 0; i < wolke; i++){
         wolken(200+i*300,50+i*20);
        }
    pieste(0,50);
    lieft(0,0); //benutze ich für den Lieft 
        for(let i:number = 0; i < baume; i++){
         baum(Math.round(Math.random()*50+i*200),Math.round(Math.random()*100+400));
        }
    
  
}
function lieft(x :number,y:number) : void{
    
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(800, 550);
      ctx.lineWidth = 2;

      ctx.strokeStyle = 'black';
      ctx.stroke();
      ctx.fillStyle = "grey";
    ctx.fillRect(x+250, y+170, 10, 100);
      ctx.fillRect(x+200, y+200, 100, 100);
    ctx.fillStyle = "white";
    ctx.fillRect(x+210, y+210, 80, 80);

    
    
}
function pieste(x :number,y:number) : void{
    
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(800, 600);
      ctx.lineTo(0, 600)
      ctx.lineWidth = 2;

    ctx.fillStyle = "white";
    ctx.fill();
      ctx.strokeStyle = 'black';
      ctx.stroke();
}
function himmel() : void{
          ctx.fillStyle = "#98f5ff";
   ctx.fillRect(0, 0, 800, 600);

}
function wolken(x :number,y:number) : void{

       ctx.beginPath();
   ctx.fillStyle = "blue";
   ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.arc(x+50, y, 50, 0, 2 * Math.PI);
   ctx.fill();
    
   
}
function berg(x :number,y:number) : void{
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 1;
    ctx.lineTo(x+400, 600);
    ctx.lineTo(x-400, 600);
    ctx.fillStyle = "#666";
    ctx.fill();
        ctx.stroke();
    
   
}
function baum(x :number,y:number) : void{
    
      ctx.fillStyle = "brown";
   ctx.fillRect(x, y, 50, 100);

      ctx.beginPath();
   ctx.fillStyle = "green";
   ctx.arc(x+25, y-20, 50, 0, 2 * Math.PI);
   ctx.fill();
}