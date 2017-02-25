var exercise = {};

exercise.roman = function(time){

    //grabs the hours, seperates them out into 10s digit and ones digit
    var hours = time.getHours();
    for(var k=0; k<=2;k++){
        if(hours>=10*k){
            hour_col1 = k;
            hour_col2 = hours - 10*k;
        }
    }

    //grabs the minutes seperates them out into 10s digit and 1s digits
    var minutes = time.getMinutes();
    for(var i=0; i<=5; i++){
        if (minutes >= 10*i){
            min_col1 = i;
            min_col2 = minutes - 10*i;
        }
    }

    //grabs the seconds and seperates them out into 10s digit and 1s digits
    var seconds = time.getSeconds();
    for(var j=0; j<=5; j++){
        if (seconds >= 10*j){
            sec_col1 = j;
            sec_col2 = seconds - 10*j;
        }
    }

    array = [hour_col1, hour_col2, min_col1, min_col2, sec_col1, sec_col2];

    var col = {
        "hour_col1": hour_col1,
        "hour_col2": hour_col2,
        "min_col1": min_col1,
        "min_col2": min_col2,
        "sec_col1": sec_col1,
        "sec_col2": sec_col2
    };

    return col;
};

exercise.binary = function(time, column){

    var digits = exercise.roman(time);
    var digit = digits[column];
    var binary={};

    if(digit == 0){
        binary= {
            position8: 'off',
            position4: 'off',
            position2: 'off',
            position1: 'off'
        };
    }

    if(digit==1){
        binary= {
            position8: 'off',
            position4: 'off',
            position2: 'off',
            position1: 'on'
        };
    }
    if(digit==2){
        binary= {
            position8: 'off',
            position4: 'off',
            position2: 'on',
            position1: 'off'
        };
    }
    if(digit==3){
        binary= {
            position8: 'off',
            position4: 'off',
            position2: 'on',
            position1: 'on'
        };
    }

    if(digit==4){
        binary= {
            position8: 'off',
            position4: 'on',
            position2: 'off',
            position1: 'off'
        };
    }
    if(digit==5){
        binary= {
            position8: 'off',
            position4: 'on',
            position2: 'off',
            position1: 'on'
        };
    }
    if(digit==6){
        binary= {
            position8: 'off',
            position4: 'on',
            position2: 'on',
            position1: 'off'
        };
    }
    if(digit==7){
        binary= {
            position8: 'off',
            position4: 'on',
            position2: 'on',
            position1: 'on'
        };
    }
    if(digit==8){
        binary= {
            position8: 'on',
            position4: 'off',
            position2: 'off',
            position1: 'off'
        };
    }
    if(digit==9){
        binary= {
            position8: 'on',
            position4: 'off',
            position2: 'off',
            position1: 'on'
        };
    }
    return binary;
};