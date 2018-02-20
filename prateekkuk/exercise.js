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
    var binary = {}
    var timeString = "";
    switch(col){
        case "col1":
            timeString = time.charAt(0);
        break;
        case "col2":
            timeString = time.charAt(1);
        break;
        case "col3":
            timeString = time.charAt(3); //skipping the :
        break;
        case "col4":
            timeString = time.charAt(4);
        break;
        case "col5":
            timeString = time.charAt(6);
        break;
        case "col6":
            timeString = time.charAt(7);
        default:
            console.log("default case in col picker");
    }
    switch(timeString){
        case "0": 
            binary.position8 =  'off'; 
            binary.position4 =  'off';
            binary.position2 =  'off';
            binary.position1 =  'off';
        break;
        case "1":
            binary.position8 =  'off'; 
            binary.position4 =  'off';
            binary.position2 =  'off';
            binary.position1 =  'on';
            document.getElementById("hour_"+col+"_pos1").style.background = "red";
        break;
        case "2":
            binary.position8 =  'off'; 
            binary.position4 =  'off';
            binary.position2 =  'on';
            binary.position1 =  'off';
            document.getElementById("hour_"+col+"_pos2").style.background = "red";
        break;
        case "3":
        break;
        case "4":
        break;
        case "5":
        break;
        case "6":
        break;
        case "7":
        break;
        case "8":
        break;
        case "9":
        break;
    }
    return binary;
};