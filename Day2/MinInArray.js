const input=[5,4,3,2,1,0];

function max(input){
    let tempNum
    tempNum=input.reduce((prev,cur)=>{
        return (cur<prev ? cur: prev);
    })

    return `Minimum element is ${tempNum}`;
}

console.log(max(input));
