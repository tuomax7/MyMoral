var questionsArr =[
	["Lupasit ostaa kaverillesi joululahjan. Voisit kuitenkin ostaa myös ostaa itsellesi uuden TV:n. Rahat riittävät vain toiseen, mitä teet?", 
	"Ostat kaverille joululahjan, sillä pyrit olemaan epäitsekäs", "Kaveri ei kuitenkaan käytä joululahjaa, joten ei ole väliä ostaako sen vai ei.", "Ostat lahjan, sillä lupausta ei tule pettää", "Vaikka lupasitkin joululahjan, koet että saat itse päättää ostatko sittenkin TV:n", "Olit jo kaverin kanssa sopinut ostavasi joululahjan joten myös ostat sen"],
	["Moi", 
	"hyve1", "seuraus1", "velvollisuus1", "oikeus1", "sopimus1"],
	["Moi2", 
	"hyve2", "seuraus2", "velvollisuus2", "oikeus2", "sopimus2"],
	["Moi3", 
	"hyve3", "seuraus3", "velvollisuus3", "oikeus3", "sopimus3"],
	["Moi4", 
	"hyve4", "seuraus4", "velvollisuus4", "oikeus4", "sopimus4"],
	["Moi5", 
	"hyve5", "seuraus5", "velvollisuus5", "oikeus5", "sopimus5"]
];

var qIndex;

var pointsHyve = 0;
var pointsSeuraus = 0;
var pointsVelvollisuus = 0;
var pointsOikeus = 0;
var pointsSopimus = 0;
var selectedTime = 0;


function optionPressed(btnId){
	var valittu = btnId.substring(0, (btnId.length -3));
	//window.alert(valittu);

	switch (valittu){
		case "hyve":
			pointsHyve++; 
			break;

		case "seuraus":
			pointsSeuraus++; 
			break;

		case "velvollisuus":
			pointsVelvollisuus++; 
			break;

		case "oikeus":
			pointsOikeus++; 
			break;

		case "sopimus":
			pointsSopimus++;
			break; 

	}
	clearInterval(timer1);
	newQuestion();
}

function checkScore(){
	settings.style.display = "none";
	game.style.display = "none";
	results.style.display = "block";
	/*
	window.alert(
		"Hyve-etiikka: " + pointsHyve
		+ "\nSeuraus-etiikka: " + pointsSeuraus
		+ "\nVelvollisuus-etiikka: " + pointsVelvollisuus
		+ "\nOikeus-etiikka: " + pointsOikeus
		+ "\nSopimus-etiikka: " + pointsSopimus
	);
	*/

	hyveResult.innerText = "Hyve-etiikka: " + pointsHyve;
	seurausResult.innerText = "Seurausetiikka: " + pointsSeuraus;
	velvollisuusResult.innerText = "Velvollisuusetiikka: " + pointsVelvollisuus;
	oikeusResult.innerText = "Oikeusetiikka: " + pointsOikeus;
	sopimusResult.innerText = "Sopimus-etiikka: " + pointsSopimus;

	var vahvinEtiikka = Math.max(pointsHyve, pointsSeuraus, pointsVelvollisuus, pointsOikeus, pointsSopimus);

	var vahvinEtiikkaNimi;

	switch(vahvinEtiikka){

		case pointsHyve: 
			vahvinEtiikkaNimi = "hyve";
			break;

		case pointsSeuraus: 
			vahvinEtiikkaNimi = "seuraus";
			break;

		case pointsVelvollisuus: 
			vahvinEtiikkaNimi = "velvollisuus";
			break;

		case pointsOikeus: 
			vahvinEtiikkaNimi = "oikeus";
			break;

		case pointsSopimus: 
			vahvinEtiikkaNimi = "sopimus";
			break;
	}

	vahvinEtiikkaH2.innerText = "Vastasit " + Math.round(100*(vahvinEtiikka / questionsArr.length)) + "% " + vahvinEtiikkaNimi + "-etiikan mukaan.";

}
var timer1;
var timeSet;
var time;

function newQuestion(){
	if(qIndex > questionsArr.length-2){
		checkScore();
		return;
	}

	qIndex++;
	questionBox.innerText = questionsArr[qIndex][0];

	hyveBtn.innerText = questionsArr[qIndex][1];
	seurausBtn.innerText = questionsArr[qIndex][2];
	velvollisuusBtn.innerText = questionsArr[qIndex][3];
	oikeusBtn.innerText = questionsArr[qIndex][4];
	sopimusBtn.innerText = questionsArr[qIndex][5];


	var ul = document.getElementById("questionBtns");

	for (var i = ul.children.length; i >= 0; i--) {
    	ul.appendChild(ul.children[Math.random() * i | 0]);
	}


	time = timeSet;
	timeIndic.innerText = time;
	timer1 = setInterval(timer, 1000);
}

function startGame(){
	settings.style.display = "none";
	game.style.display = "block";
	var selector = document.getElementById("timeSelect");
	timeSet = selector[selector.selectedIndex].value;
	generateGame();
}


function generateGame(){
	qIndex = -1;
	newQuestion();

}


function timer(){
	time--;
	timeIndic.innerText = time;
	if(time <= 0){
		clearInterval(timer1);
		pointsVelvollisuus++;
		newQuestion();
	}

}

function shuffleQuestions(){
	var ul = document.getElementById("questionBtns");

	for (var i = ul.children.length; i >= 0; i--) {
    	ul.appendChild(ul.children[Math.random() * i | 0]);
	}
}







