namespace Aufgabe4 {
    //let html : HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    var canvas: HTMLCanvasElement;
    var crc2: CanvasRenderingContext2D;
    var baume: number = 4;
    var wolke: number = 4;
    var berge: number = 4;
    var schneeflocke: number = 100;
    var hintergrund: any;
    var zeit: number = 100;
    var speedSki: number = 6;

    var wolkenPos: number[][];
    var baumPos: number[][] = [];
    var schneePos: number[][] = [];
    var skifahrer: number[][] = [];
    window.addEventListener("load", draw);
    function draw(): void {

        var x: any = document.getElementById("leise");
        x.play();

        canvas = <HTMLCanvasElement>document.getElementById('cnvs');
        crc2 = canvas.getContext("2d");
        himmel();
        for (let i: number = 0; i < berge; i++) {
            berg(Math.round(Math.random() * 100 + i * 100 / (berge / 5)), Math.round(Math.random() * 100));
        }


        pieste(0, 50);
        lieft(0, 0); //benutze ich für den Lieft 
        hintergrund = crc2.getImageData(0, 0, 800, 600);

        for (let i: number = 0; i < baume; i++) {
            baumPos[i][0] = (Math.round(Math.random() * 50 + i * 200 / (baume / 3)));
            baumPos[i][1] = (Math.round(Math.random() * 50 + i * 200 / (baume / 3)));
        }

        for (let i: number = 0; i < wolke; i++) {
            wolkenPos[i][0] = (Math.round(Math.random() * 100 + 0 * 100 / (wolke / 7)));
            wolkenPos[i][1] = (Math.round(Math.random() * 100 + 0 * 100 / (wolke / 7)));
        }

        for (let i: number = 0; i < schneeflocke; i++) {
            schneePos[i][0] = (Math.round(Math.random() + i * 10), Math.round(Math.random() * 600));
            schneePos[i][1] = (Math.round(Math.random() + i * 10), Math.round(Math.random() * 600));

        }
        skifahrer[0][0] = 0;
        skifahrer[0][1] = 100;
        skifahrer[1][0] = -50;
        skifahrer[1][1] = 150;
        console.log(schneePos);

        animate();

    }

    function schnee(x: number, y: number): void {
        crc2.beginPath();
        crc2.arc(x, y, 5, 0, 2 * Math.PI);
        crc2.fillStyle = 'white';
        crc2.fill();
    }
    function ski(x: number, y: number): void {

        crc2.beginPath();
        crc2.moveTo(x, y);

        crc2.fillStyle = "red";
        crc2.fillRect(x, y - 50, 10, 50);
        crc2.fillRect(x + 10, y - 40, 10, 5);
        crc2.fillStyle = "black";
        crc2.fillRect(x - 10, y, 50, 5);
        crc2.fillRect(x + 20, y - 40, 3, 40);

        crc2.beginPath();
        crc2.arc(x + 10, y - 50, 10, 0, 2 * Math.PI);
        crc2.fillStyle = 'black';
        crc2.fill();

    }
    function lieft(x: number, y: number): void {

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
    function pieste(x: number, y: number): void {

        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600)
        crc2.lineWidth = 2;

        crc2.fillStyle = "white";
        crc2.fill();
        crc2.strokeStyle = 'black';
        crc2.stroke();
    }
    function himmel(): void {
        crc2.fillStyle = "#98f5ff";
        crc2.fillRect(0, 0, 800, 600);

    }
    function wolken(x: number, y: number): void {

        crc2.beginPath();
        crc2.fillStyle = "blue";
        crc2.arc(x, y, 50, 0, 2 * Math.PI);
        crc2.arc(x + 50, y, 50, 0, 2 * Math.PI);
        crc2.fill();


    }
    function berg(x: number, y: number): void {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineWidth = 1;
        crc2.lineTo(x + 400, 600);
        crc2.lineTo(x - 400, 600);
        crc2.fillStyle = "#666";
        crc2.fill();
        crc2.stroke();


    }
    function baum(x: number, y: number): void {

        crc2.fillStyle = "brown";
        crc2.fillRect(x, y, 50, 100);

        crc2.beginPath();
        crc2.arc(x + 25, y - 20, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "green";
        crc2.fill();
    }







    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(hintergrund, 0, 0);

        for (let i: number = 0; i < wolke; i++) {
            wolkenPos[i][0] += 1;
            wolken(wolkenPos[i][0], wolkenPos[i][0]);
            

            if (wolkenPos[i][0] > 800) {
                wolkenPos[i][0] = -100;
            }
         
        
        for (let i: number = 0; i < schneePos.length; i++) {
            i++
            schneePos[i][1] += 5;

            if (schneePos[i][1] > 600) {
                schneePos[i][1] = 0;
            }
            schnee(schneePos[i - 1], schneePos[i]);

        }
        skifahrer[0][0] += 2 * speedSki;
        skifahrer[0][1] += 1.4 * speedSki;
        skifahrer[1][0] += 4 * speedSki;
        skifahrer[1][1] += 5 * speedSki;
        ski(skifahrer[0][0], skifahrer[0][1]);
        ski(skifahrer[1][0], skifahrer[1][1]);
        if (skifahrer[0][0] > 810 && skifahrer[0][1] > 610) {
            skifahrer[0][0] = (-30);
            skifahrer[0][1] = (100);
        }
         if (skifahrer[1][0] > 810 && skifahrer[1][1] > 610) {
            skifahrer[1][0] = (-30);
            skifahrer[1][1] = (100);
        }
        lieft(0, 0);
        for (let i: number = 0; i < baumPos.length; i++) {
            console.log(baumPos);
            baum(baumPos[i][0], baumPos[i][1]);
        }
        window.setTimeout(animate, zeit);
    }





}
