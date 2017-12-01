namespace StudiVZ {
    interface StudentData {
        mat:number,
        name:string,
        vorname:string,
        alter:number,
        ges:string,
        
        com:string
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArray: string[] = _input.split(",");
        let gesch : string;
         if(Number(dataArray[4])==0){
                gesch = "mänlich";
            }
        else{
             gesch = "weiblich";
         }
        if(Number.(dataArray[0])== true &&dataArray[1]== String()&&dataArray[2]== String()&&dataArray[3]== Number() &&dataArray[4]== Boolean() &&dataArray[2]== String()){
  
        let student : StudentData ={
            mat : Number(dataArray[0]),
            name : dataArray[1],
            vorname : dataArray[2],
            alter : Number(dataArray[3]),
            ges : gesch,
            com:dataArray[5]
        }
       
        return "Top";
            }
    }
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }
}