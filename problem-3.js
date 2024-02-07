
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'invalid input';
    }
    let newArray = [];
    for (let element of array) {
        if (typeof element === 'number') {
            newArray.push(element);
        }
    }
    return newArray;
}
const inputArray = [12, 'rahi', true, null, 'java', 101, 'script', 304, 'hello'];
deleteInvalids(inputArray);
