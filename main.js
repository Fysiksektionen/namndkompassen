// Filen bör vara i sälskap med "questions.js" som definierar 'questions' och 'namnder'
// HTML filen är hårdkodad med antalet val i varje fråga.

var quiz = document.getElementById("quiz");
var intro = document.getElementById("intro");
var ques = document.getElementById("question");
const N_ques = questions.length;
const N_namnder = namnder.length;
const N_radio_ques = 5;
var do_radio;

// Välj antalet nollskilda toppmatchningar som visas i slutet här (vid samma ranking visas alla även om det blir fler)
const N_resultat = 5;

// Text som står efter resultatet
const sluttext = '<br>Sugen på att veta mer om någon nämnd*? Kolla <a href="https://docs.google.com/document/d/1G6eUP2_dx3uXntELaNVc5sOe7suIJIfrBQyOWau2FEw/edit?usp=sharing", target="_blank">här</a>';

// Ta fram listor med alla label element som har inputs -- alltså alla med id=option[N]
var opt_checkbox = new Array(N_ques);
var question_order = [...Array(N_namnder).keys()] // [0, 1, 2, 3, ...]
for (let i = 0; i < N_namnder; i++) {
    var opt_string = "option" + (i+1);
    opt_checkbox[i] = document.getElementById(opt_string);
}
var opt_radio = new Array(N_radio_ques);
for (let i = 0; i < N_radio_ques; i++) {
    var opt_string = "radio" + (i+1);
    opt_radio[i] = document.getElementById(opt_string);
}


var res = document.getElementById("result");
var nextButton = document.getElementById("next");
var q = document.getElementById("quit");


var score = new Array(N_namnder).fill(0);
var quesIndex = 0;

function give_ques(quesIndex) { // Starta en  ny fråga.
    // Sätt frågan i rubriken utefter det som står i questions.js filen.
	ques.innerHTML="<b>"+(quesIndex+1)+"/13. "+questions[quesIndex][0]+"</b>";
	// Om svaren är nummer, då ska frågan vara radio buttons.
	do_radio = Number.isInteger(questions[quesIndex][1]);
	
	for (let i = 0; i < N_namnder; i++) {
	    if(do_radio) {
	        opt_checkbox[i].parentNode.style.display = 'none';
	    }
	    else {
	        opt_checkbox[i].parentNode.style.display = 'inline-block';
	    }
	    opt_checkbox[i].textContent = questions[quesIndex][question_order[i]+1];
	}
	
	for (let i = 0; i < N_radio_ques; i++) {
	    if(!do_radio) {
	        opt_radio[i].parentNode.style.display = 'none';
	    }
	    else {
	        opt_radio[i].parentNode.style.display = 'inline-block';
	    }
	    opt_radio[i].textContent="" + (i+1);
	}

	return;
}

function startquiz() {
    quiz.style.display='';
    intro.style.display='none';
    give_ques(0);
}


function nextques() { // När man klickar på nästa fråga.
    // alla inputs som har en i checkad box.
	var selected_ans = document.querySelectorAll('input:checked');
	
	// om inga alternativ är valda.
	if(selected_ans.length == 0) {
	    alert("Välj åtminstonde ett alternativ");
	    return;
	}
	
	// Beräkna score
	if(do_radio) {
	    // För varje nämnd (som har ett alternativ till frågan, ett nummer de tycker passar)
	    // Om deras alternativ för denna fråga är samma som personen valt, då läggs poäng till.
	    for (let i = 0; i < N_namnder; i++) {
	        //console.log(selected_ans[0].value)
     		if (questions[quesIndex][i+1] == selected_ans[0].value) {
     		    score[i] += 1/N_ques;
     		}
	    }
	    selected_ans.item(0).checked = false; // sätt radio till tom igen.
	}
	else {
	    for (let i = 0; i < selected_ans.length; i++) { // för alla svar...
     		namnd_index = question_order[selected_ans.item(i).value]; // pga shuffle, så måste vi göra en sökning vad som faktiskt är nämndens svar.
    		score[namnd_index] += 1/N_ques;
    		selected_ans.item(i).checked = false; // sätt checkboxen till tom igen.
	    }
	}
	
	
	// Gå vidare.
    quesIndex++;
    // Vid sista frågan ska det inte stå "nästa", utan något annat.
    if(quesIndex == N_ques-1) {
        nextButton.textContent="Avsluta";
    }
    
    
    // När alla frågor är slut.
    if(quesIndex == N_ques) {
        quiz.style.display='none';
        result.style.display='';
        
        var final_score_text = "<b>Toppmatchning</b>: <br>";
        var order = new Array(N_namnder);
        var high_score = 0;
        
        // Sortera från högst till lägst.
        sorted_score = [...score].sort(function(a, b){return b-a});
        
        // Ta fram ordningen via sorted score.
        for (let i = 0; i < N_namnder; i++) {
            for (let j=0; j < N_namnder; j++) {
                if (sorted_score[i] == score[j] && !order.includes(j)) {
                    order[i] = j;
                    break;
                }
            }
        }
        
        // Ta fram text för score att visa, baserat på högsta score.
        for (let i = 0; i < N_namnder; i++) {
            // Om man fått noll så ska score inte visas
            // Om det gått igenom mindre än antalet resultat, eller om det finns lika resulat då ska de visas.
            if (sorted_score[i] !== 0 && (i < N_resultat || sorted_score[i] == sorted_score[N_resultat-1]) ) {
                final_score_text += namnder[order[i]] + ": " + (sorted_score[i].toFixed(2)*100) + "%<br>";
            }
            else {
                break;
            }
        }
        
        result.innerHTML = final_score_text + sluttext;
        return;
    }
    
	shuffle(question_order);
    give_ques(quesIndex);

}

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    
    return array;
}


