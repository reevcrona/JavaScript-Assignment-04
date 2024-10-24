
const userPrompt = prompt("How long do you want the Array to be ?");



function generateRandomArray(arrayLength){
    let randomArray = [];
    
    for(let i = 0; i < arrayLength; i++){
        let randomNumber = Math.floor((Math.random() * 100) + 1);

        randomArray.push(randomNumber);
    }

    return randomArray;
}

console.log(generateRandomArray(Number(userPrompt)))



function sumEvenNumbers(array){
    let sum = 0;

    for(let i = 0;  i < array.length; i++){
        if(array[i] % 2 == 0){
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumEvenNumbers((generateRandomArray(Number(userPrompt)))));
