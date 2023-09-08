const input=[1,2,5,4,0]

function EvenOdd(input){

    let even=[]
    let odd=[]
    let count=0

    for (let i = 0; i < input.length; i++) {
        if(input[i]===0){
            count++
        }
        else if(input[i]%2 == 0){
            even.push(input[i])
        }else{
            odd.push(input[i])
        }
        
    }

    return `Even numbers are ${even} ,Odd numbers are ${odd} and number of Zeros is ${count}`
}

console.log(EvenOdd(input)) //output: Even numbers are 2,4 ,Odd numbers are 1,5 and number of Zeros is 1