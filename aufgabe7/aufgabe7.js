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
        if (Number(dataArray[4]) == 0) {
            gesch = "mänlich";
        }
        else {
            gesch = "weiblich";
        }
        var student = {
            mat: Number(dataArray[0]),
            name: dataArray[1],
            vorname: dataArray[2],
            alter: Number(dataArray[3]),
            ges: gesch,
            com: dataArray[5]
        };
        return "Top";
    }
    function queryData(_matrikel) {
        return "Hier fehlt noch der richtige Code...";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe7.js.map