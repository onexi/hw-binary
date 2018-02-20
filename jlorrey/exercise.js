// Jocelyn Lorrey 1.00 Pset 2 2/20/18
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
    hours   = String(exercise.time.getHours()); //make string for indexing
    minutes = String(exercise.time.getMinutes());
    seconds = String(exercise.time.getSeconds());
    
    var obj = {
        hour_col1 : 1 //Number(hours[0]), //index string, then make that value a number
        hour_col2 : 2 //Number(hours[1]),
        min_col1  : 3 //Number(minutes[0]), 
        min_col2  : 4 //Number(minutes[1]),
        sec_col1  : 5 //Number(seconds[0]), 
        sec_col2  : 6 //Number(seconds[1]),
    }
    return obj;
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