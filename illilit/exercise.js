var exercise = {};


exercise.roman = function(time){

    var hrs = time.getHours();
    var hrs_string;
    if(hrs<10){hrs_string = "0" + String(hrs);}
    else{hrs_string =  String(hrs);}
    

    var min = time.getMinutes();
    var min_string;
    if(min<10){min_string = "0" + String(min);}
    else{min_string =  String(min);}

    var sec = time.getSeconds();
    var sec_string;
    if(sec<10){sec_string = "0" + String(sec);}
    else{sec_string =  String(sec);}

    return { 
        hour_col1 : hrs_string[0], 
        hour_col2 : hrs_string[1],
        min_col1  : min_string[0], 
        min_col2  : min_string[1], 
        sec_col1  : sec_string[0], 
        sec_col2  : sec_string[1]
    };

};

exercise.binary = function(time, col){

    var hrs = time.getHours();
    var hrs_string;
    if(hrs<10){hrs_string = "0" + String(hrs);}
    else{hrs_string =  String(hrs);}
    

    var min = time.getMinutes();
    var min_string;
    if(min<10){min_string = "0" + String(min);}
    else{min_string =  String(min);}

    var sec = time.getSeconds();
    var sec_string;
    if(sec<10){sec_string = "0" + String(sec);}
    else{sec_string =  String(sec);}

//----------------------------------------------------------

    var binary0 = {
        position8: 'off',
        position4: 'off',
        position2: 'off',
        position1: 'off',
    }

    var binary1 = {
        position8: 'off',
        position4: 'off',
        position2: 'off',
        position1: 'on',
    }

    var binary2 = {
        position8: 'off',
        position4: 'off',
        position2: 'on',
        position1: 'off',
    }

    var binary3 = {
        position8: 'off',
        position4: 'off',
        position2: 'on',
        position1: 'on',
    }

    var binary4 = {
        position8: 'off',
        position4: 'on',
        position2: 'off',
        position1: 'off',
    }

    var binary5 = {
        position8: 'off',
        position4: 'on',
        position2: 'off',
        position1: 'on',
    }

    var binary6 = {
        position8: 'off',
        position4: 'on',
        position2: 'on',
        position1: 'off',
    }

    var binary7 = {
        position8: 'off',
        position4: 'on',
        position2: 'on',
        position1: 'on',
    }

    var binary8 = {
        position8: 'on',
        position4: 'off',
        position2: 'off',
        position1: 'off',
    }

    var binary9 = {
        position8: 'on',
        position4: 'off',
        position2: 'off',
        position1: 'on',
    }

    var binary=[binary0,binary1,binary2,binary3,binary4,binary5,binary6,binary7,binary8,binary9];
//----------------------------------------------------------

if (col === 1) {return binary[Number(hrs_string[0])];}  
if (col === 2) {return binary[Number(hrs_string[1])];}
if (col === 3) {return binary[Number(min_string[0])];}
if (col === 4) {return binary[Number(min_string[1])];}
if (col === 5) {return binary[Number(sec_string[0])];}
if (col === 6) {return binary[Number(sec_string[1])];}


};