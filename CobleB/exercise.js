var exercise = {};


exercise.roman = function(time){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------

    var digits = {
        hour_col1 : Math.floor(time.getHours() / 10),
        hour_col2 : (time.getHours() % 10),
        min_col1  : Math.floor(time.getMinutes() / 10),
        min_col2  : (time.getMinutes() % 10),
        sec_col1  : Math.floor(time.getSeconds() / 10),
        sec_col2  : (time.getSeconds() % 10)
    };

    return digits;


};

exercise.binary = function(time, col){
  // col = 'string' -> 'hour_col1', 'hour_col2' ...
  // time -> Date

    var digits = exercise.roman(time);

    var digit = digits[col];

    var binary = {position8 : 'off', position4: 'off', position2: 'off', position1: 'off'};

    if(digit >= 8) {
        binary.position8 = 'on'
        digit -= 8
    } 
    else {
        binary.position8 = 'off'
    };
    if(digit >= 4) {binary.position4 = 'on'
        digit -= 4}
        else{binary.position4 = 'off'};
    if(digit >= 2) {binary.position2 = 'on'
        digit -= 2}
        else{binary.position2 = 'off'};
    if(digit >= 1) {binary.position1 = 'on'
        digit -= 1}
        else{binary.position1 = 'off'};

    return binary;

};