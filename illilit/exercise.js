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

};

exercise.binary = function(time, col){
   //var time2= new Date();
   //time2.
    var hrs = time.getHours();
   var hrs_string =  String(hrs);

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

//----------------------------------------------------------
    var binary0 = {
        position8: 'off',
        position4: 'off',
        position2: 'off',
        position1: 'off',
    }

    var binary1 = {
        position8: 'off',
        position4: 'off',
        position2: 'off',
        position1: 'on',
    }

    var binary2 = {
        position8: 'off',
        position4: 'off',
        position2: 'on',
        position1: 'off',
    }

    var binary3 = {
        position8: 'off',
        position4: 'off',
        position2: 'on',
        position1: 'on',
    }

    var binary4 = {
        position8: 'off',
        position4: 'on',
        position2: 'off',
        position1: 'off',
    }

    var binary5 = {
        position8: 'off',
        position4: 'on',
        position2: 'off',
        position1: 'on',
    }

    var binary6 = {
        position8: 'off',
        position4: 'on',
        position2: 'on',
        position1: 'off',
    }

    var binary7 = {
        position8: 'off',
        position4: 'on',
        position2: 'on',
        position1: 'on',
    }

    var binary8 = {
        position8: 'on',
        position4: 'off',
        position2: 'off',
        position1: 'off',
    }

    var binary9 = {
        position8: 'on',
        position4: 'off',
        position2: 'off',
        position1: 'on',
    }

    var binary=[binary0,binary1,binary2,binary3,binary4,binary5,binary6,binary7,binary8,binary9];
//----------------------------------------------------------






};