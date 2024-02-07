
function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }
    let lastCharacter = name.charAt(name.length - 1);
    let alphabets = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    for (let character of alphabets) {
        if (lastCharacter.toLowerCase() == character) {
            return 'good name';
        }
    }
    return 'bad name';
}
const input = checkName('ohi');


