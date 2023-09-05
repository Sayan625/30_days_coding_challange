const input=[1,2,5,4,0]

function evenOdd(input){

    let even=[]
    let odd=[]

    for (let i = 0; i < input.length; i++) {
        if(input[i]%2===0)
        even.push(input[i])
        else
        odd.push(input[i])
        
    }

    return `Even numbers are ${even} & odd numbers are ${odd}`
}

console.log(evenOdd(input))