   // Store Random Number
   const randomNum = Math.ceil(Math.random() * 100);
   
   // for counting attempt initialize a value
   console.log(randomNum);
   let countGuessAttempt = 1;
   let btnClick = document.getElementById("submitButton");

   let result = document.getElementById("result");

   btnClick.addEventListener("click", function() {

       if(countGuessAttempt >= 6){    //as question requirement. 6 tries the most.
        document.getElementById("submitButton").style.visibility = 'hidden';
        alert("No more attempt left.")
       }

       let inputTextNum = document.getElementById("guessingNumber").value;
       let inputTextNumConvert = parseFloat(inputTextNum);


       if (randomNum == inputTextNumConvert) {
           alert("You got it right in " + countGuessAttempt + " tries!");
           document.getElementById("submitButton").style.visibility = 'hidden';
           document.getElementById("equal-num").innerText = inputTextNumConvert;

       } else if (randomNum < inputTextNumConvert) {

           if ((inputTextNumConvert - randomNum) <=25){   //if differnce between them is less than 25 than print little high
            result.innerHTML = "Wrong! Little High";
           }
           else{
            result.innerHTML = "Wrong! Too High";
           }

           countGuessAttempt++;
           document.getElementById("high-num").innerText = inputTextNumConvert;
           inputTextNum = document.getElementById("guessingNumber").value = "";

       } else if (randomNum > inputTextNumConvert) {

        if ((randomNum - inputTextNumConvert) <=25){   //if differnce between them is less than 25 than print little low
            result.innerHTML = "Wrong! Little Low";
           }
           else{
            result.innerHTML = "Wrong! Too Low";
           }

           countGuessAttempt++;
           document.getElementById("low-num").innerText = inputTextNumConvert;
           iinputTextNum = document.getElementById("guessingNumber").value = "";

        }

   });