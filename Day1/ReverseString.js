//input
const input="abc"

// operating function
function reverse(input){

    let tempString="";

    for (let i = input.length-1; i > -1; i--) {
        tempString+=input[i]
        
    }

    return tempString;
}

//output
console.log(reverse((input)))