//2d array, questionsArr[i][0] holds the question, followed by the answers

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

//Consider alternative approach to keeping track of score than unnecessarily many vars. perhaps an array?

var pointsHyve = 0;
var pointsSeuraus = 0;
var pointsVelvollisuus = 0;
var pointsOikeus = 0;
var pointsSopimus = 0;
var selectedTime = 0;


//MANAGES ANSWERING TO QUESTIONS

function optionPressed(btnId){

	var chosenEthicName = btnId.substring(0, (btnId.length - 3));

	switch (chosenEthicName){
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


//SHOWS SCORE

function checkScore(){
	settings.style.display = "none";
	game.style.display = "none";
	results.style.display = "block";


	hyveResult.innerText = "Hyve-etiikka: " + pointsHyve;
	seurausResult.innerText = "Seurausetiikka: " + pointsSeuraus;
	velvollisuusResult.innerText = "Velvollisuusetiikka: " + pointsVelvollisuus;
	oikeusResult.innerText = "Oikeusetiikka: " + pointsOikeus;
	sopimusResult.innerText = "Sopimus-etiikka: " + pointsSopimus;


	var strongestEthic = Math.max(pointsHyve, pointsSeuraus, pointsVelvollisuus, pointsOikeus, pointsSopimus);

	var strongestEthicName;

	switch(strongestEthic){

		case pointsHyve: 
			strongestEthicName = "hyve";
			break;

		case pointsSeuraus: 
			strongestEthicName = "seuraus";
			break;

		case pointsVelvollisuus: 
			strongestEthicName = "velvollisuus";
			break;

		case pointsOikeus: 
			strongestEthicName = "oikeus";
			break;

		case pointsSopimus: 
			strongestEthicName = "sopimus";
			break;
	}

	//When multiple ethics share a score, chooses one of them without further explanations, should be noted
	//Code also presumes that all questions are answered as the percentage is calculated with the length of questionsArr, FIX!

	strongestEthicH2.innerText = "Vastasit " + Math.round(100*(strongestEthic / questionsArr.length)) + "% " + strongestEthicName + "-etiikan mukaan.";

}


var timer1;
var timeSet;
var time;

//HANDLES GENERATING NEW QUESTIONS AS WELL AS RESETTING TIMER

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
	timeIndicator.innerText = time;
	timer1 = setInterval(timer, 1000);
}

//HANDLES STARTING GAME

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


//MANAGES TIMER, WHEN TIME RUNS OUT, NONE OF THE ETHICS RECEIVE POINTS AND NEW QUESTION IS INSTANTIAITED


function timer(){
	time--;
	timeIndicator.innerText = time;
	if(time <= 0){
		clearInterval(timer1);
		//pointsVelvollisuus++;
		newQuestion();
	}

}



function shuffleQuestions(){
	var ul = document.getElementById("questionBtns");

	for (var i = ul.children.length; i >= 0; i--) {
    	ul.appendChild(ul.children[Math.random() * i | 0]);
	}
}







