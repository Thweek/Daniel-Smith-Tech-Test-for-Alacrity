// Test 1: Dividing by itself being zero
// function isItPrime(n){
//     if (n%n === 0){
//         console.log(`${n} divided by itself is prime`)
//     }
// }
// isItPrime(19)

function isItPrime(n){
    let factors = 0;
    for(i=0; i<=n; i++){
        if(n%i === 0){
            factors = factors+1
            console.log(`${n} has ${factors} factors.`)
        }
    }
}

isItPrime(10)

isItPrime(13)
