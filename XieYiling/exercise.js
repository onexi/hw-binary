var exercise = {};


exercise.roman = function(time){

    //-------------------------------------
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //-------------------------------------
    var roman ={
        hour_col1 : 0,
        hour_col2 : 0,
        min_col1  : 0, 
        min_col2  : 0, 
        sec_col1  : 0, 
        sec_col2  : 0,
    };

    if (time.getHours()<10){
        roman.hour_col1 = 0;
        roman.hour_col2 = Number(time.getHours().toString()[0]);
    }
    else{
        roman.hour_col1 = Number(time.getHours().toString()[0]);
        roman.hour_col2 = Number(time.getHours().toString()[1]);        
    }

    if (time.getMinutes()<10){
        roman.min_col1 = 0;
        roman.min_col2 = Number(time.getMinutes().toString()[0]);
    }
    else{
        roman.min_col1 = Number(time.getMinutes().toString()[0]);
        roman.min_col2 = Number(time.getMinutes().toString()[1]);        
    }

    if (time.getSeconds()<10){
        roman.sec_col1 = 0;
        roman.sec_col2 = Number(time.getSeconds().toString()[0]);
    }
    else{
        roman.sec_col1 = Number(time.getSeconds().toString()[0]);
        roman.sec_col2 = Number(time.getSeconds().toString()[1]);        
    }
    return roman;
};

exercise.binary = function(time, col){

    //----------------------------------------------------------
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //----------------------------------------------------------
    var binary = {
        coln : col,
        position8 : 'off',
        position4 : 'off',
        position2 : 'off',
        position1 : 'off',
    };
    var temp = 0;

    if (col == 'hour_col1'){
        temp = Number(time.getHours().toString()[0]);
        if (temp >= 8 ){
            binary.position8 = 'on';
            temp -= 8;
        }
        if (temp >= 4){
            binary.position4 = 'on';
            temp -= 4;
        }
        if (temp >= 2){
            binary.position2 = 'on';
            temp -= 2;
        }
        if (temp >= 1){
            binary.position1 = 'on';
        }
    }

    if (col == 'hour_col2'){
        temp = Number(time.getHours().toString()[1]);
        if (temp >= 8 ){
            binary.position8 = 'on';
            temp -= 8;
        }
        if (temp >= 4){
            binary.position4 = 'on';
            temp -= 4;
        }
        if (temp >= 2){
            binary.position2 = 'on';
            temp -= 2;
        }
        if (temp >= 1){
            binary.position1 = 'on';
        }
    }
    
    if (col == 'min_col1'){
        temp = Number(time.getMinutes().toString()[0]);
        if (temp >= 8 ){
            binary.position8 = 'on';
            temp -= 8;
        }
        if (temp >= 4){
            binary.position4 = 'on';
            temp -= 4;
        }
        if (temp >= 2){
            binary.position2 = 'on';
            temp -= 2;
        }
        if (temp >= 1){
            binary.position1 = 'on';
        }
    }

    if (col == 'min_col2'){
        temp = Number(time.getMinutes().toString()[1]);
        if (temp >= 8 ){
            binary.position8 = 'on';
            temp -= 8;
        }
        if (temp >= 4){
            binary.position4 = 'on';
            temp -= 4;
        }
        if (temp >= 2){
            binary.position2 = 'on';
            temp -= 2;
        }
        if (temp >= 1){
            binary.position1 = 'on';
        }
    }

    if (col == 'sec_col1'){
        temp = Number(time.getSeconds().toString()[0]);
        if (temp >= 8 ){
            binary.position8 = 'on';
            temp -= 8;
        }
        if (temp >= 4){
            binary.position4 = 'on';
            temp -= 4;
        }
        if (temp >= 2){
            binary.position2 = 'on';
            temp -= 2;
        }
        if (temp >= 1){
            binary.position1 = 'on';
        }
    }

    if (col == 'sec_col2'){
        temp = Number(time.getSeconds().toString()[1]);
        if (temp >= 8 ){
            binary.position8 = 'on';
            temp -= 8;
        }
        if (temp >= 4){
            binary.position4 = 'on';
            temp -= 4;
        }
        if (temp >= 2){
            binary.position2 = 'on';
            temp -= 2;
        }
        if (temp >= 1){
            binary.position1 = 'on';
        }
    }

    return binary;
};

exercise.setOn = function(response){
    if (response.position1 === 'on'){
        document.getElementById(response.coln + '_pos1').style.backgroundColor = 'red';
    }
    else{
        document.getElementById(response.coln + '_pos1').style.backgroundColor = 'silver';
    }
    if (response.position2 === 'on'){
        document.getElementById(response.coln + '_pos2').style.backgroundColor = 'red';
    }
    else{
        document.getElementById(response.coln+ '_pos2').style.backgroundColor = 'silver';
    }   
    if (response.position4 === 'on'){
        document.getElementById(response.coln + '_pos4').style.backgroundColor = 'red';
    }
    else{
        document.getElementById(response.coln+ '_pos4').style.backgroundColor = 'silver';
    }  
    if (response.position8 === 'on'){
        document.getElementById(response.coln + '_pos8').style.backgroundColor = 'red';
    }
    else{
        document.getElementById(response.coln+ '_pos8').style.backgroundColor = 'silver';
    }  
};