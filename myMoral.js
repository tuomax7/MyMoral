//2d array, questionsArr[i][0] holds the question, followed by the answers

var questionsArr = [
	["Lupasit ostaa kaverillesi joululahjan. Voisit kuitenkin ostaa myös ostaa itsellesi uuden TV:n. Rahat riittävät vain toiseen, mitä teet?", 
	"Ostat kaverille joululahjan, sillä pyrit olemaan epäitsekäs.", "Kaveri ei kuitenkaan käytä joululahjaa, joten ei ole väliä ostatko sen vai ei.", "Ostat lahjan, sillä lupausta ei tule pettää.", "Vaikka lupasitkin joululahjan, koet että saat itse päättää ostatko sittenkin TV:n.", "Olit jo kaverin kanssa sopinut ostavasi joululahjan joten myös ostat sen."],

	["Sinulla on kiire tärkeään tapaamiseen, ja ehdit siihen vain, jos matkustat metrolla. Metroasemalla huomaat kuitenkin matkakorttisi jääneen kotiin, etkä saa ostettua lippua. Mitä teet?",
	"Et matkusta liputta, sillä varastaminen on pahe.", "Metroasemalle aiheuttamasi rahallinen menetys on olematon, joten matkustat liputta.", "Tapaaminen on tärkeä, ja sinulla on läsnäolovelvollisuus, joten matkustat liputta.", "Sinulla ei ole muhiin matkustajiin nähden etuoikeutta matkustaa liputta, joten et matkusta liputta.", "TIedät, että metroliikenteen toimivuus perustuu siihen, että matkustajat maksavat lipusta, joten et matkusta liputta."],

	["Olet lukenut unelmayliopistosi pääsykokeisiin ahkerasti. Koe joudutaan kuitenkin järjestämään valvomattomissa olosuhteissa, ja kokeen järjestäjät toivovat, etteivät kokelaat huijaisi pääsykokeessa. Huijaatko pääsykokeessa?", 
	"Omasta osaamisestaan valehteleminen on väärin, joten et huijaa.", "Huijaamalla saat opiskelupaikan, jonka olisit muutenkin ansainnut luettuasi ahkerasti, siis huijaat.", "Koet velvollisuudeksesi olla huijaamatta, sillä pääsykokeen järjestäjät toivovat rehellisyyttä.", "Pääsykokeen järjestäjät eivät ole evänneet sinulta oikeutta huijata, joten huijaat.", "Et huijaa, sillä uskot kokelasyhteisön yleisesti tuomitsevan huijaamisen myös näissä erityisolosuhteissa."],

	["Olet ystäväsi häissä tunti ennen seremonian alkua. Hääpaikalla sinulle selviää, että ystäväsi puolisolla on jo pitkään ollut salasuhde toisen häävieraan kanssa. Kerrotko ystävällesi salasuhteesta?", 
	"Ystäväsi suhde on tuomittu puolison epärehellisyyden takia, joten sinun on parempi kertoa ystävällesi salasuhteesta.", "Jos kerrot salasuhteesta ennen seremoniaa, koko häät ja ystävän suhde menevät pilalle, et siis kerro.", "Koet, että sinun tulee hyvänä ystävänä olla rehellinen ystävällesi ja kertoa suhteesta.", "Ystäväsi puolisolla on oikeus selittää salasuhteestaan itse sinun puuttumatta asiaan, et kerro.", "Uskot, että ystäväsi haluaisi monien muiden tavoin saada tietää salasuhteesta ajoissa, joten kerrot."],

	["Tuttusi paljastaa sinulle ryöstäneensä miljardööriltä murto-osan tämän omaisuudesta. Hän kertoo kuitenkin lahjoittaneensa rahat köyhälle orpokodille. Kerrotko poliisille tuttusi ryöstöstä, jolloin rahat palautuvat miljardöörille?", 
	"Varastaminen on väärin kontekstista riippumatta, joten paljastat tuttusi rikoksen.", "Ystäväsi teon vuoksi orpokodin lasten elinolosuhteet paranivat eivätkä miljardöörin elinolosuhteet juuri huonontuneet, joten et kantele ryöstöstä.", "Koet, että sinun tulee lainkuuliaisena kansalaisena ilmoittaa viranomaisille laittomasta ryöstöstä.", "Miljardöörillä on oikeus omaisuutensa, joten paljastat tuttusi poliisille.", "Et kerro tutustasi poliisille, sillä uskot sanattomaan sopimukseen jonka mukaan köyhä orpokoti tarvitsee rahoja enemmän kuin miljardööri."],

	["Olet lääkäri ja hoidettavanasi on kuusi kuolevaa potilasta. Kuudes potilas on elinluovuttaja ja pelastettavissa lääkityksellä. Viisi muuta potilasta tarvitsevat selvitäkseen väistämättä elinsiirtoja, joita ei voida suorittaa ilman että elinluovuttajapotilas kuolee. Lääkitsetkö kuudetta potilasta vai pelastatko viisi muuta potilasta?", 
	"Lääkärinä sinulle olisi liian suuri pahe jättää lääkitsemättä lääkettä tarvitseva kuudes potilas, joten lääkitset hänet.", "Jätät kuudennen potilaan lääkitsemättä, sillä tällöin useampi potilas selviää hengissä ja lääkärityösi lopputulos on parempi.", "Olet lääkärinä velvoitettu hoitamaan jokaista potilastasi parhaan mukaan tasaveroisesti, joten et voi jättää lääkitsemättä kuudennetta potilasta.", "Sinulla ei ole oikeutta päättää kuudennen potilaan uhraamisesta viiden muun pelastamiseksi, joten lääkitset kuudennen potilaan.", "Uskot, että yleisen mielipiteen mukaan on parempi pelastaa mahdollisimman monta ihmishenkeää, joten jätät kuudennen potilaan lääkitsemättä."],

	["Olet menestyksekkään urheilujoukkueen valmentaja, ja joukkueesi pelaa merkittävän turnauksen finaaliottelussa lähipäivinä. Joukkueesi finaaliin auttanut tähtipelaaja rikkoo tarkoituksellisesti joukkueen ehdottomia sääntöjä, ja sääntöjen mukaan et saisi antaa hänen pelata finaalissa. Annatko tähtipelaajan pelata hänen kurittomuudestaan huolimatta tärkeässä finaalissa?", 
	"Mielestäsi ei ole reilua antaa tähtipelaajan pelata finaalissa, sillä yhteisten sääntöjen rikkominen on ehdottoman väärin.", "Annat tähtipelaajaan pelata finaalissa, jotta ahkerasti harjoitellut joukkueesi saisi todennäköisemmin ansaitsemansa voiton.", "Valmentajana sinun tulee varmistaa, että kaikki joukkueen jäsenet noudattavat yhteisiä sääntöjä, joten et anna tähtipelaajan pelata finaalissa.", "Vaikka tähtipelaajalla ei ollut oikeutta rikkoa sääntöjä, koet että sinulla on myös oikeus päättää ketkä finaalissa pelaavat, joten annat tähtipelaajan pelata.", "Joukkueen jäsenet ovat sopineet noudattavansa sääntöjä, joten olisi väärin antaa sääntöjä rikkoneen pelaajan pelata finaalissa."],

	["Oikeuden tuomarina sinun tulee päättää kumman vanhemman luona eronneen avioparin lapsi asuu. Lapsi on epävirallisesti ilmoittanut asuvansa mieluummin isän luona, mutta isän elämäntilanne on merkittävästi epävakaampi ja lapsiystävättömämpi kuin äidin. Lapsi on alle 12 vuotta vanha, joten lopullinen päätös on sinun. Mitä teet?", 
	"Tunnustat lapsen vahvemman rakkauden isäänsä kohtaan ja annat lapsen asua isällään.", "Annat lapsen asua isällään, sillä tällöin lapsi saa asua mieleisemmän vanhemman kanssa.", "Ammattisi velvoittaa sinut tekemään päätöksiä ensisijaisesti lain puitteissa, jolloin äidin vakaampi elämäntilanne ansaitsee lapsen ensisijaisen huoltajuuden.", "Lapsella ei ole laillista päätäntävaltaa asumisjärjestelyissä, mutta sinulla on, joten koet ettei sinun tarvitse kuunnella lasta vaan päätät asumisolosuhteiden valossa lapsen asuvan äidillään.", "Vaikka laki ei velvoita sinua kuulemaan lapsen toiveita, koet sen järkevän tuomarin toimintana ja annat lapsen asua isällään."],

	["Lapsellasi on hyvin nuorena todettu sairaus, jonka ennustetaan lyhentävän hänen elinikäänsä useammalla kymmenellä vuodella. Lapsi ei diagnoosin aikaan ymmärtänyt sairauttaan, mutta hänen kasvettuaan voisit nyt kertoa hänelle hänen sairaudestaan ymmärrettävästi, tai vaihtoehtoisesti varmistaa, ettei lapsi saa koskaan kuulla sairaudestaan. Kerrotko lapsellesi sairaudesta?", 
	"Sairaudesta kertomatta jättäminen on rinnastettavissa valehtelemiseen, jonka koet vääräksi, joten kerrot lapselle sairaudesta.", "Lapsi saattaisi hyvinkin mahdollisesti elää loppuelämänsä onnettomana, jos hän saisi tietää sairaudesta, joten varmistat ettei lapsi saa tietää sairaudesta.", "Vanhempana sinulla on velvollisuus huolehtia lapsesi terveydestä, mihin kuuluu myös sairauden hyväksyminen ja siitä lapselle kertominen.", "Lapsella on oikeus saada tietää hänen sairaudestaan, joten kerrot lapselle sairaudesta.", "Järkeilet, että lapsi elää onnellisemman elämän sairaudesta tietämättömänä, vaikka lapsella saattaisikin olla oikeus kuulla sairaudestaan. Et siis kerro lapselle sairaudesta."],

	["Risteilylaiva, jonka kyydissä matkustit, uppoaa. Onnistuit kuitenkin kiipeämään vedestä pelastusveneeseen, joka on nyt täynnä muita matkustajia. Ryhmä muita matkustajia kylmässä meressä pyytää päästää pelastusveneeseenne. Jos autat meressä kamppailevat matkustajat pelastusveneen kyytiin, on hyvin mahdollista, että pelastusvene uppoaa matkustajineen. Autatko meressä olevia matkustajia?", 
	"Sinun tulee osoittaa rohkeutta ja sinnikyyttä, ja siksi autat matkustajia meressä.", "Jos auttaisit lisää matkustajia veneeseen, saattaisitte kaikki kuolla. Jätät siis auttamatta meressä olevia matkustajia, jotta mahdollisimman moni matkustajista selviäisi hengissä.", "Auttamisvelvollisuus saa sinut nostamaan hädässä olevat matkustajat veneeseen.", "Meressä kamppailevilla matkustajilla on oikeus avunsaantiin, joten autat heidät veneeseen.", "Et auta hädässä olevia matkustajia, sillä vaikka yhteiskunta kehottaa pyrkimään auttamaan kaikkia, on parempi varmistaa useamman henkilön eloonjäänti, kuin riskeerata kaikkien hengissä selviäminen."]
];

