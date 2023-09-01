//input
const input=[0,1,2,3,4,5]

// operating function

function reverse(input){

    let tempArray=[];

    for (let i = 0; i < input.length; i++) {
        tempArray[input.length -1-i]=input[i]
        
    }

    return tempArray;
}

//output
console.log(reverse((input)))