var exercise = {};


exercise.roman = function(time){

    return { 
        hour_col1 : Math.floor(time.getHours() / 10), 
        hour_col2 : time.getHours() % 10,
        min_col1  : Math.floor(time.getMinutes() / 10),
        min_col2  : time.getMinutes() % 10,
        sec_col1  : Math.floor(time.getSeconds() / 10),
        sec_col2  : time.getSeconds() % 10
    };

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
    var rom = exercise.roman(time);
    var n = rom[col];
    var o = {};

    if(n % 2)                       {o.position1 = 'on'}else{o.position1 = 'off'}
    if(n===2||n===3||n===6||n===7)  {o.position2 = 'on'}else{o.position2 = 'off'}
    if(n>=4&&n<8)                   {o.position4 = 'on'}else{o.position4 = 'off'}
    if(n>=8)                        {o.position8 = 'on'}else{o.position8 = 'off'}
    return o; 
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