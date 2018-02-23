var exercise = {};

exercise.roman = function(time){
    // console.log(time.getTime());
    var hour = String(addZero(time.getHours()));
    // console.log(hour);
    var min = String(addZero(time.getMinutes()));
    // console.log(min);
    var sec = String(addZero(time.getSeconds()));
    // you want a string, not a number
    // console.log(sec);

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    return { 
          hour_col1 : hour[0], 
          hour_col2 : hour[1],
          min_col1 : min[0], 
          min_col2 : min[1], 
          sec_col1 : sec[0], 
          sec_col2 : sec[1]
          // this is an array and you want the 1st and 2nd value in that array
          // if it was my name then A would be [0] and N would be [1]
          // need to call the var for hour, min, and sec in the value
    };
};

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

exercise.binary = function(time, col){
    var hour = String(addZero(time.getHours()));
    // console.log(hour);
    var min = String(addZero(time.getMinutes()));
    // console.log(min);
    var sec = String(addZero(time.getSeconds()));

    var hourOne = hour[0];
    var hourTwo = hour[1];
    var minOne = min[0];
    var minTwo = min[1];
    var secOne = sec[0];
    var secTwo = sec[1];

    // hour one
    document.getElementById('hour_col1_pos3').style.backgroundColor = '#ccc';
    document.getElementById('hour_col1_pos2').style.backgroundColor = '#ccc';

    if(hourOne >= 2){
        hourOne = hourOne - 2;
        document.getElementById('hour_col1_pos3').style.backgroundColor = 'red';
    }
    if(hourOne >= 1){
        hourOne = hourOne - 1;
        document.getElementById('hour_col1_pos2').style.backgroundColor = 'red';
    }

    // hour two
    document.getElementById('hour_col2_pos5').style.backgroundColor = '#ccc';
    document.getElementById('hour_col2_pos4').style.backgroundColor = '#ccc';
    document.getElementById('hour_col2_pos3').style.backgroundColor = '#ccc';
    document.getElementById('hour_col2_pos2').style.backgroundColor = '#ccc';

    if(hourTwo >= 8){
        hourTwo = hourTwo - 8;
        document.getElementById('hour_col2_pos5').style.backgroundColor = 'red';
    }
    if(hourTwo >= 4){
        hourTwo = hourTwo - 4;
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'red';
    }
    if(hourTwo >= 2){
        hourTwo = hourTwo - 2;
        document.getElementById('hour_col2_pos3').style.backgroundColor = 'red';
    }
    if(hourTwo >= 1){
        hourTwo = hourTwo - 1;
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
    }

    // min one
    document.getElementById('min_col3_pos4').style.backgroundColor = '#ccc';
    document.getElementById('min_col3_pos3').style.backgroundColor = '#ccc';
    document.getElementById('min_col3_pos2').style.backgroundColor = '#ccc';

    if(minOne >= 4){
        minOne = minOne - 4;
        document.getElementById('min_col3_pos4').style.backgroundColor = 'red';
    }   
    if(minOne >= 2){
        minOne = minOne - 2;
        document.getElementById('min_col3_pos3').style.backgroundColor = 'red';
    }   
    if(minOne >= 1){
        minOne = minOne - 1;
        document.getElementById('min_col3_pos2').style.backgroundColor = 'red';
    }

    // min two
    document.getElementById('min_col4_pos4').style.backgroundColor = '#ccc';
    document.getElementById('min_col4_pos3').style.backgroundColor = '#ccc';
    document.getElementById('min_col4_pos2').style.backgroundColor = '#ccc';

    if(minTwo >= 8){
        minTwo = minTwo - 8;
        document.getElementById('min_col4_pos5').style.backgroundColor = 'red';
    } 
    if(minTwo >= 4){
        minTwo = minTwo - 4;
        document.getElementById('min_col4_pos4').style.backgroundColor = 'red';
    }   
    if(minTwo >= 2){
        minTwo = minTwo - 2;
        document.getElementById('min_col4_pos3').style.backgroundColor = 'red';
    }   
    if(minTwo >= 1){
        minTwo = minTwo - 1;
        document.getElementById('min_col4_pos2').style.backgroundColor = 'red';
    }

    // sec one 
    document.getElementById('sec_col5_pos4').style.backgroundColor = '#ccc';
    document.getElementById('sec_col5_pos3').style.backgroundColor = '#ccc';
    document.getElementById('sec_col5_pos2').style.backgroundColor = '#ccc';

    if(secOne >= 4){
        secOne = secOne - 4;
        document.getElementById('sec_col5_pos4').style.backgroundColor = 'red';
    }   
    if(secOne >= 2){
        secOne = secOne - 2;
        document.getElementById('sec_col5_pos3').style.backgroundColor = 'red';
    }   
    if(secOne >= 1){
        secOne = secOne - 1;
        document.getElementById('sec_col5_pos2').style.backgroundColor = 'red';
    }

    // sec two
    document.getElementById('sec_col6_pos5').style.backgroundColor = '#ccc';
    document.getElementById('sec_col6_pos4').style.backgroundColor = '#ccc';
    document.getElementById('sec_col6_pos3').style.backgroundColor = '#ccc';
    document.getElementById('sec_col6_pos2').style.backgroundColor = '#ccc';

    if(secTwo >= 8){
        secTwo = secTwo - 8;
        document.getElementById('sec_col6_pos5').style.backgroundColor = 'red';
    }   
    if(secTwo >= 4){
        secTwo = secTwo - 4;
        document.getElementById('sec_col6_pos4').style.backgroundColor = 'red';
    }   
    if(secTwo >= 2){
        secTwo = secTwo - 2;
        document.getElementById('sec_col6_pos3').style.backgroundColor = 'red';
    }   
    if(secTwo >= 1){
        secTwo = secTwo - 1;
        document.getElementById('sec_col6_pos2').style.backgroundColor = 'red';
    }
    
};

// time from javacript
// format it in a way that it's useful
// using that time, display in roman
// write binary