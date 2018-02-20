// Polyfill for Node.JS which has not implemented padStart()
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

var exercise = {};


exercise.roman = function(time){
    var hours = time.getHours().toString().padStart(2,0);
    var minutes = time.getMinutes().toString().padStart(2,0);
    var seconds = time.getSeconds().toString().padStart(2,0);

    return {
        hour_col1 : hours[0],
        hour_col2 : hours[1],
        min_col1  : minutes[0],
        min_col2  : minutes[1],
        sec_col1  : seconds[0],
        sec_col2  : seconds[1]
    };
};

exercise.binary = function(time, col){
    var romanFormatted = exercise.roman(time);
    var binaryRepr = parseInt(romanFormatted[col]).toString(2).padStart(4,0);
    var binary = {};
    var binaryKeys = ['position8', 'position4', 'position2', 'position1'];
    for (var i = 0; i <= binaryKeys.length - 1; i++) {
        binary[binaryKeys[i]] = (binaryRepr[i] == "1")?'on':'off';
    }
    return binary;
};