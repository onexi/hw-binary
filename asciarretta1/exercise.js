var exercise = {};

exercise.roman = function(time){
    document.getElementById('hour1').innerHTML = time.getHours().toString()[0];
    document.getElementById('hour2').innerHTML = time.getHours().toString()[1];
    document.getElementById('min1').innerHTML = time.getMinutes().toString()[0];
    document.getElementById('min2').innerHTML = time.getMinutes().toString()[1];
    document.getElementById('sec1').innerHTML = time.getSeconds().toString()[0];
    document.getElementById('sec2').innerHTML = time.getSeconds().toString()[1];
};

exercise.binary = function(time, col){
    var clock = [];
    for(var i=0; i < col.length; i++)
    {
        var bp = { 
            position8 : 'off', 
            position4 : 'off', 
            position2 : 'off', 
            position1 : 'off' 
        };

        if (time[i] >= 8) {
            bp.position8 = 'on';
            time[i] -= 8;
        } 

        if (time[i] >= 4) {
            bp.position4 = 'on';
            time[i] -= 4;
        }

        if (time[i] >= 2) {
            bp.position2 = 'on';
            time[i] -= 2;
        }

        if (time[i] >= 1) {
            bp.position1 = 'on';
            time[i] -= 1;
        }
        clock[col[i]]=bp;
    }
    return clock;

};