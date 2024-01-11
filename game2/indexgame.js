const answer =Math.floor(Math.random()* 10 +1);
let guesses= 0;
document.getElementById("submitbtn").onclick=function(){
    let guess = document.getElementById("guessword").value 
  guesses +=1;

   if (guess == answer){
    alert(`${answer} is the # . It took you ${guesses} guess to get it .`)
   }
   else if ( guess < answer) {
    alert("Hello!")
   }
   else{
    alert ("too large!")
   }
}