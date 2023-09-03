var input1 = [0, 1, 2, 3, 4, 5];
var input2 = [0, 1, 2, 3, 4, 5];

function checkEquality(input1, input2) {
    for (let i = 0; i < input1.length; i++) {
        for (let i = 0; i < input2.length; i++) {
            if (input1[i] !== input2[i]) {
                return `inputs are not equals`;
            }
        }
    }
    return `inputs are equals`;
}
console.log(checkEquality(input1, input2));
