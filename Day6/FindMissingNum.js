const input=[0,1,2,6,4,5]

function FindMissingNum(input){

    let missingNum=[]

    for (let i = 0; i < input.length; i++) {
        if(input[i+1]!=input[i]+1){
            missingNum.push(input[i]+1)
        }
        
    }

    return `the missing numbers are ${missingNum}`
}

console.log(FindMissingNum(input)) //output: the missing numbers are 3,7,6