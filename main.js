let button = document.querySelector(".testButton");
let number = document.querySelector(".numberInput");
let textBox = document.querySelector(".textBox");

function isItPrime(n){
    let factors = 0; //Count of factors.
    let factorsArray = []; //Storing factors for if not prime.
    for(i=0; i<=n; i++){
        if(n%i === 0){ //Checking if there's a remainder, if not then it's a factor.
            factors = factors+1 //Increases the factor count.
            factorsArray.push(i)//Adds factor to array.
        }
    }
    if (factors === 2){ 
        //If factors is exactly two then only one 
        //and the number itself divide into it.
        console.log("prime")
        return true;
    } else if (factors !== 2) {
        //If it is less than or more than two then it isn't a prime number.
        console.log("not prime")
        return false;
    }
}

function updatePage(n){
    console.log(n)
    if(isItPrime(n) === true){
        textBox.innerText = `${n} is Prime!`;
    } else if (isItPrime(n) === false){
        textBox.innerText = `${n} is not Prime!`
    }
};


button.addEventListener("click", ()=>{updatePage(number.value)});
// isItPrime(10)
// isItPrime(13)
// isItPrime(144)
// isItPrime(1237)
