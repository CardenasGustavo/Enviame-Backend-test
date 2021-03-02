const palindrome = (word) => {
    for (var i = 0; i < word.length; i++) {
        if (word[i] != word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
};


var text = 'A foolish consistency is the hobgoblin of little minds adored by little statesmen and philosophers and divines With consistency a great soul has simply nothing to do He may as well concern himself with his shadow on the wall Speak what you think now in hard words and tomorrow speak what tomorrow thinks in hard words again though it contradict every thing you said today Ah so you shall be sure to be misunderstood Is it so bad then to be misunderstood Pythagoras was misunderstood and Socrates and Jesus and Luther and Copernicus and Galileo and Newton and every pure and wise spirit that ever took flesh To be great is to be misunderstood';
text = text.toLowerCase();
var arraytext = text.split(' ');

for (let i = 0; i < arraytext.length; i++) {
    if (palindrome(arraytext[i])) {
        console.log("Palindrome: ", arraytext[i]);
    }

}