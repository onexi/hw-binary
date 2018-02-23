var exercise = {};


exercise.roman = function(time){

    //setting the hours
    var hour = String(time.getHours());
    var roman1;
    var roman2;
    if(hour.length === 2){
        roman1 = hour[0];
        roman2 = hour[1];
    }
    else{
        roman1 = 0;
        roman2 = hour[0];
    }
    
    //setting the minutes
    var min = String(time.getMinutes());
    var roman3;
    var roman4;
    if(min.length === 2){
        roman3 = min[0];
        roman4 = min[1];
    }
    else{
        roman3 = 0;
        roman4 = min[0];
    }

    //setting the seconds
    var sec = String(time.getSeconds());
    var roman5;
    var roman6;
    if(sec.length === 2){
        roman5 = sec[0];
        roman6 = sec[1];
    }
    else{
        roman5 = 0;
        roman6 = sec[0];
    }

    //writing the roman time to the boxes
    document.getElementById("hour_col1_roman").innerHTML = roman1;
    document.getElementById("hour_col2_roman").innerHTML= roman2;
    document.getElementById("hour_col3_roman").innerHTML = roman3;
    document.getElementById("hour_col4_roman").innerHTML = roman4;
    document.getElementById("hour_col5_roman").innerHTML = roman5;
    document.getElementById("hour_col6_roman").innerHTML = roman6;

};

