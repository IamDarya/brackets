module.exports = function check(str, bracketsConfig) {
    let arrayOfBrackets = Array.from(String(str));
    let emptyArr = [];
    let brConfCalc = 0;
    for (let i = 0; i < arrayOfBrackets.length; i++) {
        while (brConfCalc < bracketsConfig.length) {
            if (arrayOfBrackets[i] === bracketsConfig[brConfCalc][0]) {
                if (bracketsConfig[brConfCalc][0] === bracketsConfig[brConfCalc][1]) {
                    if (emptyArr.length > 0 && emptyArr[emptyArr.length - 1] === bracketsConfig[brConfCalc][0]) {
                        emptyArr.pop();
                    } else {
                        emptyArr.push(arrayOfBrackets[i]);
                    }
                } else {
                    emptyArr.push(arrayOfBrackets[i]);
                }
            } else if (arrayOfBrackets[i] === bracketsConfig[brConfCalc][1]) {
                let lastPop = emptyArr.pop();
                if (bracketsConfig[brConfCalc][0] !== lastPop) {
                    return false;
                }
            }
            brConfCalc++;
        }
        brConfCalc = 0;
    }
    if (emptyArr.length > 0) {
        return false
    }
    return true;
}
