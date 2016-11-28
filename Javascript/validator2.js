//Validerings kod

var Validator = {

    init: function () {

        //hÃ¤r hÃ¤mtar jag de olika "spaltarna" i html koden
        var form = document.getElementById("formen");
        var fName = document.getElementById("firstname");
        var lName = document.getElementById("lastname");
        var phoneNumber = document.getElementById("phone");
        var zCode = document.getElementById("zipcode");
        var email = document.getElementById("mail");

        //hÃ¤r hÃ¤mtar jag skicka knappen och ersÃ¤tter den med en ny knapp, som egentligen bara Ã¤r en a-tagg.
        var originalButton = document.getElementById('button1');
        originalButton.className = 'hide';

        var newButton = document.createElement("a")
        newButton.href = "#";
        var newButtonText = document.createTextNode('Skicka!')
        newButton.appendChild(newButtonText);
        form.appendChild(newButton);

        //nÃ¤r klickar pÃ¥ den nya knappen sÃ¥  kommer de inskrivna att dubbelkollas, sÃ¥ att det inte stÃ¥r nÃ¥ struligt.
        newButton.onclick = function () {
            var fn = document.getElementById("fn");

            //Om anvÃ¤ndaren har fyllt i felaktig information Ã¤ndras textfÃ¤ltets bakgrundsfÃ¤rg.
            if (!fName.value.match(/^[a-z|A-Z|Ã¥|Ã…|Ã¤|Ã„|Ã¶|Ã–]+$/) || fName.value === "") {
                fName.className = "wrong";
                return false;
            }
            //Annars Ã¤r allt som "vanligt".
            else {
                fName.className = "input";
            }

            var ln = document.getElementById("ln");

            if (!lName.value.match(/^[a-z|A-Z|Ã¥|Ã…|Ã¤|Ã„|Ã¶|Ã–]+$/) || lName.value === "") {
                lName.className = "wrong";
                return false;
            }

            else {
                lName.className = "input";
            }

            var zc = document.getElementById("zc");

            if (!zCode.value.match(/^[0-9]{3}-[0-9]{2}$/) || zCode.value === "") {
                zCode.className = "wrong";
                return false;
            }

            else {
                zCode.className = "input";
            }


            var pn = document.getElementById("pn");
            if (!phoneNumber.value.match(/^[0-9]+$/) || phoneNumber.value === "") {
                phoneNumber.className = "wrong";
                return false;
            }

            else {
                phoneNumber.className = "input";
            }

            var em = document.getElementById("em");
            if (!email.value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/) || email.value === "") {
                email.className = "wrong";
                return false;
            }

            else {
                email.className = "input";
            }

            //Om all e korrekta
            Validator.showPopUp(fName, lName, zCode, phoneNumber, email, gender)

        }
        //skickar de inskriva till validering, nÃ¤r anvÃ¤ndaren byter fÃ¤lt
        fName.onchange = function () {
            Validator.validateFirstName(fName);

        }

        lName.onchange = function () {
            Validator.validateLastName(lName);

        }

        zCode.onchange = function () {
            Validator.validateZipCode(zCode);

        }

        phoneNumber.onchange = function () {
            Validator.validatePhoneNumber(phoneNumber);

        }

        email.onchange = function () {
            Validator.validateEmail(email);

        }

        //NÃ¤r anvÃ¤ndaren markerar fÃ¤lltet, kommer de skickas till toolTip sÃ¥ att anvÃ¤ndaren fÃ¥r bÃ¤ttre koll pÃ¥ vad han hon den det ska skriva.
        fName.onfocus = function () {
            Validator.toolTip("Ange fÃ¶rnamn.", fName);
        }
        //NÃ¤r anvÃ¤ndaren tar bort markeringen, sÃ¥ fÃ¶rsvinner toolTipet
        fName.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };


        lName.onfocus = function () {
            Validator.toolTip("Ange Efternamn.", lName);
        }
        lName.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };

        phoneNumber.onfocus = function () {
            Validator.toolTip("Ange Tele.nr.", phoneNumber);
        }
        phoneNumber.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };

        zCode.onfocus = function () {
            Validator.toolTip("Ange Post nr ex XXX-XX.", zCode);
        }
        zCode.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };

        email.onfocus = function () {
            Validator.toolTip("Ange Email.", email);
        }
        email.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };
        //och sÃ¥ att datorn tar med kÃ¶net ocksÃ¥
        var gender = document.getElementById("gender");

    },
    //en funktion som skapar ett fÃ¤lt med information till anvÃ¤ndaren
    toolTip: function (input, field) {
        var fieldset = document.getElementById("fieldset");
        var div = document.createElement("div");
        div.setAttribute('id', "tooltip");
        var tooltip = document.createTextNode(input);
        div.className = "tooltip";
        document.body.appendChild(div);
        div.appendChild(tooltip);

        //ser till att fÃ¤ltet hamnar rÃ¤tt        
        var position = Validator.findPos(field);
        div.style.left = position[0] + "px";
        div.style.top = position[1] + "px";
    },

    //hittar rÃ¤tt postion fÃ¶r fÃ¤ltet
    findPos: function (field) {
        var curleft = 0;
        var curtop = 22;

        if (field.offsetParent) {
            do {
                curleft += field.offsetLeft;
                curtop += field.offsetTop;
            }

            while (field = field.offsetParent);
            return [curleft, curtop];
        }
    },

    //fÃ¶rhandsvisar anvÃ¤ndaren vad han hon den det har skrivit.
    showPopUp: function (firstName, lastName, zipCode, phoneNumber, eMail, gender) {
        var form = document.getElementById("formen");
        var dim = document.createElement("div");
        dim.id = "dim";

        document.getElementsByTagName("body")[0].appendChild(dim);
        //skapar en herrans massa p taggar sÃ¥ att informationen kan ta vÃ¤gen nÃ¥gonstans!
        var popUp = document.createElement("div");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        var p6 = document.createElement("p");
        var p7 = document.createElement("p");

        //skapar en skicka knapp
        var skicka = document.createElement("input");
        skicka.setAttribute("type", "submit");
        skicka.setAttribute("value", "Skicka");
        skicka.onclick = function () {
            form.submit();
        }

        //skaoar Ã¤n Ã¤ndra knapp som gÃ¶r att anvÃ¤ndaren kan Ã¥ngra sig
        var andra = document.createElement("input");
        andra.setAttribute("type", "submit");
        andra.setAttribute("value", "Ã„ndra uppgifter");
        andra.onclick = function () {
            document.getElementsByTagName("body")[0].removeChild(dim);
            document.body.removeChild(popUp);
        }

        //visar sjÃ¤lva popUpfÃ¶nstret
        popUp.id = "popUp";
        var h1 = document.createElement("h1");

        var control = document.createTextNode("Kontrollera dina uppgifter:")
        document.body.appendChild(popUp);
        popUp.appendChild(h1);
        h1.appendChild(control);
        //ger variablerna sina vÃ¤rden
        var fornamn = document.createTextNode("FÃ¶rnamn: " + firstName.value);
        var efternamn = document.createTextNode("Efternamn: " + lastName.value);
        var postnummer = document.createTextNode("Postnummer: " + zipCode.value);
        var telefonnummer = document.createTextNode("Telefonnummer: " + phoneNumber.value);
        var epost = document.createTextNode("E-post: " + eMail.value);
        var kon = document.createTextNode("KÃ¶n: " + gender.value);

        //lÃ¤gger in vÃ¤rderna in i p-taggar
        popUp.appendChild(p1);
        p1.appendChild(fornamn);
        popUp.appendChild(p2);
        p2.appendChild(efternamn);
        popUp.appendChild(p3);
        p3.appendChild(postnummer);
        popUp.appendChild(p4);
        p4.appendChild(telefonnummer);
        popUp.appendChild(p5);
        p5.appendChild(epost);
        popUp.appendChild(p6);
        p6.appendChild(kon);
        popUp.appendChild(p7);
        p7.appendChild(skicka);
        p7.appendChild(andra);


    },


    //Validering av fÃ¶rnamnet
    validateFirstName: function (firstName) {

        if (!firstName.value.match(/^[a-z|A-Z|Ã¥|Ã…|Ã¤|Ã„|Ã¶|Ã–]+$/) || firstName === "") {

            firstName.className = "wrong";
            return false;
        }
        else {
            firstName.className = "";
            return true;
        }

    },

    validateLastName: function (lastName) {

        if (!lastName.value.match(/^[a-z|A-Z|Ã¥|Ã…|Ã¤|Ã„|Ã¶|Ã–]+$/) || lastName === "") {

            lastName.className = "wrong";
            return false;
        }
        else {
            firstName.className = "";
            return true;
        }

    },

    validateZipCode: function (zipCode) {

        if (!zipCode.value.match(/^[0-9]{3}-[0-9]{2}$/) || zipCode === "") {

            zipCode.className = "wrong";
            return false;
        }
        else {
            firstName.className = "";
            return true;
        }

    },

    validatePhoneNumber: function (phoneNumber) {

        if (!phoneNumber.value.match(/^[0-9]+$/) || phoneNumber === "") {

            phoneNumber.className = "wrong";
            return false;
        }
        else {
            firstName.className = "";
            return true;
        }

    },

    validateEmail: function (eMail) {

        if (!eMail.value.match(/^^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/) || eMail === "") {
            eMail.className = "wrong";
            return false;
        }
        else {
            firstName.className = "";
            return true;
        }
    }

};
window.onload = Validator.init;