var exercise = {};


exercise.roman = function(time){
   
    function addZero(i){
        if (i<10){
            i = "0" + i;
        }
        return i;
    }

    var hours = addZero(time.getHours());
    var strHours = hours.toString();
    var min = addZero(time.getMinutes());
    var strMin = min.toString();
    var sec = addZero(time.getSeconds());
    var strSec = sec.toString();
    
    var objectTime = {
        hour_col1 : strHours[0],
        hour_col2 : strHours[1],
        min_col3 : strMin[0],
        min_col4 : strMin[1],
        sec_col5 : strSec[0],
        sec_col6 : strSec[1]
    };
    return objectTime;

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