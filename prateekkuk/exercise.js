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
    document.getElementById("hour_col1_roman").innerHTML = time.charAt(0);
    document.getElementById("hour_col2_roman").innerHTML = time.charAt(1);
    document.getElementById("min_col3_roman").innerHTML = time.charAt(3);
    document.getElementById("min_col4_roman").innerHTML = time.charAt(4);
    document.getElementById("sec_col5_roman").innerHTML = time.charAt(6);
    document.getElementById("sec_col6_roman").innerHTML = time.charAt(7);




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
        case "hour_col1":
            timeString = time.charAt(0);
        break;
        case "hour_col2":
            timeString = time.charAt(1);
        break;
        case "min_col1":
            timeString = time.charAt(3); //skipping the :
        break;
        case "min_col2":
            timeString = time.charAt(4);
        break;
        case "sec_col1":
            timeString = time.charAt(6);
        break;
        case "sec_col2":
            timeString = time.charAt(7);
        break;
        default:
            console.log(col +" :was sent instead");
    }
    switch(timeString){
        case "0": 
            binary.position8 =  'off'; 
            binary.position4 =  'off';
            binary.position2 =  'off';
            binary.position1 =  'off';
            // document.getElementById(col+"_pos8").style.background = "silver";
            // document.getElementById(col+"_pos4").style.background = "silver";
            // document.getElementById(col+"_pos2").style.background = "silver";
            // document.getElementById(col+"_pos1").style.background = "silver";
        break;
        case "1":
            binary.position8 =  'off'; 
            binary.position4 =  'off';
            binary.position2 =  'off';
            binary.position1 =  'on';
            // document.getElementById(col+"_pos8").style.background = "silver";
            // document.getElementById(col+"_pos4").style.background = "silver";
            // document.getElementById(col+"_pos2").style.background = "silver";
            // document.getElementById(col+"_pos1").style.background = "red";
        break;
        case "2":
            binary.position8 =  'off'; 
            binary.position4 =  'off';
            binary.position2 =  'on';
            binary.position1 =  'off';
            // document.getElementById(col+"_pos8").style.background = "silver";
            // document.getElementById(col+"_pos4").style.background = "silver";
            // document.getElementById(col+"_pos2").style.background = "red";
            // document.getElementById(col+"_pos1").style.background = "silver";
        break;
        case "3":
            binary.position8 =  'off'; 
            binary.position4 =  'off';
            binary.position2 =  'on';
            binary.position1 =  'on';
            // document.getElementById(col+"_pos8").style.background = "silver";
            // document.getElementById(col+"_pos4").style.background = "silver";
            // document.getElementById(col+"_pos2").style.background = "red";
            // document.getElementById(col+"_pos1").style.background = "red";
        break;
        case "4":
            binary.position8 =  'off'; 
            binary.position4 =  'on';
            binary.position2 =  'off';
            binary.position1 =  'off';
            // document.getElementById("hour_"+col+"_pos8").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos4").style.background = "red";
            // document.getElementById("hour_"+col+"_pos2").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos1").style.background = "silver";
        break;
        case "5":
            binary.position8 =  'off'; 
            binary.position4 =  'on';
            binary.position2 =  'off';
            binary.position1 =  'on';
            // document.getElementById("hour_"+col+"_pos8").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos4").style.background = "red";
            // document.getElementById("hour_"+col+"_pos2").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos1").style.background = "red";
        break;
        case "6":
            binary.position8 =  'off'; 
            binary.position4 =  'on';
            binary.position2 =  'on';
            binary.position1 =  'off';
            // document.getElementById("hour_"+col+"_pos8").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos4").style.background = "red";
            // document.getElementById("hour_"+col+"_pos2").style.background = "red";
            // document.getElementById("hour_"+col+"_pos1").style.background = "silver";
        break;
        case "7":
            binary.position8 =  'off'; 
            binary.position4 =  'on';
            binary.position2 =  'on';
            binary.position1 =  'on';
            // document.getElementById("hour_"+col+"_pos8").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos4").style.background = "red";
            // document.getElementById("hour_"+col+"_pos2").style.background = "red";
            // document.getElementById("hour_"+col+"_pos1").style.background = "red";
        break;
        case "8":
            binary.position8 =  'on'; 
            binary.position4 =  'off';
            binary.position2 =  'off';
            binary.position1 =  'off';
            // document.getElementById("hour_"+col+"_pos8").style.background = "red";
            // document.getElementById("hour_"+col+"_pos4").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos2").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos1").style.background = "silver";
        break;
        case "9":
            binary.position8 =  'on'; 
            binary.position4 =  'off';
            binary.position2 =  'off';
            binary.position1 =  'on';
            // document.getElementById("hour_"+col+"_pos8").style.background = "red";
            // document.getElementById("hour_"+col+"_pos4").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos2").style.background = "silver";
            // document.getElementById("hour_"+col+"_pos1").style.background = "red";
        break;
        default: console.log("error in converting to binary");
    }
    return binary;
};