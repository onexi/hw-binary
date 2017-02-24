var exercise = {};

exercise.roman = function(time){
    var roman_time = {};
    if (time.getHours() < 10) {
        roman_time.hour_col1 = 0; 
        roman_time.hour_col2 = time.getHours();
    }
    else {
        roman_time.hour_col1 = time.getHours().toString().charAt(0); 
        roman_time.hour_col2 = time.getHours().toString().charAt(1);
    }
    if (time.getMinutes() < 10) {
        roman_time.min_col1  = 0;
        roman_time.min_col2  = time.getMinutes(); 
    }
    else {
        roman_time.min_col1 = time.getMinutes().toString().charAt(0); 
        roman_time.min_col2 = time.getMinutes().toString().charAt(1);
    }
    if (time.getSeconds() < 10) {
        roman_time.sec_col1  = 0; 
        roman_time.sec_col2  = time.getSeconds();
    }
    else {
        roman_time.sec_col1  = time.getSeconds().toString().charAt(0); 
        roman_time.sec_col2  = time.getSeconds().toString().charAt(1);
    }
    return roman_time;
};

exercise.binary = function(time, col){
    var binary = {
        position8 : 'off', 
        position4 : 'off', 
        position2 : 'off', 
        position1 : 'off' 
    };
    
    var col_num = exercise.roman(time)[col];

    if (col_num >= 8){
        binary.position8 = 'on';
        col_num -= 8;
    }
    if (col_num >= 4){
        binary.position4 = 'on';
        col_num -= 4;
    }
    if (col_num >= 2){
        binary.position2 = 'on';
        col_num -= 2;
    }
    if (col_num == 1){
        binary.position1 = 'on';
    }

    return binary;
};