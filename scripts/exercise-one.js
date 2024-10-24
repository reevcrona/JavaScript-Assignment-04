



function guessNumberGame(){
    let myPrompt = prompt("Can you guess the number I'm thinking of between 1 and 10?");
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    
    let promptNumber = Number(myPrompt)
    while(promptNumber !== randomNumber){
        if(promptNumber > randomNumber){
            myPrompt = prompt("That's too high, try again.")
        }else if (promptNumber < randomNumber){
            myPrompt = prompt("That's too low, try again.");
        }
        promptNumber = Number(myPrompt); 
   }
   alert(`You got it correct i was thinking of ${promptNumber}`)
}


guessNumberGame();