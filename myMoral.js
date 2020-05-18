//2d array, questionsArr[i][0] holds the question, followed by the answers

var questionsArr = [
	["Lupasit ostaa kaverillesi joululahjan. Voisit kuitenkin ostaa myös ostaa itsellesi uuden TV:n. Rahat riittävät vain toiseen, mitä teet?", 
	"Ostat kaverille joululahjan, sillä pyrit olemaan epäitsekäs.", "Kaveri ei kuitenkaan käytä joululahjaa, joten ei ole väliä ostaako sen vai ei.", "Ostat lahjan, sillä lupausta ei tule pettää.", "Vaikka lupasitkin joululahjan, koet että saat itse päättää ostatko sittenkin TV:n.", "Olit jo kaverin kanssa sopinut ostavasi joululahjan joten myös ostat sen."],
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

var ethicSummaries = {"hyve" : "Hyvetiivistelmä", "seuraus" : "Seuraustiivistelmä", "velvollisuus" : "Velvollisuustiivistelmä", "oikeus" : "Oikeustiivistelmä", "sopimus" : "Sopimustiivistelmä"};

var qIndex;

var ethicScores = {"hyve" : 0, "seuraus" : 0, "velvollisuus" : 0, "oikeus" : 0, "sopimus" : 0};


//MANAGES ANSWERING TO QUESTIONS

function optionPressed(btnId){

	var chosenEthicName = btnId.substring(0, (btnId.length - 3));

	ethicScores[chosenEthicName]++;

	clearInterval(timer1);
	newQuestion(false);
}



//SHOWS SCORE

function checkScore(){


	var strongestEthic = -1;
	var strongestEthicName;
	var totalAnswered = 0;

	for (var ethicName in ethicScores){
		totalAnswered += ethicScores[ethicName];

		if(ethicScores[ethicName] > strongestEthic){

			strongestEthic = ethicScores[ethicName];
			strongestEthicName = ethicName;
		}

	}

	//If the player has not answered any questions, a pop-up message appears and the page is refreshed

	if(totalAnswered == 0){

		window.alert("Et vastannut yhteenkään kysymykseen, ladataan sivu uudestaan uutta yritystä varten.");
		location.reload();

		return;
	}


	//Forming an array of tied ethic scores

	var tiedEthics = [];

	for(var ethicName in ethicScores){

		if(ethicScores[ethicName] == strongestEthic) tiedEthics.push(ethicName);

	}

	//If there is a tie, a tiebreaker question is introduced

	if(tiedEthics.length > 1){
		window.alert("Useammalla suuntauksella on samat pisteet, seuraa bonuskysymys.")
		newQuestion(true);
		return;
	}


	updateResults(strongestEthicName);


	settings.style.display = "none";
	game.style.display = "none";
	results.style.display = "block";


	hyveResult.innerText = "Hyve-etiikka: " + ethicScores["hyve"];
	seurausResult.innerText = "Seurausetiikka: " + ethicScores["seuraus"];
	velvollisuusResult.innerText = "Velvollisuusetiikka: " + ethicScores["velvollisuus"];
	oikeusResult.innerText = "Oikeusetiikka: " + ethicScores["oikeus"];
	sopimusResult.innerText = "Sopimus-etiikka: " + ethicScores["sopimus"];


	//When multiple ethics share a score, chooses one of them without further explanations, should be noted

	var strongestEthicLabel = "Vastasit " + Math.round(100*(strongestEthic / totalAnswered)) + "% " + strongestEthicName;

	if(strongestEthicName == "hyve") strongestEthicLabel += "-";

	strongestEthicLabel += "etiikan mukaan.";

	strongestEthicH2.innerText = strongestEthicLabel;

	var ethicSummary = document.createElement('p');
	ethicSummary.innerText = ethicSummaries[strongestEthicName];
	document.getElementById('ethicSummary').appendChild(ethicSummary);

}


var timer1;
var timeSet;
var time;

//HANDLES GENERATING NEW QUESTIONS AS WELL AS RESETTING TIMER

function newQuestion(tieBreaker){

	//Clears the timer of the previous question
	clearInterval(timer1);


	if(!tieBreaker){
		//progressPercent is handled questions / all questions (- possbile tiebreaker)
		var progressPercent = Math.round(100*((qIndex+1)/(questionsArr.length-1))) + "%";

		document.getElementById("progressBar").innerText = progressPercent;
		document.getElementById("progressBar").style.width = progressPercent;

	}else{
		document.getElementById("checkScoreBtn").style.display = "none";
	}



	if((qIndex > questionsArr.length-3) && !tieBreaker){
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

	//Shuffles answer order

	for (var i = ul.children.length; i >= 0; i--) {
    	ul.appendChild(ul.children[Math.random() * i | 0]);
	}

	//Hides next question button when arriving at the last question
	if(qIndex >= questionsArr.length-2){
		document.getElementById("nextQuestionBtn").style.display = "none";
	}


	//Sets timer if not a tiebreaking situation


	if(tieBreaker) timeSet = "noTime";


	if(timeSet == "noTime"){
		timeIndicator.style.display = "none";
		return;
	}

	time = timeSet;
	timeIndicator.innerText = time;
	timer1 = setInterval(timer, 1000);
}

//HANDLES STARTING GAME

function startGame(){
	document.getElementById("settings").style.display = "none";
	document.getElementById("game").style.display = "block";
	document.getElementById("progress").style.display = "block";

	var selector = document.getElementById("timeSelect");
	timeSet = selector[selector.selectedIndex].value;
	generateGame();
}


function generateGame(){
	qIndex = -1;
	shuffleQuestions();
	newQuestion(false);

}


//MANAGES TIMER, WHEN TIME RUNS OUT, NONE OF THE ETHICS RECEIVE POINTS AND NEW QUESTION IS INSTANTIAITED


function timer(){
	time--;
	timeIndicator.innerText = time;
	if(time <= 0) newQuestion(false);
}


//REFRESHES PAGE FOR A NEW GAME

function reloadGame(){
	location.reload();

}

//SHUFFLES QUESTION ARRAY

function shuffleQuestions() {
    var newIndex, placeholder, currentIndex;

    for (currentIndex = questionsArr.length - 1; currentIndex > 0; currentIndex--) {

        newIndex = Math.floor(Math.random() * (currentIndex + 1));

        placeholder = questionsArr[currentIndex];
        questionsArr[currentIndex] = questionsArr[newIndex];
        questionsArr[newIndex] = placeholder;
    }
}


//Updates global results shown at the end of the quiz

function updateResults(strongestEthicName) {


	//Holds the global count of every gotten ethic result

	var ethicCounts = {"hyve" : 0, "seuraus" : 0, "velvollisuus" : 0, "oikeus" : 0, "sopimus" : 0};


	//Reads and updates the firebase realtime database

	firebase.database().ref('results/points/hyve').once('value', function(snapshot){
		ethicCounts['hyve'] = snapshot.val();

		firebase.database().ref('results/points/seuraus').once('value', function(snapshot){
			ethicCounts['seuraus'] = snapshot.val();

			firebase.database().ref('results/points/velvollisuus').once('value', function(snapshot){
				ethicCounts['velvollisuus'] = snapshot.val();

				firebase.database().ref('results/points/oikeus').once('value', function(snapshot){
					ethicCounts['oikeus'] = snapshot.val();

					firebase.database().ref('results/points/sopimus').once('value', function(snapshot){
						ethicCounts['sopimus'] = snapshot.val();


						//This players gotten ethic count is incremented
						ethicCounts[strongestEthicName]++;

						//Updates database

						firebase.database().ref('results/points').set({
							hyve : ethicCounts['hyve'],
							seuraus : ethicCounts['seuraus'],
							velvollisuus : ethicCounts['velvollisuus'],
							oikeus : ethicCounts['oikeus'],
							sopimus : ethicCounts['sopimus']
						});



						//Updates ethic percentages of global results for the player's resultview

						var totalEthicCount = 0;

						for(var ethicName in ethicCounts){
							totalEthicCount += ethicCounts[ethicName];
						}

						for(var ethicName in ethicCounts){
							document.getElementById(ethicName + 'Percent').innerText += (' ' + (100 * ethicCounts[ethicName] / totalEthicCount).toFixed(1) + '%');

							if(ethicName == strongestEthicName) document.getElementById(ethicName + 'Percent').style.fontWeight = 'bold';

						}

						//Updates strongest ethic percentage label
						document.getElementById('strongestEthicGlobalPrecentLabel').innerText += (' ' + (100 * ethicCounts[strongestEthicName] / totalEthicCount).toFixed(1) + '% kyselyyn vastanneista.');

					});
				});
			});
		});

	});


}



