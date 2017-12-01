namespace L07_Class {

    export class MoveObj { // "export class": Bedeutet das andere Klassen auf diese zugreifen.
        x: number;
        y: number;


        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;


        }

        update(): void {
            this.move();
            this.draw();
        }
        
        move(): void {
            // Sonst ist der Block leer.
            }
        
        draw(): void {
            // Sonst ist der Block leer.
            }    
        
    }



}