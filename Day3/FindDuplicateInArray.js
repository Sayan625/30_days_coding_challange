var input = [0, 1, 2, ,3, 4, 5];

function checkDupllicate(input) {
    let duplicates = [];
    duplicates = input.filter((currentValue, currentIndex) => input.indexOf(currentValue) !== currentIndex);
    return duplicates.length > 0 ? `duplicate values are  "${duplicates.join()}"` : `no duplicates found`;
}
console.log(checkDupllicate(input));