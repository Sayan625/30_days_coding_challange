const input1=[0,1,2,3,4,5]
const input2=[5,4,3,2,1,0]

function MergedProduct(input1,input2){

    const mergedArray=[...input1,...input2]
    let product=1;
    for (let i = 0; i < mergedArray.length; i++) {
        
        product*=mergedArray[i]
    }

    return `Product of merged array is ${product}`

}

console.log(MergedProduct(input1,input2)) //output: Product of merged array is 0