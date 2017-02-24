// Binary clock exercise by Sara Remsen
// edited on 2/22/17

var exercise = {};

exercise.roman = function(time){

    var romanTime = {
        hour_col1 : Math.floor(time.getHours() / 10),
        hour_col2 : (time.getHours()) % 10,
        min_col1 : Math.floor(time.getMinutes() / 10),
        min_col2 : (time.getMinutes()) % 10,
        sec_col1 : Math.floor(time.getSeconds() / 10),
        sec_col2 : (time.getSeconds()) % 10,
    };

    return romanTime;

};

exercise.binary = function(time, col){

    var digits = exercise.roman(time);
    var digit = digits[col];

    // Set the default positions of the binary clock
    var binary = {
        position8 : 'off', 
        position4 : 'off', 
        position2 : 'off', 
        position1 : 'off', 
    };
    
    // Update the clock positions based on the unit time for the column
    if (digit >= 8) {
        binary.position8 = 'on';
        digit -= 8;
    }
    if (digit >= 4) {
        binary.position4 = 'on';
        digit -= 4;
    }
    if (digit >= 2) {
        binary.position2 = 'on';
        digit -= 2;
    }
    if (digit >= 1) {
        binary.position1 = 'on';
        digit -= 1;
    }
    
    return binary;

};