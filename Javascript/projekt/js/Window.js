var count = 0;

function Window(header, smallIcon) {
    count++;
    //Containern f�r MyWindow...
    var myWindow = document.createElement("div");
    myWindow.className = "myWindow";

    var container = document.getElementById("container");
    container.appendChild(myWindow);

    //... och menyn f�r MyWindow.
    var myWindow_top = document.createElement("div");

    var myWindow_top_p = document.createElement("p");
    myWindow_top_p.className = "topHeader";
    myWindow_top.className = "myWindow_top";
    myWindow_top.id = "myWindow_top_" + count;


    //laddar bilden till f�nstret.
    var myWindow_bottom = document.createElement("div");
    var myWindow_bottom_p = document.createElement("p");
    var ajaxLoader = document.createElement("img");
    var ajaxLoader_span = document.createElement("span");
    ajaxLoader_span.className = "ajaxLoader_span";
    var ajaxLoader_text = document.createTextNode("Loading...");
    ajaxLoader.src = "appPics/ajax-loader.gif";
    ajaxLoader.className = "ajaxLoader";
    myWindow_bottom.className = "myWindow_bottom";
    myWindow_bottom.id = "myWindow_bottom_" + count;
    myWindow_bottom.appendChild(ajaxLoader);
    myWindow_bottom.appendChild(ajaxLoader_span);
    ajaxLoader_span.appendChild(ajaxLoader_text);

    //Miniatyrbilden i f�nstret.
    var myWindow_top_img = document.createElement("img");
    myWindow_top_img.src = smallIcon;
    myWindow_top_img.className = "smallIcon";

    //skapar en st�ng-knappen.
    var myWindow_close = document.createElement("img");
    myWindow_close.src = "appPics/close.png";
    myWindow_close.alt = "Close window";
    myWindow_close.className = "closeIcon";

    //G�r s� att man kan klicka p� den
    var a_close = document.createElement("a");
    a_close.href = "#";
    //Ser till s� att den ligger p� r�tt st�lle
    a_close.appendChild(myWindow_close);


    myWindow.appendChild(myWindow_top);

    myWindow_top.appendChild(myWindow_top_img);
    myWindow_top.appendChild(a_close);

    //skriver ut texten i topen
    myWindow_top.appendChild(myWindow_top_p);
    myWindow_top_heading = document.createTextNode(header);

    myWindow_top_p.appendChild(myWindow_top_heading);

    //skapar contenten i f�nstret som ska skickas till desktop.
    var myWindow_content = document.createElement("div");
    this.getContent = function () {
        return myWindow_content;
    }

    myWindow_content.className = "myWindow_content";
    myWindow_content.id = "myWindow_content_" + count;
    myWindow.appendChild(myWindow_content);

    myWindow.appendChild(myWindow_bottom);

    //tar bort f�nstret
    a_close.onclick = function () {
        container.removeChild(myWindow);
    }


    //n�r laddningen �r klar, s� slutat laddningen att visas
    removeLoading = function () {
        myWindow_bottom.removeChild(ajaxLoader);
        myWindow_bottom.removeChild(ajaxLoader_span);
    }
    //skickar samma information om topen och botten till bigImage
    bigImage = function (myWindow_bottom, myWindow_top) {

    }



}