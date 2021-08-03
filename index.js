// Store Random Number
const randomNum = Math.ceil(Math.random() * 100);

let countGuessAttempt = 1;
let btnClick = document.getElementById("submitButton");

let result = document.getElementById("result");

let resultHistories = "<ul>";
let showHisoriesList = document.getElementById("show-pre-inputs");

btnClick.addEventListener("click", function () {

   if (countGuessAttempt >= 6) {    //as question requirement. 6 tries the most.
      btnClick.disabled = true;
      btnClick.textContent = "Disabled";
      alert("No more attempt left.")
   }

   let inputTextNum = document.getElementById("guessingNumber").value;
   let inputTextNumConvert = parseFloat(inputTextNum);

   if (randomNum == inputTextNumConvert) {
      alert("You got it right in " + countGuessAttempt + " tries!");
      btnClick.style.visibility = 'hidden';

   } else if (randomNum < inputTextNumConvert) {

      if ((inputTextNumConvert - randomNum) <= 25) {   //if differnce between them is less than 25 than print little high
         result.innerHTML = "Wrong! Little High";
      }
      else {
         result.innerHTML = "Wrong! Too High";
      }

      countGuessAttempt++;
      resultHistories += "<li>" + inputTextNumConvert +"</li>";

   } else if (randomNum > inputTextNumConvert) {

      if ((randomNum - inputTextNumConvert) <= 25) {   //if differnce between them is less than 25 than print little low
         result.innerHTML = "Wrong! Little Low";
      }
      else {
         result.innerHTML = "Wrong! Too Low";
      }

      countGuessAttempt++;
      resultHistories += "<li>" + inputTextNumConvert +"</li>";
   }

   showHisoriesList.innerHTML = resultHistories;
});