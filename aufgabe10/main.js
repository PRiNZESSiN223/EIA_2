var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var name;
    var strasse;
    var hNr;
    var ort;
    var plz;
    var mail;
    var zusatz;
    var label;
    var checkedId = [];
    var baumArt = [Aufgabe10.posten[0].name, "" + Aufgabe10.posten[1].preis];
    var halter = ["Halter", " noch auswählen 0"];
    var beleuchtung = [Aufgabe10.posten[8].name, "" + Aufgabe10.posten[8].preis];
    var schmuck = [];
    function createElements() {
        //Baumart:
        var baumart = document.getElementById("baumart");
        var selectBox = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Baumart") {
                var opt = document.createElement("option");
                opt.innerText = Aufgabe10.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        //Halterung:
        var halterung = document.getElementById("halterung");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Halter") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe10.posten[i].name;
                halterung.appendChild(label);
            }
        }
        //Beleuchtung:
        var beleuchtung = document.getElementById("beleuchtung");
        var selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe10.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel:
        var schmuckartikel = document.getElementById("schmuckartikel");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Schmuck") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe10.posten[i].name;
                schmuckartikel.appendChild(label2);
                var stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
            }
        }
        //Deine Daten:
        var daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        strasse.required = true;
        daten.appendChild(strasse);
        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer, bitte 3-stellig";
        hNr.pattern = "[0-9]{3}";
        hNr.required = true;
        daten.appendChild(hNr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.required = true;
        daten.appendChild(ort);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        zusatz = document.createElement("textarea");
        zusatz.name = "DatenZusatz";
        zusatz.placeholder = "Adresszusatz";
        zusatz.cols = 30;
        zusatz.rows = 3;
        zusatz.required = true;
        daten.appendChild(zusatz);
        //Lieferoptionen:
        var lieferopt = document.getElementById("lieferoptionen");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe10.posten[i].name;
                lieferopt.appendChild(label3);
            }
        }
        //Button:
        var button = document.getElementById("button");
        var submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        var target = _event.target;
        var werte = [];
        var check = [];
        var gesamtpreis = 0;
        for (var i = 10; i < 23; i++) {
            werte[i] = document.getElementById("stepper" + i);
            check[i - 10] = document.getElementById("check" + i);
        }
        var korb = document.getElementById("zusammenfassung");
        korb.style.width = "40%";
        korb.style.height = "auto";
        korb.style.border = "1px solid black";
        korb.innerHTML = "<span>Warenkorb</span> <p></p>";
        console.log(target.value);
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (target.value == Aufgabe10.posten[i].name && target.id == "selectBaumart") {
                baumArt[0] = Aufgabe10.posten[i].name;
                baumArt[1] = "" + Aufgabe10.posten[i].preis;
            }
            else if (target.id == "radio" + i) {
                halter[0] = Aufgabe10.posten[i].name;
                halter[1] = "" + Aufgabe10.posten[i].preis;
            }
            else if (target.value == Aufgabe10.posten[i].name && target.id == "selectBeleuchtung") {
                beleuchtung[0] = Aufgabe10.posten[i].name;
                beleuchtung[1] = "" + Aufgabe10.posten[i].preis;
            }
            else if (target.id == "check" + i || target.id == "stepper" + i) {
                schmuck[i - 10] = [Aufgabe10.posten[i].name, "" + (Aufgabe10.posten[i].preis * parseInt(werte[i].value))];
            }
        }
        //write
        gesamtpreis = parseFloat(baumArt[1]) + parseFloat(halter[1]);
        korb.innerHTML += "" + baumArt[0] + " " + baumArt[1] + "€ <p></p>";
        korb.innerHTML += "" + halter[0] + " " + halter[1] + "€ <p></p>";
        korb.innerHTML += "" + beleuchtung[0] + " " + beleuchtung[1] + "€ <p></p>";
        for (var i = 0; i < 13; i++) {
            if (check[i].checked == true) {
                gesamtpreis += parseFloat(schmuck[i][1]);
                korb.innerHTML += "" + schmuck[i][0] + " " + schmuck[i][1] + "€ <p></p>";
            }
        }
        korb.innerHTML += " Gesamtpreis : " + gesamtpreis + "€";
        /* console.log(_event.target);
         let zsmfassung: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
         var create: HTMLParagraphElement = document.createElement("p");
 
         zsmfassung.appendChild(create);
         let radiogroup: HTMLInputElement;
         radiogroup = <HTMLInputElement>(document.querySelector("input[name=radioGroupHalterung]:checked"));
         console.log(radiogroup.value);
 
 */
        /*  let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
          // console.log("Changed " + target.name + " to " + target.value);
          let zsmfassung: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
          if (target.id == "selectBaumart") {
              let selectElement: HTMLSelectElement = <HTMLSelectElement>_event.target;
              let index: number = selectElement.selectedIndex;
              //console.log("Index: " + index);
              //console.log("Options: " + selectElement.options);
              //console.log("Selected: " + selectElement.options[index]);
              //console.log(selectElement.options[index].textContent);
              var create: HTMLParagraphElement = document.createElement("p");
              create.className = "warenkorbContent";
              create.innerText = selectElement.options[index].textContent + baumarten[index].preis;
              zsmfassung.appendChild(create);
          }
          if (target.name == "radioGroupHalterung") {
              let inputElement: HTMLInputElement = <HTMLInputElement>_event.target;
              if (inputElement.checked && inputElement.id == "radio0") {
                  let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label0");
                  var create: HTMLParagraphElement = document.createElement("p");
                  create.className = "warenkorbContent";
                  create.innerText = labelId.innerText + halterungen[0].preis;
                  zsmfassung.appendChild(create);
              }
              if (inputElement.checked && inputElement.id == "radio1") {
                  let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label1");
                  var create: HTMLParagraphElement = document.createElement("p");
                  create.className = "warenkorbContent";
                  create.innerText = labelId.innerText + halterungen[1].preis;
                  zsmfassung.appendChild(create);
              }
              if (inputElement.checked && inputElement.id == "radio2") {
                  let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label2");
                  var create: HTMLParagraphElement = document.createElement("p");
                  create.className = "warenkorbContent";
                  create.innerText = labelId.innerText + halterungen[2].preis;
                  zsmfassung.appendChild(create);
              }
              if (inputElement.checked && inputElement.id == "radio3") {
                  let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label3");
                  var create: HTMLParagraphElement = document.createElement("p");
                  create.className = "warenkorbContent";
                  create.innerText = labelId.innerText + halterungen[3].preis;
                  zsmfassung.appendChild(create);
              }
          }
  
          if (target.id == "selectBeleuchtung") {
              let selectElement: HTMLSelectElement = <HTMLSelectElement>_event.target;
              let index: number = selectElement.selectedIndex;
              var create: HTMLParagraphElement = document.createElement("p");
              create.className = "warenkorbContent";
              create.innerText = selectElement.options[index].textContent + beleuchtungen[index].preis;
              zsmfassung.appendChild(create);
          }
          if (target.name == "radioGroupLieferoptionen") {
              let inputElement: HTMLInputElement = <HTMLInputElement>_event.target;
              console.log(inputElement.id);
              if (inputElement.checked && inputElement.id == "radio2.0") {
                  let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label3.0");
                  var create: HTMLParagraphElement = document.createElement("p");
                  create.className = "warenkorbContent";
                  create.innerText = labelId.innerText + lieferOptionen[0].preis;
                  zsmfassung.appendChild(create);
              }
              if (inputElement.checked && inputElement.id == "radio2.1") {
                  let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label3.1");
                  var create: HTMLParagraphElement = document.createElement("p");
                  create.className = "warenkorbContent";
                  create.innerText = labelId.innerText + lieferOptionen[1].preis;
                  zsmfassung.appendChild(create);
              }
          }
          if (target.id == "check") {
              let inputElement: HTMLInputElement = <HTMLInputElement>_event.target;
              for (let i: number = 0; i < schmuck.length; i++) {
                  if (inputElement.checked == true) {
                      let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label2." + i);
                      let text: string = labelId.innerText;
                      console.log(labelId.innerText);
                      checkedId.push(text);
                      console.log("array:" + checkedId);
                      console.log(checkedId.length);
  
                  }
              }
              for (let i: number = 0; i < checkedId.length; i++) {
                  var create: HTMLParagraphElement = document.createElement("p");
                  create.className = "warenkorbContent";
                  create.innerText = checkedId[i];
                  zsmfassung.appendChild(create);
              }
  
          }
  
  */
    }
    function handleMouseDown(_event) {
        var feedback = document.createElement("div");
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Info zu deiner Bestellung: Du scheinst Deine Daten nicht korrekt angegeben zu haben. Bitte überprüfe sie nocheinmal.";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.";
            document.body.appendChild(feedback);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map