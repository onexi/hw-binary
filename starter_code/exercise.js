var exercise = {};


exercise.roman = function(time){
    var hours = time.getHours().toString().padStart(2,0);
    var minutes = time.getMinutes().toString().padStart(2,0);
    var seconds = time.getSeconds().toString().padStart(2,0);

    return {
        hour_col1 : hours[0],
        hour_col2 : hours[1],
        min_col1  : minutes[0],
        min_col2  : minutes[1],
        sec_col1  : seconds[0],
        sec_col2  : seconds[1]
    };
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