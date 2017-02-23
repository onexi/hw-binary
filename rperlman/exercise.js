//Rachel Perlman

var exercise = {};


exercise.roman = function(time){
    var roman = {
        hour_col1: 0,
        hour_col2: 0,
        min_col1: 0,
        min_col2: 0,
        sec_col1: 0,
        sec_col2: 0
    };
    var hours = time.getHours();
    roman.hour_col1 = Math.floor(hours/10);
    roman.hour_col2 = hours % 10;


    var mins = time.getMinutes();
    roman.min_col1 = Math.floor(mins/10);
    roman.min_col2 = mins % 10;
    

    var secs = time.getSeconds();
    roman.sec_col1 = Math.floor(secs/10);
    roman.sec_col2 = secs % 10;

    return roman;
    
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
};

exercise.binary = function(time, col){
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
    if (time>=2){
        binary.position2 = 'on';
        time -=2;
    };
    if (time >=1){
        binary.position1 = 'on';
        time -=1;
    };

    return binary;

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

};