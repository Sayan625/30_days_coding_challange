const input1=[0,1,2,3,4,5]
const input2=[5,4,3,2,1,0]

function Merge(input1,input2){

    let mergedArray=[]

    mergedArray=[...input1,...input2]

    return `merged array is [${mergedArray}]`


}

console.log(Merge(input1,input2))//output: merged array is [0,1,2,3,4,5,5,4,3,2,1,0]