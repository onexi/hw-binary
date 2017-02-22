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
    /*document.getElementById('txt').innerHTML = hour_col1;*/

    return romantime;
    
};


exercise.binary = function (time, col) {

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
    if (col >= 8) {
        position8 = 'on';
        col = col - 8;
    } else {
        position8 = 'off';
    }

    if (col >= 4) {
        position4 = 'on';
        col -= 4;
    } else {
        position4 = 'off';
    }
    if (col >= 2) {
        position2 = 'on';
        col -= 2;
    } else {
        position2 = 'off';
    }
    if (col >= 1) {
        position1 = 'on';
        col -= 1;
    } else {
        position1 = 'off';
    }
    var binary = {
        position8,
        position4,
        position2,
        position1,
    };
    return binary;

};