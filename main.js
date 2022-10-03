var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var tques=questions.length;
var N_namnder = namnder.length;
var N_radio_ques = 5;
var do_radio;

// välj antalet nollskilda toppmatchningar som visas i slutet här (vid samma ranking visas alla även om det blir fler)
var N_resultat = 5;

// Text som står efter resultatet
var sluttext = '<br>Sugen på att veta mer om någon nämnd*? Kolla <a href="https://docs.google.com/document/d/1gP65qTX5yvGZpYiMBMD_K9XyRCzFmDqCV0N7Uzu-Vdg/edit?usp=sharing", target="_blank">här</a>'

var opt_checkbox = new Array(tques);
var question_order = [...Array(N_namnder).keys()]
for (let i = 0; i < N_namnder; i++){
    var opt_string = "option" + (i+1);
    opt_checkbox[i] =document.getElementById(opt_string);
}
var opt_radio = new Array(N_radio_ques);
for (let i = 0; i < N_radio_ques; i++){
    var opt_string = "radio" + (i+1);
    opt_radio[i] = document.getElementById(opt_string);
}

var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');


var score= new Array(N_namnder).fill(0);;
var quesindex=0;

function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	do_radio = Number.isInteger(questions[quesindex][1]);
	
	for (let i = 0; i < N_namnder; i++){
	    if(do_radio){
	        opt_checkbox[i].parentNode.style.display = 'none';
	    }
	    else{
	        opt_checkbox[i].parentNode.style.display = 'inline-block';
	    }
	    opt_checkbox[i].textContent=questions[quesindex][question_order[i]+1];

	}
	for (let i=0; i < N_radio_ques; i++){
	    if(!do_radio){
	        opt_radio[i].parentNode.style.display = 'none';
	    }
	    else{
	        opt_radio[i].parentNode.style.display = 'inline-block';
	    }
	    opt_radio[i].textContent="" + (i+1);
	 
	}

	 return;// body...
};
give_ques(0);
function nextques()
{
	var selected_ans= document.querySelectorAll('input:checked');
	if(selected_ans.length==0)
		{alert("Välj åtminstonde ett alternativ");return;}
	
	//beräkna score
	if(do_radio){
	    for (let i = 0; i < N_namnder; i++) {
 		if (questions[quesindex][i]==selected_ans[0].value){
 		    score[i]+=1/tques;
 		}
 		
	    }
	    selected_ans.item(0).checked=false;
	    
	}
	else{
	    for (let i = 0; i < selected_ans.length; i++) {
 		namnd_index = question_order[selected_ans.item(i).value];
		score[namnd_index]+=1/tques;
		selected_ans.item(i).checked=false;
	    } 
	
	}
	
	     quesindex++;
	     if(quesindex==tques-1)
	     	nextbutton.textContent="Avsluta";
	     if(quesindex==tques){
		  quiz.style.display='none';
		  result.style.display='';
		  var final_score="<b>Toppmatchning</b>: <br>";
		  var order = new Array(N_namnder);
		  var high_score = 0;
		  sorted_score = [...score].sort(function(a, b){return b-a})
		  for (let i = 0; i < N_namnder; i++){
		  	
		  	for (let j=0; j < N_namnder; j++){
		  		if (sorted_score[i]==score[j] && !(order.includes(j))){
		  			order[i] = j;
		  			break
		  		}
		  	}
		  }
		  for (let i = 0; i < N_namnder; i++) {
		  	if (sorted_score[i]!=0 && (i<N_resultat || sorted_score[i]==sorted_score[N_resultat-1])){
		  		final_score += namnder[order[i]] + ": " + (sorted_score[i].toFixed(2)*100) + "%<br>";
		  	}
		  }
		  
		  
		  result.innerHTML= final_score+sluttext;
            return;
	     }
	shuffle(question_order);
        give_ques(quesindex);

}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
	
  return array;
}



