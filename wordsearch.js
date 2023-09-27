const transpose = require('./matrix_transposition');



const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        console.log('please enter a matrix');
        return false;
    }
    
    if (typeof (word) !== 'string' || word.length === 0) {
        console.log('please give a valid word');
        return false;
    }
    
    const transMatrix = transpose(letters);
    if (checkingHorizontal(letters, word) || checkingHorizontal(transMatrix, word)) {
        return true;
    }
    return false;
}

const checkingHorizontal = (matrix, wd) => {
    const horizontalJoin = matrix.map((ls) => ls.join("")); // HORIZONTALjOIN = ['AWCFQUAL', 'seinfeld', 'yfcfqual', .....]; loop this array.
    for (l of horizontalJoin) {
      if (!l.includes(wd)) {
        continue;
      }
      return true;
    }
    return false;
}
    


module.exports = wordSearch;


// Implementing the function for transpose. 1hr spent. Pairing with @Daniel