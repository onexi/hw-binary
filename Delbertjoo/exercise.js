var exercise = {};


exercise.roman = function(time){
    var roman = {
        hour_col1: 0,
        hour_col2: 0,
        min_col1: 0,
        min_col2: 0,
        sec_col1: 0,
        sec_col2: 0,
    };

    hour = time.getHours();
        if(hour<10){
        exercise.roman.hour_col1 = 0;
        exercise.roman.hour_col2 = hour.toString()[0];
        }
        else{
        exercise.roman.hour_col1 = hour.toString()[0];
        exercise.roman.hour_col2 = hour.toString()[1];
        }

    min = time.getMinutes();
        if(min<10){
        exercise.roman.min_col1 = 0;
        exercise.roman.min_col2 = min.toString()[0];
        }
        else{
        exercise.roman.min_col1 = min.toString()[0];
        exercise.roman.min_col2 = min.toString()[1];
        }

    
    sec = time.getSeconds();
        if(sec<10){
        exercise.roman.sec_col1 = 0;
        exercise.roman.sec_col2 = sec.toString()[0];
        }
        else{
        exercise.roman.sec_col1 = sec.toString()[0];
        exercise.roman.sec_col2 = sec.toString()[1];
        }


    

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