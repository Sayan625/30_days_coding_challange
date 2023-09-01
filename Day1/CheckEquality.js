//inputs
const input1=[1,2,5,4,0]
const input2=[1,2,5,4,0]

// operating function
function check(input1, input2){

    let temp;
    if(input1.length!==input2.length)
    return temp=0;

    for (let i = 0; i < input1.length; i++) {
        for (let j = 0; j < input2.length; j++) {
            if(input1[i]!==input2[i]){
                temp=0;
                break;
            }
            else
            temp=1;  
        }
        
    }

    return temp;
}

//output
console.log(check(input1,input2))