const input=[1,2,2,2,2,2,2]

function FindElement(input){

    const sortedArray=sort(input)

    let element=[]

    for (let i = 0; i < sortedArray.length; i++) {
        let count=0
        for (let j = 0; j < sortedArray.length; j++) {
            
            if(sortedArray[i]==sortedArray[j]){

                count++
            }
        }

        if(count===1)
        element.push(sortedArray[i])
    }

    return `${element} appears once in sorted array` //output: 1 appears once in sorted array
}



function sort(input){

    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < input.length; i++) {
            if (input[i - 1] > input[i]) {
                done = false;
                let temp = input[i - 1];
                input[i - 1] = input[i];
                input[i] = temp;
            }
        }
    }
  
    return input

}

console.log(FindElement(input))