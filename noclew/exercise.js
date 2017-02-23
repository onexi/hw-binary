var exercise = {};


exercise.roman = function (time) {

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

    //-------------------------------------
    return {
        hour_col1: Number(Math.floor(time.getHours() / 10)),
        hour_col2: Number(time.getHours() % 10),
        min_col1: Number(Math.floor(time.getMinutes() / 10)),
        min_col2: Number(time.getMinutes() % 10),
        sec_col1: Number(Math.floor(time.getSeconds() / 10)),
        sec_col2: Number(time.getSeconds() % 10)
    };
};


exercise.binary = function (time, col) {

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

    var binary = {};
    if (col === 'hour_col1') var myDigit = Number(Math.floor(time.getHours() / 10));
    else if (col === 'hour_col2') var myDigit = Number(time.getHours() % 10);
    else if (col === 'min_col1') var myDigit = Number(Math.floor(time.getMinutes() / 10));
    else if (col === 'min_col2') var myDigit = Number(time.getMinutes() % 10);
    else if (col === 'sec_col1') var myDigit = Number(Math.floor(time.getSeconds() / 10));
    else if (col === 'sec_col2') var myDigit = Number(time.getSeconds() % 10);

    
    //myDigit = time;
    if ((col !== 'hour_col1') && (col !== 'min_col1') && (col !== 'sec_col1')) {
        if (myDigit >= 8) {
            binary.position8 = 'on';
            myDigit -= 8;
        }
        else { binary.position8 = 'off'; }
    }

    if ((col !== 'hour_col1')) {
        if (myDigit >= 4) {
            binary.position4 = 'on';
            myDigit -= 4;
        }
        else binary.position4 = 'off';
    }

    if (myDigit >= 2) {
        binary.position2 = 'on';
        myDigit -= 2;
    }
    else binary.position2 = 'off';

    if (myDigit == 1) {
        binary.position1 = 'on';
        myDigit -= 1;
    }
    else binary.position1 = 'off';

    
    return binary;

};

