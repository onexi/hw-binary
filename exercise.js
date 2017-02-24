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

    var hr = time.getHours();
    var mn = time.getMinutes();
    var se = time.getSeconds();
    
    var hr1 = (hr-(hr%10))/10;
    var hr2 = hr%10;
    var mn1 = (mn-(mn%10))/10;
    var mn2 = mn%10;
    var se1 = (se-(se%10))/10;
    var se2 = se%10;

    return {
        "hr1": hr1,
        "hr2": hr2,
        "mn1": mn1,
        "mn2": mn2,
        "se1": se1,
        "se2": se2,
    }       
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
    // document.write('<style> div {position:absolute; width: 100px; height: 100px; background: silver; text-align: center; vertical-align: middle; line-height: 100px; font-size: 5em;}  </style>');

    

    var hr = time.getHours();
    var mn = time.getMinutes();
    var se = time.getSeconds();

    var hr1 = (hr-(hr%10))/10;
    var hr2 = hr%10;
    var mn1 = (mn-(mn%10))/10;
    var mn2 = mn%10;
    var se1 = (se-(se%10))/10;
    var se2 = se%10;
    var binary = {
        position8 : 'off',
        position4 : 'off',
        position2 : 'off',
        position1 : 'off'
    };


    if (col === 'hour_col1'){
        if (hr1 > 7){
            binary.position8 = 'on';
            hr1 = hr1 - 8;
        }
        if (hr1 > 3){
            binary.position4 = 'on';
            hr1 = hr1 - 4;
        }
        if (hr1 > 1){

            binary.position2 = 'on';
            hr1 = hr1 - 2;
        }
        if (hr1 > 0){
            binary.position1 = 'on';
        }
    }
    if (col === 'hour_col2'){
        if (hr2 > 7){
            binary.position8 = 'on';
            hr2 = hr2 - 8;
        }
        if (hr2 > 3){
            binary.position4 = 'on';
            hr2 = hr2 - 4;
        }
        if (hr2 > 1){

            binary.position2 = 'on';
            hr2 = hr2 - 2;
        }
        if (hr2 > 0){
            binary.position1 = 'on';
        }
    }
    if (col === 'min_col1'){
        if (mn1 > 7){
            binary.position8 = 'on';
            mn1 = mn1 - 8;
        }
        if (mn1 > 3){
            binary.position4 = 'on';
            mn1 = mn1 - 4;
        }
        if (mn1 > 1){

            binary.position2 = 'on';
            mn1 = mn1 - 2;
        }
        if (mn1 > 0){
            binary.position1 = 'on';
        }
    }
    if (col === 'min_col2'){
        if (mn2 > 7){
            binary.position8 = 'on';
            mn2 = mn2 - 8;
        }
        if (mn2 > 3){
            binary.position4 = 'on';
            mn2 = mn2 - 4;
        }
        if (mn2 > 1){

            binary.position2 = 'on';
            mn2 = mn2 - 2;
        }
        if (mn2 > 0){
            binary.position1 = 'on';
        }
    }
    if (col === 'sec_col1'){
        if (se1 > 7){
            binary.position8 = 'on';
            se1 = se1 - 8;
        }
        if (se1 > 3){
            binary.position4 = 'on';
            se1 = se1 - 4;
        }
        if (se1 > 1){

            binary.position2 = 'on';
            se1 = se1 - 2;
        }
        if (se1 > 0){
            binary.position1 = 'on';
        }
    }
    if (col === 'sec_col2'){
        if (se2 > 7){
            binary.position8 = 'on';
            se2 = se2 - 8;
        }
        if (se2 > 3){
            binary.position4 = 'on';
            se2 = se2 - 4;
        }
        if (se2 > 1){

            binary.position2 = 'on';
            se2 = se2 - 2;
        }
        if (se2 > 0){
            binary.position1 = 'on';
        }
    }

    
    return binary;
    return {
        "hr1": hr1,
        "hr2": hr2,
        "mn1": mn1,
        "mn2": mn2,
        "se1": se1,
        "se2": se2,
    };    


    
};
