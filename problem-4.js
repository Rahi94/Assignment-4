

function password(obj) {
    if (obj.length < 2) {
        return 'invalid'
    }
    if (typeof obj.birthYear === 'number') {
        const birthYearString = obj.birthYear.toString();
        if (birthYearString.length !== 4) {
            return 'birth year should be 4 digit';
        }
    }

    if (obj.siteName === 'Google') {
        return 'Google#kolimuddin@1999'
    }
    else if (obj.siteName === 'Facebook') {
        return 'Facebook#rahat@2002'

    }
    else {
        return 'invalid input'
    }
}

const info = {
    name: 'kolimuddin',
    birthYear: 1999,
    siteName: 'Google'
}
const input = password(info);
console.log(input);