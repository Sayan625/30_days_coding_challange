const input=[0,1,2,1,4,5]
const key=1;

function findKey(input){

    for (let i = 0; i < input.length; i++) {
        if(input[i]===key)
        return `the ${key} first found at index ${i}`        
    }

}

console.log(findKey(input))