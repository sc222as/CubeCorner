
/* Denna "klass" skapar vi Player-objekt utifrån.
 * Vi kapslar in privata variabler med getters och setters. Givetvis kan vi
 * även lägga till kontroll för att dessa är av rätt typ, likt addPoint.
 */
function Player(name, age, handedness){
	var score = 0;
	
	this.getName = function(){return name;};
	this.setName = function(_name){name = _name;};
	
	this.getAge = function(){return age;};
	this.setAge = function(_age){age = _age;};
	
	this.getHandedness = function(){return name;};
	this.setHandedness = function(_handedness){handedness = _handedness;};
	
	this.getScore = function(){return score;};
	
	this.addPoint = function(point){
			if((!isNaN(point)) && (point > 0)){
				score += point;
			}
	};	
}