var ethicLinks = {"hyve" : "https://fi.wikipedia.org/wiki/Hyve-etiikka", "seuraus" : "https://fi.wikipedia.org/wiki/Seurausetiikka", "velvollisuus" : "https://fi.wikipedia.org/wiki/Velvollisuusetiikka", "oikeus" : "https://fi.wikipedia.org/wiki/Luonnonoikeus", "sopimus" : "https://fi.wikipedia.org/wiki/Sopimusetiikka"};

var qIndex;

var ethicScores = {"hyve" : 0, "seuraus" : 0, "velvollisuus" : 0, "oikeus" : 0, "sopimus" : 0};


//MANAGES ANSWERING TO QUESTIONS

function optionPressed(btnId){

	var chosenEthicName = btnId.substring(0, (btnId.length - 3));

	ethicScores[chosenEthicName]++;

	clearInterval(timer1);
	newQuestion([]);
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
		newQuestion(tiedEthics);
		return;
	}


	updateResults(strongestEthicName);

	progress.style.display = "block";
	settings.style.display = "none";
	game.style.display = "none";
	results.style.display = "block";


	hyveResult.innerText = "Hyve-etiikka: " + ethicScores["hyve"];
	seurausResult.innerText = "Seurausetiikka: " + ethicScores["seuraus"];
	velvollisuusResult.innerText = "Velvollisuusetiikka: " + ethicScores["velvollisuus"];
	oikeusResult.innerText = "Oikeusetiikka: " + ethicScores["oikeus"];
	sopimusResult.innerText = "Sopimusetiikka: " + ethicScores["sopimus"];


	var strongestEthicLabel = "Vastasit " + Math.round(100*(strongestEthic / totalAnswered)) + "% " + strongestEthicName;

	if(strongestEthicName == "hyve") strongestEthicLabel += "-";

	strongestEthicLabel += "etiikan mukaan.";

	strongestEthicH2.innerText = strongestEthicLabel;

	var ethicLink = document.createElement('a');
	ethicLink.href = ethicLinks[strongestEthicName];
	ethicLink.innerText = "Lue lisää tästä normatiivisen etiikan suuntauksesta.";
	ethicLink.target = "_blank";
	ethicLink.rel = "noopener noreferrer";
	document.getElementById('ethicLink').appendChild(ethicLink);

}


