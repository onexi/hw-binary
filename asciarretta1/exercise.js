var exercise = {};

function addZero(i){
    if (i < 10){
        i = '0' + i;
    }
    return i;
}


exercise.roman = function(time){
    var hours = addZero(time.getHours());
    var minutes = addZero(time.getMinutes());
    var seconds = addZero(time.getSeconds());
    var h1 = hours.toString()[0];
    var h2 = hours.toString()[1];
    var m1 = minutes.toString()[0];
    var m2 = minutes.toString()[1];
    var s1 = seconds.toString()[0];
    var s2 = seconds.toString()[1];
    document.getElementById('hour1').innerHTML = h1;
    document.getElementById('hour2').innerHTML = h2;
    document.getElementById('min1').innerHTML = m1;
    document.getElementById('min2').innerHTML = m2;
    document.getElementById('sec1').innerHTML = s1;
    document.getElementById('sec2').innerHTML = s2;
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