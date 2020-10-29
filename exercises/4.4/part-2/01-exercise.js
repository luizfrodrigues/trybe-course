function verificaPalindrome (string) {
    let backword = string.split("").reverse().join("")
    if (backword == string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'))

function verificaPalindrome(string) {
    let backword = "";
    for (let i = string.length -1; i >= 0; i -= 1) {
        backword += string[i];
    }
    if (string == backword) {
        return true;
    } else {
        return false;
    }
}


console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'))
