var exercise = {};

exercise.roman = function(time){
    var stamp = {
        hour_col1 : Math.floor(time.getHours()/10),
        hour_col2 : Math.floor(time.getHours()%10),
        min_col1 : Math.floor(time.getMinutes()/10),
        min_col2 : Math.floor(time.getMinutes()%10),
        sec_col1 : Math.floor(time.getSeconds()/10),
        sec_col2 : Math.floor(time.getSeconds()%10)
    };
    return stamp;
};

exercise.binary = function(time, col){
    //var stamp = exercise.roman(time);
    var col = {
        hour_col1 : Math.floor(time.getHours()/10),
        hour_col2 : Math.floor(time.getHours()%10),
        min_col1 : Math.floor(time.getMinutes()/10),
        min_col2 : Math.floor(time.getMinutes()%10),
        sec_col1 : Math.floor(time.getSeconds()/10),
        sec_col2 : Math.floor(time.getSeconds()%10)
    };
    var response = {
        hour_col1_pos8: 'off',
        hour_col1_pos4 : 'off',
        hour_col1_pos2: 'off',
        hour_col1_pos1: 'off',
        hour_col2_pos8: 'off',
        hour_col2_pos4 : 'off',
        hour_col2_pos2: 'off',
        hour_col2_pos1: 'off',
        min_col1_pos8: 'off',
        min_col1_pos4 : 'off',
        min_col1_pos2: 'off',
        min_col1_pos1: 'off',
        min_col2_pos8: 'off',
        min_col2_pos4 : 'off',
        min_col2_pos2: 'off',
        min_col2_pos1: 'off',
        sec_col1_pos8: 'off',
        sec_col1_pos4 : 'off',
        sec_col1_pos2: 'off',
        sec_col1_pos1: 'off',
        sec_col2_pos: 'off',
        sec_col2_pos4 : 'off',
        sec_col2_pos2: 'off',
        sec_col2_pos1: 'off',
    };

// hours
    if(col.hour_col1>1){
        response.hour_col1_pos2 = 'on';
    }
    else if (col.hour_col1==1){
        response.hour_col1_pos1 = 'on';
    };

    if (col.hour_col2>=8){
        response.hour_col2_pos8 = 'on';
        col.hour_col2 -= 8;
    };
    if (col.hour_col2>=4){
        response.hour_col2_pos4 = 'on';
        col.hour_col2 -= 4;
    };
    if (col.hour_col2>=2){
        response.hour_col2_pos2 = 'on';
        col.hour_col2 -= 2;
    };
    if (col.hour_col2>=1){
        response.hour_col2_pos1 = 'on';
    };

// minutes 
    if(col.min_col1>=4){
        response.min_col1_pos4 = 'on';
        col.hour_col1 -= 4;
    };
    if(col.min_col1>=2){
        response.min_col1_pos2 = 'on';
        col.min_col1 -= 2;
    };
    if(col.min_col1>=1){
        response.min_col1_pos1 = 'on';
    };

    if(col.min_col2>=8){
        response.min_col2_pos8 = 'on';
        col.min_col2 -= 8;
    };
    if(col.min_col2>=4){
        response.min_col2_pos4 = 'on';
        col.min_col2 -= 4;
    };
    if (col.min_col2>=2){
        response.min_col2_pos2 = 'on';
        col.min_col2 -= 2;
    };
    if(col.min_col2>=1){
        response.min_col2_pos1 = 'on';
    };

//seconds 
    if(col.sec_col1>=4){
        response.sec_col1_posi= 'on';
        col.sec_col1 -= 4;
    };
    if (col.sec_col1>=2){
        response.sec_col1_pos2 = 'on';
        col.sec_col1 -= 2;
    };
    if(col.sec_col1>=1){
        response.sec_col1_pos1 = 'on';
    };

    if(col.sec_col2>=8){
        response.sec_col2_pos8 = 'on';
        col.sec_col2 -= 8;
    };
    if(col.sec_col2>=4){
        response.sec_col2_pos4 = 'on';
        col.sec_col2 -= 4;
    };
    if(col.sec_col2>=2){
        response.sec_col2_pos2 = 'on';
        col.sec_col2 -= 2;
    };
    if(col.sec_col2>=1){
        response.sec_col2_pos1 = 'on';
    };
    return response;
};

