// 1.001 Homework 2
//Author: Rachel Perlman

var exercise = {};

exercise.roman = function(time){
// return an object with roman time, time is eported using 6 columns
    var roman = {
        hour_col1: 0,
        hour_col2: 0,
        min_col1: 0,
        min_col2: 0,
        sec_col1: 0,
        sec_col2: 0
    };
    // parce hours into two digits
    var hours = time.getHours();
    roman.hour_col1 = Math.floor(hours/10);
    roman.hour_col2 = hours % 10;

    // parce minutes into two digits
    var mins = time.getMinutes();
    roman.min_col1 = Math.floor(mins/10);
    roman.min_col2 = mins % 10;
    
    // parce seconds into two digits
    var secs = time.getSeconds();
    roman.sec_col1 = Math.floor(secs/10);
    roman.sec_col2 = secs % 10;

    return roman;   

};

exercise.binary = function(time, col){
// Return an object with the binary clock values for the given column

// start with all block positions off
    var binary = {
        position8: 'off',
        position4: 'off',
        position2: 'off',
        position1: 'off',
    };

    if (time >= 8){
        binary.position8 = 'on';
        time -= 8;

    };
    if (time >= 4){
        binary.position4 = 'on';
        time -= 4;
    };
    if (time >=2){
        binary.position2 = 'on';
        time -=2;
    };
    if (time >=1){
        binary.position1 = 'on';
        time -=1;
    };

    return binary;

};