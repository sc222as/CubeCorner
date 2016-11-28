function BowlingGame(players){
	// Getters
	this.getPlayers = function(){return players;};
	this.getPlayer = function(n){return players[n];};
	
	/* setPlayers anv�nds f�r att vi ska kunna g�ra kontroller p� den data som
	 * som skickas in.
	 */ 
	this.setPlayers = function(_players){
	
		// Vi kontrollerar om den inskickade variablen �r en array.
		if(!(_players instanceof Array)){
			throw new Error("BowlingGame takes an array as argument"); //Kasta ett undantag om ej array
		}
		
		/* Samma sak som ovan fast f�r alla v�ra positioner i arrayen. Position
		 * har ingen betydelse s� vi kan anv�nda oss av for-in.
		 */
		for(player in _players){
			if(!(_players[player] instanceof Player)){
				throw Error("The players array must contain instances of Player");
			}			
		}
		// Inskickad array �r OK s� tilldela denna till v�r privata variabel.
		players = _players;
	};

	this.setPlayers(players); // Vi anropar settern f�r att f� v�r inparameter validerad.




/* Nedanst�ende kod anv�nds f�r att visa p� hur closures beter sig. 
 * 
 */

	this.pins = [];

/* Koden nedan visar p� ett problem. (Se anropen i bowl_run.js) 
 * i kommer n�mligen att vara 11 n�r konstruktorfunktioen BowlingGame
 * returnera vilket betyder att oavsett s� kommer alerten att skriva ut "I am pin 11"
 */
//	for(var i = 1; i <= 10; ++i){
//		this.pins[i] = function(){
//			alert("I am pin "+i);
//		}
//	}
	

/* Vi kan anv�nda nedanst�ende l�sning f�r att skapa en closure med initPins.
 * initPins kommer n�mligen att returnera en g�ng f�r varje iteration i loopen
 * vilket inneb�r att alerten skriver ut r�tt.  
 */
//	var initPins = function(n){
//		return function(){
//			alert("I am pin "+n);			
//		};
//	};
	
//	for(var i = 1; i <= 10; ++i){
//		this.pins[i] = initPins(i);
//	}


/* Nedanst�ende l�sning kan se elegantare ut men inneb�r att funktionen som har n i parameterlistan 
 * kommer att beh�va skapas f�r varje itteration vilket �r mer resurskr�vande.
 * Regel: Skapa aldrig funktioner innuti en loop. 
 * */
//	for(var i = 1; i <= 10; ++i){
//		
//		this.pins[i] = function(n){
//			return function(){
//				alert("I am pin " + n);
//			};
//		}(i);
//	}

}




/* Play kallar vi p� n�r det �r dags att spela spelet.*/
BowlingGame.prototype.play = function(){
	
	for(var rounds = 0; rounds < 50; rounds++){
		for(var player = 0; player < this.getPlayers().length; player++){
			this.getPlayer(player).addPoint(hit());
		
		}
	}
	
	this.showScoreBoard();
	
	function hit(){
		var point =  Math.floor( Math.random() * 10)+1;
		return point;
	}
	
	
};

/* Anv�nds f�r att presentera resultatet f�r anv�ndaren. */
BowlingGame.prototype.showScoreBoard = function(){
	
	document.write("<h3>Scoreboard:</h3>");
	for(var player = 0; player < this.getPlayers().length; player++){
		var p = this.getPlayer(player);
		document.write(p.getName()+": "+p.getScore()+"<br />");
	}
};
