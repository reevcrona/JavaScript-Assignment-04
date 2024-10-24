



function guessNumberGame(){
    let myPrompt = prompt("Guess what number im thining off 1-10");
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumber)
    let promptNumber = Number(myPrompt)
    while(promptNumber !== randomNumber){
        if(promptNumber > randomNumber){
            myPrompt = prompt("thats too high try again")
        }else if (promptNumber < randomNumber){
            myPrompt = prompt("thats too low try again");
        }
        promptNumber = Number(myPrompt); 
   }
   alert(`Nice that is correct i was thining of ${promptNumber}`)
}


guessNumberGame();