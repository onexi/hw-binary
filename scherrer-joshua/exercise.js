var exercise = {};

function addZero(i){
    if(i < 10){
        i = '0' + i;
    }
    return i;   
}

var timer = function() {
	var time = new Date();
	console.log(time);
    setRoman(time);
	setBinary(time);
	setTimeout(timer, 1000);
};

var setRoman = function(time){
	exercise.roman(time);
};

var setBinary = function(time){
    exercise.binary(time);
};

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
    document.getElementById('h1').innerHTML= h1;
    document.getElementById('h2').innerHTML= h2;
    document.getElementById('m1').innerHTML= m1;
    document.getElementById('m2').innerHTML= m2;
    document.getElementById('s1').innerHTML= s1;
    document.getElementById('s2').innerHTML= s2;
    
};

exercise.binary = function(time){
    var hours = addZero(time.getHours());
    var minutes = addZero(time.getMinutes());
    var seconds = addZero(time.getSeconds());
    var h1 = hours.toString()[0];
    var h2 = hours.toString()[1];
    var m1 = minutes.toString()[0];
    var m2 = minutes.toString()[1];
    var s1 = seconds.toString()[0];
    var s2 = seconds.toString()[1];
    
    if(h1==2) {
        document.getElementById('h11').style.background = 'red';
    } else {
        document.getElementById('h11').style.background = 'silver';
    } 
    if(h1==1){
        document.getElementById('h12').style.background = 'red';
    } else {
        document.getElementById('h12').style.background = 'silver';
    }


    if(h2>=8){
        h2-=8;
        document.getElementById('h21').style.background = 'red';
    } else {
        document.getElementById('h21').style.background = 'silver';
    }
    if(h2>=4){
        h2-=4;
        document.getElementById('h22').style.background = 'red';
    } else {
        document.getElementById('h22').style.background = 'silver';
    }
    if(h2>=2){
        h2-=2;
        document.getElementById('h23').style.background = 'red';
    } else {
        document.getElementById('h23').style.background = 'silver';
    }
    if(h2>=1){
        h2-=1;
        document.getElementById('h24').style.background = 'red';
    } else {
        document.getElementById('h24').style.background = 'silver';
    }


    if(m1>=4){
        m1-=4;
        document.getElementById('m11').style.background = 'red';
    } else {
        document.getElementById('m11').style.background = 'silver';
    }
    if(m1>=2){
        m1-=2;
        document.getElementById('m12').style.background = 'red';
    } else {
        document.getElementById('m12').style.background = 'silver';
    }
    if(m1>=1){
        m1-=1;
        document.getElementById('m13').style.background = 'red';
    } else {
        document.getElementById('m13').style.background = 'silver';
    }


    if(m2>=8){
        m2-=8;
        document.getElementById('m21').style.background = 'red';
    } else {
        document.getElementById('m21').style.background = 'silver';
    }
    if(m2>=4){
        m2-=4;
        document.getElementById('m22').style.background = 'red';
    } else {
        document.getElementById('m22').style.background = 'silver';
    }
    if(m2>=2){
        m2-=2;
        document.getElementById('m23').style.background = 'red';
    } else {
        document.getElementById('m23').style.background = 'silver';
    }
    if(m2>=1){
        m2-=1;
        document.getElementById('m24').style.background = 'red';
    } else {
        document.getElementById('m24').style.background = 'silver';
    }


    if(s1>=4){
        s1-=4;
        document.getElementById('s11').style.background = 'red';
    } else {
        document.getElementById('s11').style.background = 'silver';
    }
    if(s1>=2){
        s1-=2;
        document.getElementById('s12').style.background = 'red';
    } else {
        document.getElementById('s12').style.background = 'silver';
    }
    if(s1>=1){
        s1-=1;
        document.getElementById('s13').style.background = 'red';
    } else {
        document.getElementById('s13').style.background = 'silver';
    }


    if(s2>=8){
        s2-=8;
        document.getElementById('s21').style.background = 'red';
    } else {
        document.getElementById('s21').style.background = 'silver';
    }
    if(s2>=4){
        s2-=4;
        document.getElementById('s22').style.background = 'red';
    } else {
        document.getElementById('s22').style.background = 'silver';
    }
    if(s2>=2){
        s2-=2;
        document.getElementById('s23').style.background = 'red';
    } else {
        document.getElementById('s23').style.background = 'silver';
    }
    if(s2>=1){
        s2-=1;
        document.getElementById('s24').style.background = 'red';
    } else {
        document.getElementById('s24').style.background = 'silver';
    }
};