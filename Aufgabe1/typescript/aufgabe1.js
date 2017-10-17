//let html : HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
var canvas;
var crc2;
var baume = 4;
var wolke = 4;
var berge = 4;
var schneeflocke = 100;
window.addEventListener("load", draw);
function draw() {
    canvas = document.getElementById('cnvs');
    crc2 = canvas.getContext("2d");
    himmel();
    for (var i = 0; i < berge; i++) {
        berg(Math.round(Math.random() * 100 + i * 100 / (berge / 5)), Math.round(Math.random() * 100));
    }
    lieft(0, 0); //benutze ich für den Lieft 
    for (var i = 0; i < wolke; i++) {
        wolken(Math.round(Math.random() * 100 + i * 100 / (wolke / 7)), Math.round(Math.random() * 100));
    }
    pieste(0, 50);
    lieft(0, 0); //benutze ich für den Lieft 
    for (var i = 0; i < baume; i++) {
        baum(Math.round(Math.random() * 50 + i * 200 / (baume / 3)), Math.round(Math.random() * 100 + 400));
    }
    for (var i = 0; i < schneeflocke; i++) {
        schnee(Math.round(Math.random() * 1000), Math.round(Math.random() * 1000));
    }
}
function schnee(x, y) {
    crc2.beginPath();
    crc2.arc(x, y, 5, 0, 2 * Math.PI);
    crc2.fillStyle = 'white';
    crc2.fill();
}
function lieft(x, y) {
    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineTo(800, 550);
    crc2.lineWidth = 2;
    crc2.strokeStyle = 'black';
    crc2.stroke();
    crc2.fillStyle = "grey";
    crc2.fillRect(x + 250, y + 170, 10, 100);
    crc2.fillRect(x + 200, y + 200, 100, 100);
    crc2.fillStyle = "white";
    crc2.fillRect(x + 210, y + 210, 80, 80);
}
function pieste(x, y) {
    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineTo(800, 600);
    crc2.lineTo(0, 600);
    crc2.lineWidth = 2;
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.strokeStyle = 'black';
    crc2.stroke();
}
function himmel() {
    crc2.fillStyle = "#98f5ff";
    crc2.fillRect(0, 0, 800, 600);
}
function wolken(x, y) {
    crc2.beginPath();
    crc2.fillStyle = "blue";
    crc2.arc(x, y, 50, 0, 2 * Math.PI);
    crc2.arc(x + 50, y, 50, 0, 2 * Math.PI);
    crc2.fill();
}
function berg(x, y) {
    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineWidth = 1;
    crc2.lineTo(x + 400, 600);
    crc2.lineTo(x - 400, 600);
    crc2.fillStyle = "#666";
    crc2.fill();
    crc2.stroke();
}
function baum(x, y) {
    crc2.fillStyle = "brown";
    crc2.fillRect(x, y, 50, 100);
    crc2.beginPath();
    crc2.arc(x + 25, y - 20, 50, 0, 2 * Math.PI);
    crc2.fillStyle = "green";
    crc2.fill();
}
//# sourceMappingURL=aufgabe1.js.map