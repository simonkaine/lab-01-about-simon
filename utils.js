export function isYes(word) {
    // logic to determine if user input should count as a yes
    // should return a true or false

    word = word.toLowerCase();

    if (word === 'yes' || word === 'Yes' || word === 'y') {
        return true;
    } else {
        return false;
    }
}