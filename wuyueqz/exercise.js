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
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var stamp = {
    hour_col1 : Math.floor(hour/10),
    hour_col2 : Math.floor(hour%10),
    min_col1 : Math.floor(min/10),
    min_col2 : Math.floor(min%10),
    sec_col1 : Math.floor(sec/10),
    sec_col2 : Math.floor(sec%10),
};
    return stamp;
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
    var stamp = exercise.roman(time);
    number = stamp[col];
    var binary = {
        position8 : 'off',
        position4 : 'off',
        position2 : 'off',
        position1 : 'off', 
    };
    if (number >= 8){
        binary.position8 = 'on';
        number -= 8;
    }
    if (number >= 4){
        binary.position4 = 'on';
        number -= 4;
    }
    if (number >= 2){
        binary.position2 = 'on';
        number -= 2;
    }
    if (number >= 1){
        binary.position1 = 'on';
        number -= 1;
    }
   return binary;

};