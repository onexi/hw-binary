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

    var hours   = ("00" + time.getHours()).slice(-2), 
        minutes = ("00" + time.getMinutes()).slice(-2),
        seconds = ("00" + time.getSeconds()).slice(-2);


    //convert sub-time strings to labeled column strings
    return {
        hour_col1 : hours.slice(0,1),
        hour_col2 : hours.slice(1,2),
        min_col1  : minutes.slice(0,1),
        min_col2  : minutes.slice(1,2),
        sec_col1  : seconds.slice(0,1),
        sec_col2  : seconds.slice(1,2)
    };

    // var hours = Number(time.slice(0,2));
    // var mins = Number(time.slice(3,5));
    // var secs = Number(time.slice(6,8));
    // var ampm = time.slice(9,11);

    // //check for midnight
    // if (ampm == 'AM' && hours  == 12){
    //     hours -= 12;
    // } else if (ampm == 'PM' && hours != 12){
    //     hours += 12;
    // };
    
    // return {
    //     hour_col1   : parseInt(hours/10),
    //     hour_col2   : hours % 10,
    //     min_col1    : parseInt(mins/10),
    //     min_col2    : mins % 10,
    //     sec_col1    : parseInt(secs/10),
    //     sec_col2    : secs % 10       
    // };
};

exercise.binary = function(time, col){

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    }; 
    // 
    //----------------------------------------------------------
    var hours   = ("00" + time.getHours()).slice(-2), 
        minutes = ("00" + time.getMinutes()).slice(-2),
        seconds = ("00" + time.getSeconds()).slice(-2);

    //convert sub-time strings to labeled column strings
    var hour_col1 = hours.slice(0,1),
        hour_col2 = hours.slice(1,2),
        min_col1  = minutes.slice(0,1),
        min_col2  = minutes.slice(1,2),
        sec_col1  = seconds.slice(0,1),
        sec_col2  = seconds.slice(1,2);

    // eval() converts the string to javascript CODE
    // in this case it's a variable name that matches what
    // was defined above.
    var numberToConvert = eval(col);

    var position8 = 'off',
        position4 = 'off',
        position2 = 'off',
        position1 = 'off';

    while (numberToConvert >> 0){
        if (exercise.positioner(numberToConvert, 8) == 8){
            position8 = 'on';
            numberToConvert -= 8;
        } else if (exercise.positioner(numberToConvert, 4) == 4){
            position4 = 'on';
            numberToConvert -= 4;
        } else if (exercise.positioner(numberToConvert, 2) == 2){
            position2 = 'on';
            numberToConvert -= 2;
        } else if (exercise.positioner(numberToConvert, 1) == 1){
            position1 = 'on';
            numberToConvert -= 1;
        }
    }

    var binary = {
        position8 : position8,
        position4 : position4,
        position2 : position2,
        position1 : position1
    };
    return binary;
};

// added this function
exercise.positioner = function(num, binValue){
    // given an int < 10 and a binary value (1, 2, 4, or 8)
    // against which to compare, return the greater
    // of the two numbers.
    if (num >= binValue) {
        return binValue;
    } else {return num;}
};