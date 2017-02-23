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
    str_time = String(time);
    str_list = str_time.split(" ");
    time = str_list[4];

    return {  
        hour_col1 : parseInt(time[0]),
        hour_col2 : parseInt(time[1]),
        min_col1 : parseInt(time[3]),
        min_col2 : parseInt(time[4]),
        sec_col1 : parseInt(time[6]),
        sec_col2 : parseInt(time[7]) 
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

    str_time = String(time);
    str_list = str_time.split(" ");
    time = str_list[4];
    hour_1 = time[0];
    hour_2 = time[1];
    min_1 = time[3];
    min_2 = time[4];
    sec_1 = time[6];
    sec_2 = time[7];

    if (col == 'hour_col1'){
        var binary = {position8: 'off', position4:'off', position2: 'off', position1: 'off'};
        if (hour_1 == 2){
            binary.position2 = "on";
        } else if (hour_1 == 1) {
            binary.position1 = "on";

        }

    } else if (col == 'hour_col2'){
        var binary = {position8: 'off', position4: 'off', position2: 'off', position1: 'off'};

        if (hour_2 >= 8){
            hour_2 -= 8;
            binary.position8 = "on";
        }
        if (hour_2 >= 4){
            hour_2 -= 4;
            binary.position4 = "on";
        }
        if (hour_2 >= 2){
            hour_2 -= 2;
            binary.position2 = "on";
        }
        if (hour_2 >= 1){
            binary.position1 = "on";
        }
    } else if (col == 'min_col1'){
        var binary = {position8: 'off', position4: 'off', position2: 'off', position1: 'off'};

        if (min_1>= 4){
            min_1 -= 4;
            binary.position4 = "on";
        }
        if (min_1 >= 2){
            min_1 -= 2;
            binary.position2 = "on";
        }
        if (min_1 >= 1){
            binary.position1 = "on";
        }

    } else if (col == 'min_col2'){
        var binary = {position8: 'off', position4: 'off', position2: 'off', position1: 'off'};

        if (min_2 >= 8){
            min_2 -= 8;
            binary.position8 = "on";
        }
        if (min_2 >= 4){
            min_2 -= 4;
            binary.position4 = "on";
        }
        if (min_2 >= 2){
            min_2 -= 2;
            binary.position2 = "on";
        }
        if (min_2 >= 1){
            binary.position1 = "on";
        }
    } else if (col == 'sec_col1'){
        var binary = {position8: 'off', position4: 'off', position2: 'off', position1: 'off'};

        if (sec_1>= 4){
            sec_1 -= 4;
            binary.position4 = "on";
        }
        if (sec_1 >= 2){
            sec_1 -= 2;
            binary.position2 = "on";
        }
        if (sec_1 >= 1){
            binary.position1 = "on";
        }

    } else if (col == 'sec_col2'){
        var binary = {position8: 'off', position4: 'off', position2: 'off', position1: 'off'};

        if (sec_2 >= 8){
            sec_2 -= 8;
            binary.position8 = "on";
        }
        if (sec_2 >= 4){
            sec_2 -= 4;
            binary.position4 = "on";
        }
        if (sec_2 >= 2){
            sec_2 -= 2;
            binary.position2 = "on";
        }
        if (sec_2 >= 1){
            binary.position1 = "on";
        }
    }
    return binary;
};