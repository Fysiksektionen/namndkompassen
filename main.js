var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var tques=questions.length;
var N_namnder = namnder.length;
var opt = new Array(tques)
for (let i = 0; i < N_namnder; i++){
    var opt_string = "option" + (i+1);
    opt[i] =document.getElementById(opt_string);
}

var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');


var score= new Array(tques).fill(0);;
var quesindex=0;
function quit()
{         
	      quiz.style.display='none';
          result.style.display='';
          var f=score/tques;
          result.textContent="SCORE ="+f*100;
          q.style.display="none";
}
function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	for (let i = 0; i < N_namnder; i++){
    	    opt[i].textContent=questions[quesindex][i+1];
	}

	 return;// body...
};
give_ques(0);
function nextques()
{
	var selected_ans= document.querySelectorAll('input:checked');
	console.log(selected_ans);
	if(!selected_ans)
		{alert("Välj åtminstonde ett alternativ");return;}
	
	for (let i = 0; i < selected_ans.length; i++) {
 		namnd_index = selected_ans.item(i).value;
		score[namnd_index]+=1/tques;
		selected_ans.item(i).checked=false;
	} 
	
	     quesindex++;
	     if(quesindex==tques-1)
	     	nextbutton.textContent="Avsluta";
	     if(quesindex==tques)
	     {
	     q.style.display='none';
          quiz.style.display='none';
          result.style.display='';
          var final_score="<b>Resultat</b>: <br>";
          var order = new Array(N_namnder);
          var high_score = 0;
          sorted_score = [...score].sort(function(a, b){return b-a})
          for (let i = 0; i < N_namnder; i++){
          	
          	for (let j=0; i < N_namnder; j++){
          		if (sorted_score[i]==score[j] && !(order.includes(j))){
          			order[i] = j;
          			break
          		}
          	}
          }
          for (let i = 0; i < N_namnder; i++) {
          	
          	final_score += namnder[order[i]] + ": " + (sorted_score[i].toFixed(2)*100) + "%<br>";
          }
          result.innerHTML= final_score;
          console.log(final_score)
            return;
	     }
        give_ques(quesindex);

}
