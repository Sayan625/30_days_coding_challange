var input = [0, 1, 2, 3, 4, 5];
var key = 2;
function checkOcurrance(input, key) {
    let ocurrance = 0;
    let pos = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === key) {
            ocurrance++;
            pos.push(i);
        }
    }
    return `the key "${key}" is found ${ocurrance} times at positions ${pos.join()}`;
}
console.log(checkOcurrance(input, key));
