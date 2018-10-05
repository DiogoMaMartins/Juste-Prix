var attempts = 0;
var valeurMin = 20;
var valeurMax=80;
var fenetre=confirm("did you want play");
var num= prompt("Entrez un nombre entre 20 et 80:");
function  random(){
			return Math.floor(Math.random() * (80 - 20 + 1) + 20);
        		}
 var numR = random();
function game(){
	var attempts = 0;
if (num >=20 && num <=80) {
			while (num!= numR) {	
				if (num < numR) {
				alert("cest plus");
				attempts +=1;	
				}
				else if (num > numR) {				
				alert("cest moins");
				attempts +=1;
				}
				num= prompt("Entrez un nombre entre 20 et 80:");
			}
				if (num == numR) {
				alert("C'est gagne tu as trouve en " + attempts*2 + " coups!");
				}
				else {
				num= prompt("Entrez un nombre entre 20 et 80:");	
				}
			
		}
		else {
			alert("i read just else");
		}
	}

game()



