const input=[1,2,5,4,0]
const key=0

function FindKey(input,key){

    for (let i = 0; i < input.length; i++) {
        if(input[i]===key){
            console.log(key);

            return `Key "${key}" is found at "${i}" th position of the array`;
        }        
    }
    return `Key  is not found`; 

}

console.log(FindKey(input,key));