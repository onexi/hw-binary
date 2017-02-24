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
    var hours = ('0' + time.getHours()).slice(-2);
    var minutes = ('0' + time.getMinutes()).slice(-2);
    var seconds = ('0' + time.getSeconds()).slice(-2);
    var roman = {
        hour_col1 : hours[0],
        hour_col2 : hours[1],
        min_col1  : minutes[0],
        min_col2  : minutes[1],
        sec_col1  : seconds[0],
        sec_col2  : seconds[1]
    };
    return roman;
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
    var binary = {
        position8 : 'off',
        position4 : 'off',
        position2 : 'off',
        position1 : 'off'
    };
    if (exercise.roman(time)[col] === '1') {
        binary.position1 = 'on';
    } else if (exercise.roman(time)[col] === '2') {
        binary.position2 = 'on';
    } else if (exercise.roman(time)[col] === '3') {
        binary.position1 = 'on';
        binary.position2 = 'on';
    } else if (exercise.roman(time)[col] === '4') {
        binary.position4 = 'on';
    } else if (exercise.roman(time)[col] === '5') {
        binary.position1 = 'on';
        binary.position4 = 'on';
    } else if (exercise.roman(time)[col] === '6') {
        binary.position2 = 'on';
        binary.position4 = 'on';
    } else if (exercise.roman(time)[col] === '7') {
        binary.position1 = 'on';
        binary.position2 = 'on';
        binary.position4 = 'on';
    } else if (exercise.roman(time)[col] === '8') {
        binary.position8 = 'on';
    } else if (exercise.roman(time)[col] === '9') {
        binary.position1 = 'on';
        binary.position8 = 'on';
    }
    return binary;


};