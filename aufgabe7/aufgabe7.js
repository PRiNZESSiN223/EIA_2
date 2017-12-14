var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var dataArray = _input.split(",");
        var gesch;
        if (parseInt(dataArray[4]) == 0) {
            gesch = true;
        }
        else {
            gesch = false;
        }
        var student = {
            mat: parseInt(dataArray[0]),
            name: dataArray[1],
            vorname: dataArray[2],
            alter: parseInt(dataArray[3]),
            ges: gesch,
            com: dataArray[5]
        };
        if (!isNaN(parseInt(dataArray[0])) && isNaN(parseInt(dataArray[1])) && isNaN(parseInt(dataArray[2])) && !isNaN(parseInt(dataArray[3])) && !isNaN(parseInt(dataArray[4])) && isNaN(parseInt(dataArray[5]))) {
            students.push(student);
            return "Top";
        }
        else {
            return "Computer sagt NEIN";
        }
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].mat == _matrikel) {
                return ("" + students[i].mat + "" + students[i].name + "" + students[i].vorname + "" + students[i].alter + "" + students[i].ges + "" + students[i].com + "");
            }
        }
        return ("bitte erst die Datenbank füllen ");
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe7.js.map