const input1=[1,1,1,1,1]
const input2=[2,2,2,2,2]

function FindPrime(input1,input2){

    const mergedArray=[...input1,...input2]
    let sum=0;
    for (let i = 0; i < mergedArray.length; i++) {
        
        sum=sum+mergedArray[i]
    }

    return `Sum of merged array is ${sum}`

}

console.log(FindPrime(input1,input2)) //output: Sum of merged array is 15