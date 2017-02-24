var exercise = {};



exercise.binary = function(time, col){
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var binary = { position8 : 'off', position4 : 'off', position2 : 'off', position1 : 'off'}; 
    if (col === 'hour_col1'){
        var d = Math.trunc(h/10);
    };
    if (col === 'hour_col2'){
        var d = h % 10;
    }; 
    if (col === 'min_col1'){
        var d = Math.trunc(m/10);
    };
    if (col === 'min_col2'){
        var d = m % 10;
    }
    if (col === 'sec_col1'){
        var d = Math.trunc(s/10);
    }; 
    if (col === 'sec_col2'){
        var d = s % 10;
    }

    // Converting 1-digit number to binary
    if (d >= 8){
        binary.position8 = 'on';
        d = d-8;
    };
    if (d >= 4){
        binary.position4 = 'on';
        d = d-4;
    };
    if (d >= 2){
        binary.position2 = 'on';
        d = d-2;
    };
    if (d >= 1){
        binary.position1 = 'on';
    };
   
return binary;
};

exercise.roman = function(time){
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    var a = Math.trunc(h/10);
    var b = h % 10;
    var c = Math.trunc(m/10);
    var e = m % 10;
    var f = Math.trunc(s/10);
    var g = s % 10;
    var timeRoman = [a, b, c, e, f, g];
return timeRoman;
};