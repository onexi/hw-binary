var exercise = {};


exercise.roman = function(time){

    //Remove the ":" from the time
    cleanTime = time.replace(/:/g,""); // Split the time into 3 parts
   var romanTime =  { 
              hour_col1 : cleanTime[0], 
               hour_col2 : cleanTime[1],
               min_col1  : cleanTime[2], 
               min_col2  : cleanTime[3], 
               sec_col1  : cleanTime[4], 
               sec_col2  : cleanTime[5],
             };

return romanTime;

};

exercise.binary = function(time, col){

    // col should look like: "hour_col1"

    // Initialize
    var number = 0;
    var binary = {
        position8: 'off',
        position4: 'off',
        position2: 'off',
        position1: 'off',

    };

    //Determine the number based on column name 
    [hour,min,sec] = time.split(":"); // Split the time into 3 parts
    if (col.includes("hour")){
        if (col.includes("1")) number = hour[0];
        else number = hour[1];
    } else if (col.includes("min")){
        if (col.includes("1")) number = min[0];
        else number = min[1];
    } else {
        if (col.includes("1")) number = sec[0];
        else number = sec[1];
    };

    //Insert the logic of turning positions on and off
    if (number >= 8){
        binary.position8 = 'on';
        var remain = number%8;
        if (remain > 0){
            binary.position1 = 'on';
        };
    } else if (number >= 4){
        binary.position4 = 'on';
        var remain = number%4;
        if (remain == 1){binary.position1 = 'on'}
        else if (remain == 2){binary.position2 = 'on'}
        else if (remain == 3){
            binary.position1 = 'on';
            binary.position2 = 'on';
        };
    } else {
        if (number == 3){
            binary.position1 = 'on';
            binary.position2 = 'on';
        };
        if (number == 2){binary.position2 = 'on'};
        if (number == 1){binary.position1 = 'on'};
    };

    return binary;

};

exercise.parseDate = function(date){

    //console.log(time);
    var string = String(date);
    var splitString = string.split(" ");
    var trueTime = splitString[4];

    return trueTime;

};