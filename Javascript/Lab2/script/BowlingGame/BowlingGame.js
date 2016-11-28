function BowlingGame(players){
	// Getters
	this.getPlayers = function(){return players;};
	this.getPlayer = function(n){return players[n];};
	
	/* setPlayers används för att vi ska kunna göra kontroller på den data som
	 * som skickas in.
	 */ 
	this.setPlayers = function(_players){
	
		// Vi kontrollerar om den inskickade variablen är en array.
		if(!(_players instanceof Array)){
			throw new Error("BowlingGame takes an array as argument"); //Kasta ett undantag om ej array
		}
		
		/* Samma sak som ovan fast för alla våra positioner i arrayen. Position
		 * har ingen betydelse så vi kan använda oss av for-in.
		 */
		for(player in _players){
			if(!(_players[player] instanceof Player)){
				throw Error("The players array must contain instances of Player");
			}			
		}
		// Inskickad array är OK så tilldela denna till vår privata variabel.
		players = _players;
	};

	this.setPlayers(players); // Vi anropar settern för att få vår inparameter validerad.




/* Nedanstående kod används för att visa på hur closures beter sig. 
 * 
 */

	this.pins = [];

/* Koden nedan visar på ett problem. (Se anropen i bowl_run.js) 
 * i kommer nämligen att vara 11 när konstruktorfunktioen BowlingGame
 * returnera vilket betyder att oavsett så kommer alerten att skriva ut "I am pin 11"
 */
//	for(var i = 1; i <= 10; ++i){
//		this.pins[i] = function(){
//			alert("I am pin "+i);
//		}
//	}
	

/* Vi kan använda nedanstående lösning för att skapa en closure med initPins.
 * initPins kommer nämligen att returnera en gång för varje iteration i loopen
 * vilket innebär att alerten skriver ut rätt.  
 */
//	var initPins = function(n){
//		return function(){
//			alert("I am pin "+n);			
//		};
//	};
	
//	for(var i = 1; i <= 10; ++i){
//		this.pins[i] = initPins(i);
//	}


/* Nedanstående lösning kan se elegantare ut men innebär att funktionen som har n i parameterlistan 
 * kommer att behöva skapas för varje itteration vilket är mer resurskrävande.
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




/* Play kallar vi på när det är dags att spela spelet.*/
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

/* Används för att presentera resultatet för användaren. */
BowlingGame.prototype.showScoreBoard = function(){
	
	document.write("<h3>Scoreboard:</h3>");
	for(var player = 0; player < this.getPlayers().length; player++){
		var p = this.getPlayer(player);
		document.write(p.getName()+": "+p.getScore()+"<br />");
	}
};