var timer1;
var timeSet;
var time;

//HANDLES GENERATING NEW QUESTIONS AS WELL AS RESETTING TIMER

function newQuestion(tiedEthics){

	//Clears the timer of the previous question
	clearInterval(timer1);


	if(tiedEthics.length == 0){

		//progressPercent is handled questions / all questions (- possbile tiebreaker)
		var progressPercent = Math.min(100, Math.round(100*((qIndex+1)/(questionsArr.length-1)))) + "%";

		document.getElementById("progressBar").innerText = progressPercent;
		document.getElementById("progressBar").style.width = progressPercent;

	}else{
		document.getElementById("progress").style.display = "none";
		document.getElementById("checkScoreBtn").style.display = "none";

		hyveBtn.style.display = "none";
		seurausBtn.style.display = "none";
		velvollisuusBtn.style.display = "none";
		oikeusBtn.style.display = "none";
		sopimusBtn.style.display = "none";

		for(var i = 0; i < tiedEthics.length; i++){
			document.getElementById(tiedEthics[i] + 'Btn').style.display = "inline-block";
		}
	}



	if((qIndex > questionsArr.length-3) && tiedEthics == 0){
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
	if(qIndex >= questionsArr.length-2 || tiedEthics.length > 0){
		document.getElementById("nextQuestionBtn").style.display = "none";
	}


	//Sets timer if not a tiebreaking situation


	if(tiedEthics.length > 0) timeSet = "noTime";


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
	newQuestion([]);

}


//MANAGES TIMER, WHEN TIME RUNS OUT, NONE OF THE ETHICS RECEIVE POINTS AND NEW QUESTION IS INSTANTIAITED


function timer(){
	time--;
	timeIndicator.innerText = time;
	if(time <= 0) newQuestion([]);
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

function checkScorePressed(){
	qIndex = questionsArr.length-2;
	checkScore();
}