exercise.binary = function(time){

//copied from roman function
    //setting the hours
    var hour = String(time.getHours());
    var roman1;
    var roman2;
    if(hour.length === 2){
        roman1 = hour[0];
        roman2 = hour[1];
    }
    else{
        roman1 = 0;
        roman2 = hour[0];
    }
    
    //setting the minutes
    var min = String(time.getMinutes());
    var roman3;
    var roman4;
    if(min.length === 2){
        roman3 = min[0];
        roman4 = min[1];
    }
    else{
        roman3 = 0;
        roman4 = min[0];
    }

    //setting the seconds
    var sec = String(time.getSeconds());
    var roman5;
    var roman6;
    if(sec.length === 2){
        roman5 = sec[0];
        roman6 = sec[1];
    }
    else{
        roman5 = 0;
        roman6 = sec[0];
    }
    //convert each time element into an int
    var intRoman1 = Number(roman1);
    var intRoman2 = Number(roman2);
    var intRoman3 = Number(roman3);
    var intRoman4 = Number(roman4);
    var intRoman5 = Number(roman5);
    var intRoman6 = Number(roman6);

    //set all boxes to gray
    document.getElementById('hour_col1_pos1').style.backgroundColor = 'silver';
    document.getElementById('hour_col1_pos2').style.backgroundColor = 'silver';
    document.getElementById('hour_col1_pos4').style.backgroundColor = 'silver';
    document.getElementById('hour_col1_pos8').style.backgroundColor = 'silver';
    document.getElementById('hour_col2_pos1').style.backgroundColor = 'silver';
    document.getElementById('hour_col2_pos2').style.backgroundColor = 'silver';
    document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
    document.getElementById('hour_col2_pos8').style.backgroundColor = 'silver';
    document.getElementById('hour_col3_pos1').style.backgroundColor = 'silver';
    document.getElementById('hour_col3_pos2').style.backgroundColor = 'silver';
    document.getElementById('hour_col3_pos4').style.backgroundColor = 'silver';
    document.getElementById('hour_col3_pos8').style.backgroundColor = 'silver';
    document.getElementById('hour_col4_pos1').style.backgroundColor = 'silver';
    document.getElementById('hour_col4_pos2').style.backgroundColor = 'silver';
    document.getElementById('hour_col4_pos4').style.backgroundColor = 'silver';
    document.getElementById('hour_col4_pos8').style.backgroundColor = 'silver';
    document.getElementById('hour_col5_pos1').style.backgroundColor = 'silver';
    document.getElementById('hour_col5_pos2').style.backgroundColor = 'silver';
    document.getElementById('hour_col5_pos4').style.backgroundColor = 'silver';
    document.getElementById('hour_col5_pos8').style.backgroundColor = 'silver';
    document.getElementById('hour_col6_pos1').style.backgroundColor = 'silver';
    document.getElementById('hour_col6_pos2').style.backgroundColor = 'silver';
    document.getElementById('hour_col6_pos4').style.backgroundColor = 'silver';
    document.getElementById('hour_col6_pos8').style.backgroundColor = 'silver';

    //first column
    if(intRoman1 >= 2){
        intRoman1 -= 2;
        document.getElementById('hour_col1_pos2').style.backgroundColor = 'red';
    }
    if(intRoman1 >= 1){
        intRoman1 -= 1;
        document.getElementById('hour_col1_pos1').style.backgroundColor = 'red';
    }

    //second column
    if(intRoman2 >= 8){
        intRoman2 -= 8;
        document.getElementById('hour_col2_pos8').style.backgroundColor = 'red';
    }
    if(intRoman2 >= 4){
        intRoman2 -= 4;
        document.getElementById('hour_col2_pos4').style.backgroundColor = 'red';
    }
    if(intRoman2 >= 2){
        intRoman2 -= 2;
        document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
    }
    if(intRoman2 >= 1){
        intRoman2 -= 1;
        document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
    }
    //third column
    if(intRoman3 >= 8){
        intRoman3 -= 8;
        document.getElementById('hour_col3_pos8').style.backgroundColor = 'red';
    }
    if(intRoman3 >= 4){
        intRoman3 -= 4;
        document.getElementById('hour_col3_pos4').style.backgroundColor = 'red';
    }
    if(intRoman3 >= 2){
        intRoman3 -= 2;
        document.getElementById('hour_col3_pos2').style.backgroundColor = 'red';
    }
    if(intRoman3 >= 1){
        intRoman3 -= 1;
        document.getElementById('hour_col3_pos1').style.backgroundColor = 'red';
    }
    //fourth column
    if(intRoman4 >= 8){
        intRoman4 -= 8;
        document.getElementById('hour_col4_pos8').style.backgroundColor = 'red';
    }
    if(intRoman4 >= 4){
        intRoman4 -= 4;
        document.getElementById('hour_col4_pos4').style.backgroundColor = 'red';
    }
    if(intRoman4 >= 2){
        intRoman4 -= 2;
        document.getElementById('hour_col4_pos2').style.backgroundColor = 'red';
    }
    if(intRoman4 >= 1){
        intRoman4 -= 1;
        document.getElementById('hour_col4_pos1').style.backgroundColor = 'red';
    }
    //fifth column
    if(intRoman5 >= 8){
        intRoman5 -= 8;
        document.getElementById('hour_col5_pos8').style.backgroundColor = 'red';
    }
    if(intRoman5 >= 4){
        intRoman5 -= 4;
        document.getElementById('hour_col5_pos4').style.backgroundColor = 'red';
    }
    if(intRoman5 >= 2){
        intRoman5 -= 2;
        document.getElementById('hour_col5_pos2').style.backgroundColor = 'red';
    }
    if(intRoman5 >= 1){
        intRoman5 -= 1;
        document.getElementById('hour_col5_pos1').style.backgroundColor = 'red';
    }
    //sixth column
    if(intRoman6 >= 8){
        intRoman6 -= 8;
        document.getElementById('hour_col6_pos8').style.backgroundColor = 'red';
    }
    if(intRoman6 >= 4){
        intRoman6 -= 4;
        document.getElementById('hour_col6_pos4').style.backgroundColor = 'red';
    }
    if(intRoman6 >= 2){
        intRoman6 -= 2;
        document.getElementById('hour_col6_pos2').style.backgroundColor = 'red';
    }
    if(intRoman6 >= 1){
        intRoman6 -= 1;
        document.getElementById('hour_col6_pos1').style.backgroundColor = 'red';
    }
};
    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    }; 
    //----------------------------------------------------------