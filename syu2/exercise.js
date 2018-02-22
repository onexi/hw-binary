var exercise = {};

exercise.roman = function(time){

    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    if (s < 10){
        s = String(s)
        s = '0' + s;
    }else{
        s = String(s)
    }

    if (m < 10){
        m = String(m)
        m = '0' + m;
    }else{
        m = String(m)
    }

    if (h < 10){
        h = String(h)
        h = '0' + h;
    }else{
        h = String(h)
    }

var T = {
    h1 : Number(h[0]),
    h2 : Number(h[1]),
    m1 : Number(m[0]),
    m2 : Number(m[1]),
    s1 : Number(s[0]),
    s2 : Number(s[1])
} ;

document.getElementById('h1').innerHTML = T.h1;
document.getElementById('h2').innerHTML = T.h2;
document.getElementById('m1').innerHTML = T.m1;
document.getElementById('m2').innerHTML = T.m2;
document.getElementById('s1').innerHTML = T.s1;
document.getElementById('s2').innerHTML = T.s2;

}

exercise.binary = function(time, unit, col, t){

    var bin = [
        [0, 0, 0, 0], //0
        [1, 0, 0, 0], //1
        [0, 1, 0, 0], //2
        [1, 1, 0, 0], //3
        [0, 0, 1, 0], //4
        [1, 0, 1, 0], //5
        [0, 1, 1, 0], //6
        [1, 1, 1, 0], //7
        [0, 0, 0, 1], //8
        [1, 0, 0, 1], //9
    ]

    if (bin[t][0] === 1){
        a = unit + col + '_' + '1';
        document.getElementById(a).style.backgroundColor = 'red'; 
    }else {
        a = unit + col + '_' + '1';
        document.getElementById(a).style.backgroundColor = 'silver'; 
    }

    if (bin[t][1] === 1){
        a = unit + col + '_' + '2';
        document.getElementById(a).style.backgroundColor = 'red'; 
    }else {
        a = unit + col + '_' + '2';
        document.getElementById(a).style.backgroundColor = 'silver'; 
    }

    if (bin[t][2] === 1){
        a = unit + col + '_' + '3';
        document.getElementById(a).style.backgroundColor = 'red'; 
    }else {
        a = unit + col + '_' + '3';
        document.getElementById(a).style.backgroundColor = 'silver'; 
    }

    if (bin[t][3] === 1){
        a = unit + col + '_' + '4';
        document.getElementById(a).style.backgroundColor = 'red'; 
    }else {
        a = unit + col + '_' + '4';
        document.getElementById(a).style.backgroundColor = 'silver'; 
    }


}

