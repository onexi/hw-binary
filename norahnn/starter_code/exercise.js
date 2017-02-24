var exercise = {};


exercise.roman = function(time){
    var hour=time.getHours();
    var min = time.getMinutes();
    var sec=time.getSeconds();
    
    var roman={
        hour_col1: (hour-hour%10)/10,
        hour_col2: hour %10,
        min_col1: (min-min%10)/10,
        min_col2: min%10,
        sec_col1: (sec-sec%10)/10,
        sec_col2: sec%10
    };
    return roman;
};

exercise.binary = function(time, col){
    var binary = {
        position8: 'off',
        position4: 'off', 
        position2: 'off',
        position1: 'off'
        
    };
    var roman = exercise.roman(time);
    num=roman[col];
    if(num%2===1){
        binary.position1='on';
    };

    if (num===2 || num===3 || num===6 || num===7){
        binary.position2='on';
    };

    if (num===4 || num===5 || num===6 || num===7){
        binary.position4='on';
    };
    if (num===8 || num===9){
        binary.position8='on';
    };
    return binary;
};