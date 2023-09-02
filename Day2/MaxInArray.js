const input=[0,1,2,3,4,5];

function max(input){
    let tempNum
    tempNum=input.reduce((prev,cur)=>{
        return (cur>prev ? cur: prev);
    })

    return `Maximum element is ${tempNum}`;
}

console.log(max(input));
