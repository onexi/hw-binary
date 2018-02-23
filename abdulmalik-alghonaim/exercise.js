var exercise = {};


exercise.roman = function(time){

    var hours = String(time.getHours());
    if(hours.length===1){
        hours = '0' + hours 
    }
    var Minutes = String(time.getMinutes());
    if(Minutes.length===1){
        Minutes = '0' + Minutes
    }
    var Seconds = String(time.getSeconds());
    if (Seconds.length===1){
        Seconds = '0' + Seconds
    }
    // hours_array = hours.split
    var roman ={ 
          hour_col1 : hours[0], 
          hour_col2 : hours[1],
          min_col1  : Minutes[0], 
          min_col2  : Minutes[1], 
          sec_col1  : Seconds[0], 
          sec_col2  : Seconds[1]
            
    };
    return roman
};

exercise.binary = function(time, col){
    var hours = String(time.getHours());
    if(hours.length===1){
        hours = '0' + hours 
    }
    var Minutes = String(time.getMinutes());
    if(Minutes.length===1){
        Minutes = '0' + Minutes
    }
    var Seconds = String(time.getSeconds());
    if (Seconds.length===1){
        Seconds = '0' + Seconds
    }
    var binary = { 
        position8 : 'off', 
        position4 : 'off', 
        position2 : 'off', 
        position1 : 'off', 
    }; 
    if (col ==='hour_col1'){
        var digit = hours[0];
        if (digit>=8){
            binary.position8 = 'on';
            digit -=8
        };
        if (digit>=4){
            binary.position4 = 'on';
            digit -=4
        };
        if (digit>=2){
            binary.position2 = 'on';
            digit -=2
        };
        if (digit===1){
            binary.position1 = 'on';
        };
    };
    if (col ==='hour_col2'){
        var digit = hours[1];
        if (digit>=8){
            binary.position8 = 'on';
            digit -=8
        };
        if (digit>=4){
            binary.position4 = 'on';
            digit -=4
        };
        if (digit>=2){
            binary.position2 = 'on';
            digit -=2
        };
        if (digit===1){
            binary.position1 = 'on';
        };
    };
    if (col ==='minute_col1'){
        var digit = Minutes[0];
        if (digit>=8){
            binary.position8 = 'on';
            digit -=8
        };
        if (digit>=4){
            binary.position4 = 'on';
            digit -=4
        };
        if (digit>=2){
            binary.position2 = 'on';
            digit -=2
        };
        if (digit===1){
            binary.position1 = 'on';
        };
    };
    if (col ==='minute_col2'){
        var digit = Minutes[1];
        if (digit>=8){
            binary.position8 = 'on';
            digit -=8
        };
        if (digit>=4){
            binary.position4 = 'on';
            digit -=4
        };
        if (digit>=2){
            binary.position2 = 'on';
            digit -=2
        };
        if (digit===1){
            binary.position1 = 'on';
        };
    };
    if (col ==='second_col1'){
        var digit = Seconds[0];
        if (digit>=8){
            binary.position8 = 'on';
            digit -=8
        };
        if (digit>=4){
            binary.position4 = 'on';
            digit -=4
        };
        if (digit>=2){
            binary.position2 = 'on';
            digit -=2
        };
        if (digit===1){
            binary.position1 = 'on';
        };
    };
    if (col ==='second_col2'){
        var digit = Seconds[1];
        if (digit>=8){
            binary.position8 = 'on';
            digit -=8
        };
        if (digit>=4){
            binary.position4 = 'on';
            digit -=4
        };
        if (digit>=2){
            binary.position2 = 'on';
            digit -=2
        };
        if (digit===1){
            binary.position1 = 'on';
        };
    };
    return binary;
};