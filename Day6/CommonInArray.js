const input1=[0,1,2,3,4,5]
const input2=[5,4,3,2,1,0]


function FindCommon(input1,input2){

    let commons=[]

    for (let i = 0; i < input1.length; i++) {
        for (let j = 0; j < input2.length; j++) {

            if(input1[i]===input2[j]){
                commons.push(input1[i])
            }
        }
        
    }

    return ` commons elements are ${commons}`
}

console.log(FindCommon(input1,input2)) // output: commons elements are 0,1,2,3,4,5