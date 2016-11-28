var Desktop = {
    count: 0,
    init: function () {
        Desktop.photoYao();
    },
    // Detta stycket i koden skapar sj�lva Iconen som man ska klicka p�
    photoYao: function () {
        var a_myPictures = document.createElement("a");
        a_myPictures.setAttribute("href", "#");
        a_myPictures.className = "a_myPictures"
        var img = document.createElement("img");
        img.className = "menuIcons";
        img.setAttribute("src", "appPics/photo_scenery.png");
        a_myPictures.appendChild(img);
        var menu = document.getElementById("menubar");
        menu.appendChild(a_myPictures);
    
    //N�r man klickar p� iconen s� startar f�ljande function
    a_myPictures.onclick = function(){
        Desktop.count++;
        var theWindow = new Window("Pictures", "appPics/photo_scenery.png");    //G�r s� att det skapas ett litet f�nster d�r bilderna ska presenteras
        var url = "Backend/getJSONThumbs.php";                                  //Kallar p� Json
        url.className="url";                                                    //H�r s� skickar vi informationen till Ajaxen
        new Ajax(url, function(data){
            var maxHeight = 0;
	      	var maxWidth = 0;
	        var images = JSON.parse(data);
            
            for (var i = 0; i < images.length; i++) {
	        var div_images = document.createElement("div");
	        div_images.className = "div_images";
                                                                                //H�r s� r�knar vi s� att vi f�r ut vilken som �r det l�ngsta och bredaste bilden. Detta f�r att vi senare
            if (images[i].thumbWidth > maxWidth) {                              //ska kunna g�ra s� att alla blir s� stora. K�nns som den enklaste l�sningen
	                maxWidth = images[i].thumbWidth;
	            	}
	            
	        if (images[i].thumbHeight > maxHeight) {
	                maxHeight = images[i].thumbHeight;
	            	}

            var img = document.createElement("img");                            //Inget avancerat. Skapar en img-tagg och sl�nger in den i en klass
            img.className = "span_images";
            img.src = "pics/thumbs/" + images[i].fileName;                      //H�mtar de sm� blidernas url 
            img.width = images[i].thumbWidth;
            img.height = images[i].thumbHeight;

            var a_images = document.createElement("a");                         //H�r s� g�r vi det m�jligt att klicka p� bilderna
	            	a_images.href = "#";
	            	a_images.id = i;

                    var myWindow_content = theWindow.getContent();              //N�r man trycker p� en bild s� kommer dom att komma upp i ett nytt f�nster           
					myWindow_content.appendChild(a_images);

                    a_images.appendChild(div_images);                                               
                div_images.style.width = maxWidth + "px";
                div_images.style.height = maxHeight + "px";
                div_images.appendChild(img);

                a_images.onclick = function(id){                                    //Om man klickar p� en bild s� h�nder f�ljande saker
                    var id = this.id;
                    Desktop.count++;

                    new Window(images[id].fileName, "appPics/photo_scenery.png");   
                       
                        window.removeLoading();                                     //Tar bort Laddnings-iconen
                        
                        var bigImage = document.getElementById("myWindow_content_"+Desktop.count);          //H�r specificerar vi hur det nya f�nstret �r uppbyggt
						var bigImage_top = document.getElementById("myWindow_top_"+Desktop.count);
						var bigImage_bottom = document.getElementById("myWindow_bottom_"+Desktop.count);

                        bigImage.className="bigImage";
                        bigImage_top.className="bigImage_top";
                        bigImage_bottom.className="bigImage_bottom";
                        bigImage.style.backgroundImage = "url(pics/" + images[id].fileName + ")";           //Visar bilden som �r klickad p�
						bigImage.style.width = images[id].width + "px";
						bigImage.style.height = images[id].height + "px";
						bigImage_top.style.width = images[id].width + "px";
						bigImage_bottom.style.width = images[id].width + "px";

                        var setAsDesktopLink = document.createElement("a");                                 //G�r s� att man kan klicka p� knappen "Use as wallpaper"
						setAsDesktopLink.className="setAsDesktop";
						setAsDesktopLink.href="#";
						var setAsDesktopText = document.createTextNode("Use as wallpaper")
						bigImage_bottom.appendChild(setAsDesktopLink);
						setAsDesktopLink.appendChild(setAsDesktopText);

                        setAsDesktopLink.onclick = function(){                                              //Sj�lva funktionen f�r att g�ra den som bakgrundsbild
						
						document.getElementById("container").style.backgroundImage = "url(pics/" + images[id].fileName + ")";
						}
                    }

                    
            }
            window.removeLoading();                                                                         //Tar bord laddningsiconen n�r Ajax-anropet avslutas
            });
            }
            },
            };
            
            window.onload = Desktop.init;