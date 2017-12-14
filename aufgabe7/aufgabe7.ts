namespace StudiVZ {
    interface StudentData {
        mat:number,
        name:string,
        vorname:string,
        alter:number,
        ges:boolean,
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
        let gesch : boolean;
         if(parseInt(dataArray[4])==0){
                gesch = true;
            }
        else{
             gesch = false;
         }
       
        let student : StudentData ={
            mat : parseInt(dataArray[0]),
            name : dataArray[1],
            vorname : dataArray[2],
            alter : parseInt(dataArray[3]),
            ges : gesch,
            com:dataArray[5]
        }
       

        if(!isNaN(parseInt(dataArray[0]))&&isNaN(parseInt(dataArray[1]))&&isNaN(parseInt(dataArray[2]))&&!isNaN(parseInt(dataArray[3]))&&!isNaN(parseInt(dataArray[4]))&&isNaN(parseInt(dataArray[5]))){
            students.push(student);
            return "Top";   
        }
        else{
            return "Computer sagt NEIN"  
              
        }
        
        
        }
        
    
    function queryData(_matrikel: number): string {
        for(let i : number = 0; i< students.length;i++){
            if(students[i].mat == _matrikel){
                    return(""+students[i].mat+""+students[i].name+""+students[i].vorname+""+students[i].alter+""+students[i].ges+""+students[i].com+"");
            }
           
            }
        return("bitte erst die Datenbank füllen ");
    }

}