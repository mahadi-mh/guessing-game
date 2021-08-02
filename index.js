   // Store Random Number
   const randomNum = Math.ceil(Math.random() * 100);
   // for counting attempt initialize a value
   var countGuessAttempt = 1;
   console.log(randomNum);
   var btnClick = document.getElementById("submitButton");
   btnClick.addEventListener("click", function() {
       var inputTextNum = document.getElementById("guessingNumber").value;
       var inputTextNumConvert = parseFloat(inputTextNum);
       alert(inputTextNumConvert);

       if (randomNum == inputTextNumConvert) {
           alert("You got it right in " + countGuessAttempt + " tries!");
           document.getElementById("submitButton").style.visibility = 'hidden';
           document.getElementById("equal-num").innerText = inputTextNumConvert;

       } else if (randomNum < inputTextNumConvert) {
           alert("Wrong! Too Long");
           countGuessAttempt++;
           document.getElementById("high-num").innerText = inputTextNumConvert;
           inputTextNum = document.getElementById("guessingNumber").value = "";

       } else if (randomNum > inputTextNumConvert) {
           alert("Wrong! Low");
           countGuessAttempt++;
           document.getElementById("low-num").innerText = inputTextNumConvert;
           iinputTextNum = document.getElementById("guessingNumber").value = "";

       }

   });