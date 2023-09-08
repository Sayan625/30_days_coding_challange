const input1=[1,1,1,1,1]
const input2=[2,2,2,2,2]

function FindPrime(input1,input2){

    const mergedArray=[...input1,...input2]
    
    let primes=[]

    for (let i = 0; i < mergedArray.length; i++) {
        
        if(mergedArray[i]!=mergedArray[i+1]){

            if(prime(mergedArray[i])){
             primes.push(mergedArray[i])
            } 
        }
        
    }
    return `Prime numbers in the merged array is ${primes}`

}

function prime(n){

    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
 
    return n;
}

console.log(FindPrime(input1,input2)) //output: Prime numbers in the merged array is 1,2,3