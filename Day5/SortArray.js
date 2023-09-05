const input=[5,4,2,3,1,0]

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
  
    return `sorted array is ${input}`;

}

console.log(sort(input))