const input=[0,1,2,3,4,5]

function ArraySum(input){

    let sum=0;
    for (let i = 0; i < input.length; i++) {
        
        sum=sum+input[i]
        
    }

    return `sum of the array is ${sum}`
}

console.log(ArraySum(input)) //output: sum of the array is 15