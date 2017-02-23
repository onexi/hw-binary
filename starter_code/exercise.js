var exercise = {};


exercise.roman = function (time) {

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
    var hour = time.getHours();
    var hour_col2 = hour % 10;
    var hour_col1 = (hour - hour_col2) / 10;
    var min = time.getMinutes();
    var min_col2 = min % 10;
    var min_col1 = (min - min_col2) / 10;
    var sec = time.getSeconds();
    var sec_col2 = sec % 10;
    var sec_col1 = (sec - sec_col2) / 10;
    var romantime = {
        hour_col1,
        hour_col2,
        min_col1,
        min_col2,
        sec_col1,
        sec_col2
    };
    return romantime;
};


exercise.binary = function (time, col) {
    // time -> Date
    // col -> 'hour_col1', 'hour_col2', 'min_col1', 'min_col2' ..
    var binary = exercise.roman(time);
    var number = binary[col];

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
    /*
    */
    //console.log(col);
    var pos1='off';
    var pos2='off';
    var pos4='off';
    var pos8='off';

    if (number >= 8) {
        pos8 = 'on';
        number -= 8;
    } else {
        pos8 = 'off';
    }

    if (number >= 4) {
        pos4 = 'on';
        number -= 4;
    } else {
        pos4 = 'off';
    }

    if (number >= 2) {
        pos2 = 'on';
        number -= 2;
    } else {
        pos2 = 'off';
    }

    if (number >= 1) {
        pos1 = 'on';
        number -= 1;
    } else {
        pos1 = 'off';
    }

    var binary = {
        position8: pos8,
        position4: pos4,
        position2: pos2,
        position1: pos1
    };

    return binary;
};