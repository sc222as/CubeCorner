

var MessageBoard = {

    messages: [],

    init: function () {


        var text = document.getElementById("textfalt");
        var msg = document.getElementById("messages");                                          // hämtar ut referenser till olika noder och skickar dom till olika variabler
        var skicka = document.getElementById("skickaknapp");
        skicka.onclick = function () {
            var meddelande = document.getElementById("textfalt").value;                         //om jag trycker på skicka knappen så skickar den in textfältet i var meddelande

            if (meddelande != "") {                                                             //Denna satsen körs bara om man skrivit in något i textfältet
                var pushtext = MessageBoard.messages.push(new Message(meddelande, new Date())); //.push pushar in det som skrivs sist i arrayen
                renderMessages();                                                                //Följer labbförslaget och skickar in datan i funktionen renderMessage
                document.getElementById("textfalt").value = "";                                 
            };
        }

        text.onkeypress = function (e) {
            if (!e) var e = window.event;                                                       //Här är koden som gör att man skickar på enter och om man håller inne shift-tangenten
            if (!e.shiftKey && e.keyCode === 13) {                                              //så skickas inte meddelandet
                document.getElementById("skickaknapp").click();
                return false;

            }
        }

        var renderMessages = function () {
            //Remove all messages
            document.getElementById("messages").innerHTML = "";

            //Renders all messages
            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                renderMessage(i);
            }
            var obj = document.getElementById("messages");
            bj.scrollTop = obj.scrollHeight
        }

        var removeMessage = function (messageID) {

            var sakerkoll = confirm("Vill du ta bort ditt meddelande?");                        //Får fram en ruta som frågar om du vill ta bort meddelandet och tar bort ett från meddelandecountern
            if (sakerkoll) {                                                                    // om meddelandecountern är högre än noll
                MessageBoard.messages.splice(messageID, 1);
                var msgID = messageID - 1;
                if (msgID < 0) {
                    nummer(messageID - 1);
                }
            }




        }

        var renderMessage = function (messageID) {
            var msgDiv = document.getElementById("messages");
            var mainNode = document.createElement("div");                   //lägger till en ny meddelanderuta
            msgDiv.appendChild(mainNode);


            var msgNode = document.createElement("p");
            msgNode.innerHTML = MessageBoard.messages[messageID].getText();
            mainNode.appendChild(msgNode);                                                          //appendchild lägger till msgNode sist i vår mainNode

            var buttonNode = document.createElement("div");
            buttonNode.className = "buttons";
            mainNode.appendChild(buttonNode);                                                       //appendchild lägger till buttonNode sist i vår mainNode

            var dateNode = document.createElement("a");
            dateNode.href = '#';                                                                    //Gör så markören ändras när jag håller över knappen
            dateNode.innerHTML = "<img src ='pics/pics/information.png' alt='' /> "
            buttonNode.appendChild(dateNode);                                                       //appendchild lägger till dateNode sist i vår buttonNode
            dateNode.onclick = function () {
                alert(MessageBoard.messages[messageID].getDate());
                return false;
            }

            var removeNode = document.createElement("a");
            removeNode.href = '#';                                                                  //Gör så markören ändras när jag håller över knappen
            removeNode.innerHTML = "<img src ='pics/pics/close.png' alt=''/>";
            removeNode.onclick = function () {
                removeMessage(messageID);
                renderMessages();
                return false;
            }

            buttonNode.appendChild(removeNode);

            var timeNode = document.createElement("p");
            timeNode.className = "tid";
            timeNode.innerHTML = MessageBoard.messages[messageID].getTime();
            mainNode.appendChild(timeNode);                                                     //appendchild lägger till timenode sist efter mainNode

            nummer(messageID);

        }
        var nummer = function (messageID) {
            var nummerDiv = document.getElementById("nummer");
            nummerDiv.innerHTML = "";
            nummerDiv.innerHTML = ("Antal meddelande ") + (messageID + 1);
        }




    }
};


   
   
   
   
   
   
   
   
    window.onload = MessageBoard.init;