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

    // Get the padded times object
    var paddedTimes = exercise.padTimes(time);

    // Create an array to hold the individual digits
    var colsRoman = [];

    // Add the correct elements into the array
    colsRoman.push(paddedTimes.hours[0]);
    colsRoman.push(paddedTimes.hours[1]);
    colsRoman.push(paddedTimes.minutes[0]);
    colsRoman.push(paddedTimes.minutes[1]);
    colsRoman.push(paddedTimes.seconds[0]);
    colsRoman.push(paddedTimes.seconds[1]);

    // Return the roman time columns
    return colsRoman;
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

    // Get the padded times object
    var paddedTimes = exercise.padTimes(time);

    // Initialize a variable to store the time in binary
    var binaryTime = '';

    // Create the padded binary times depending on the column
    if (col == 0) {
        // Column 0 has 2 entries
        var colLen = 2;
        var zeroString = '00';

        // First column is first hours digit
        binaryTime = binaryTime + Number(paddedTimes.hours[0]).toString(2);

    } else if (col == 2 || col == 4) {
        // Columns 2 and 4 have 3 entries
        var colLen = 3;
        var zeroString = '000';

        // Choose between minutes or seconds
        if (col == 2) {
            // Third column is first minutess digit
            binaryTime = binaryTime + Number(paddedTimes.minutes[0]).toString(2);
        } else if (col == 4) {
            // Fifth column is first seconds digit
            binaryTime = binaryTime + Number(paddedTimes.seconds[0]).toString(2);
        }

    } else if (col == 1 || col == 3 || col == 5) {
        // Columns 1, 3, and 5 have 4 entries
        var colLen = 4;
        var zeroString = '0000';

        // Choose between hours, minutes, or seconds
        if (col == 1) {
            // Second column is second hours digit
            binaryTime = binaryTime + Number(paddedTimes.hours[1]).toString(2);
        } else if (col == 3) {
            // Fourth column is second minutes digit
            binaryTime = binaryTime + Number(paddedTimes.minutes[1]).toString(2);
        } else if (col == 5) {
            // Sixth column is second seconds digit
            binaryTime = binaryTime + Number(paddedTimes.seconds[1]).toString(2);
        }

    }  else {
        // Incorrect column number was inputted somehow
        console.log('Invalid column number');
    }

    // Appropriately pad the binary time to the correct length
    var paddedColumnTime = zeroString.substring((binaryTime + "").length, colLen) + binaryTime;

    // Create the binary object to return
    var binary = {col: col, 
        colLen: colLen, 
        binaryCol: paddedColumnTime,
        binaryColStr: []};

    // Iterate through the column time to set on and off for entries
    for (var i = 0; i < paddedColumnTime.length; i++) {
        // Set the on and off string for each entry
        if (paddedColumnTime[i] == 0) {
            binary.binaryColStr.push('off');
        } else if (paddedColumnTime[i] == 1) {
            binary.binaryColStr.push('on');
        }
    }

    // Return the binary object
    return binary
};

exercise.padTimes = function(time) {
    // Create individual strings
    var hours = time.getHours()+'';
    var minutes = time.getMinutes()+'';
    var seconds = time.getSeconds()+'';

    // Pad the time strings to make them 2 digits long
    var zeroStringRaw = '00';

    // Hours string padding
    var paddedHours = zeroStringRaw.substring((hours + "").length, 2) + hours;

    // Minutes string padding
    var paddedMinutes = zeroStringRaw.substring((minutes + "").length, 2) + minutes;

    // Seconds string padding
    var paddedSeconds = zeroStringRaw.substring((seconds + "").length, 2) + seconds;

    // Output object
    return {hours: paddedHours, 
        minutes: paddedMinutes,
        seconds: paddedSeconds};
};