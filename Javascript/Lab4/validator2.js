//Validerings kod

var Validator = {

    init: function () {

        //Hämtar de olika fälten i html koden och lägger dom i egna variabler
        var form = document.getElementById("formen");
        var fName = document.getElementById("firstname");
        var lName = document.getElementById("lastname");
        var phoneNumber = document.getElementById("phone");
        var zCode = document.getElementById("zipcode");
        var email = document.getElementById("mail");

        //här hämtar jag skicka knappen och ersätter den med en ny knapp, som egentligen bara Ãr en a-tagg.
        var originalButton = document.getElementById('button1');
        originalButton.className = 'hide';

        var newButton = document.createElement("a")
        newButton.href = "#";
        var newButtonText = document.createTextNode('Skicka!')
        newButton.appendChild(newButtonText);
        form.appendChild(newButton);

        //När man klickar på den nya knappen så kommer formulären att validereas enligt nedanstående
        newButton.onclick = function () {
            var fn = document.getElementById("fn");

            //Om användaren har fyllt i felaktig information ändras textfältets bakgrundsfärg.
            if (!fName.value.match(/^[a-z|A-Z|Ã¥|Ã…|Ã¤|Ã„|Ã¶|Ã–]+$/) || fName.value === "") {
                fName.className = "wrong";
                return false;
            }
            //Om allt stämmer så händer ingenting
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

            if (!zCode.value.match(/^[0-9]{5}$/) || zCode.value === "") {
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

            //Om allt är rätt ifyllt
            Validator.showPopUp(fName, lName, zCode, phoneNumber, email, Price)

        }
        //Gör så att allt valideras när man byter fält
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

        //Om användaren klickar på ett fält så kommer det visas ett tooltip så att dom kan se vad som ska fyllas i
        fName.onfocus = function () {
            Validator.toolTip("State Your First Name.", fName);
        }
        //När fältet inte är markerat så är försvinner tooltipet
        fName.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };


        lName.onfocus = function () {
            Validator.toolTip("State Your Last Name.", lName);
        }
        lName.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };

        phoneNumber.onfocus = function () {
            Validator.toolTip("State Your Phone number", phoneNumber);
        }
        phoneNumber.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };

        zCode.onfocus = function () {
            Validator.toolTip("State Your Zip-Code XXXXX.", zCode);
        }
        zCode.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };

        email.onfocus = function () {
            Validator.toolTip("State Your Email.", email);
        }
        email.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };
        
        var Price = document.getElementById("Price");

    },
    //en funktion som skapar ett fält med information till användaren
    toolTip: function (input, field) {
        var fieldset = document.getElementById("fieldset");
        var div = document.createElement("div");
        div.setAttribute('id', "tooltip");
        var tooltip = document.createTextNode(input);
        div.className = "tooltip";
        document.body.appendChild(div);
        div.appendChild(tooltip);

        //ser till att fältet hamnar rätt        
        var position = Validator.findPos(field);
        div.style.left = position[0] + "px";
        div.style.top = position[1] + "px";
    },

    //hittar rätt postion för fältet
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

    //Popup som visar vad användaren har fyllt i så att man kan kontrollera att man skrivit rätt
    showPopUp: function (firstName, lastName, zipCode, phoneNumber, eMail, Price) {
        var form = document.getElementById("formen");
        var dim = document.createElement("div");
        dim.id = "dim";

        document.getElementsByTagName("body")[0].appendChild(dim);
        //massor med P-taggar så att vi kan skicka informationen till nått ställe
        var popUp = document.createElement("div");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        var p6 = document.createElement("p");
        var p7 = document.createElement("p");

        //skapar en skicka knapp...
        var skicka = document.createElement("input");
        skicka.setAttribute("type", "submit");
        skicka.setAttribute("value", "Skicka");
        skicka.onclick = function () {
            form.submit();
        }

        //... och en ändra knapp om man ser att man har skrivit fel nånstans
        var andra = document.createElement("input");
        andra.setAttribute("type", "submit");
        andra.setAttribute("value", "Change Statements");
        andra.onclick = function () {
            document.getElementsByTagName("body")[0].removeChild(dim);
            document.body.removeChild(popUp);
        }

        //presenterar popup-fönstret
        popUp.id = "popUp";
        var h1 = document.createElement("h1");

        var control = document.createTextNode("Control your statements:")
        document.body.appendChild(popUp);
        popUp.appendChild(h1);
        h1.appendChild(control);
        //ger variablerna sina värden
        var fornamn = document.createTextNode("First Name: " + firstName.value);
        var efternamn = document.createTextNode("Last Name: " + lastName.value);
        var postnummer = document.createTextNode("Zip-Code: " + zipCode.value);
        var telefonnummer = document.createTextNode("Phone Number: " + phoneNumber.value);
        var epost = document.createTextNode("E-Mail: " + eMail.value);
        var pris = document.createTextNode("Price: " + Price.value);

        //lägger in värdena i p-taggar
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
        p6.appendChild(pris);
        popUp.appendChild(p7);
        p7.appendChild(skicka);
        p7.appendChild(andra);


    },


    //Validering av förnamnet
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
    //Validering av efternamnet
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
    //Validering av postkod
    validateZipCode: function (zipCode) {

        if (!zipCode.value.match(/^[0-9]{5}$/) || zipCode === "") {

            zipCode.className = "wrong";
            return false;
        }
        else {
            firstName.className = "";
            return true;
        }

    },
    //Validering av förnamnet
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
    //Validering av Mail
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