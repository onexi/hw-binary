var exercise = {};

exercise.roman = function(time){
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    console.log('hh:mm:ss',hours,':',minutes,':',seconds);
  
if(hours<10){
    var hour_col1 = 0;
    var hour_col2 = hours;
}

else{
var hr_digits = [];
    while (hours > 0) {
        hr_digits[hr_digits.length] = hours % 10;
        hours = parseInt(hours / 10);
    }
    hr_digits.reverse();
    var hour_col1 = hr_digits[0];
    var hour_col2 = hr_digits[1];
} 
    
if(minutes<10){
    var min_col1 = 0;
    var min_col2 = minutes;
}

else{
 var min_digits = [];
    while (minutes > 0) {
        min_digits[min_digits.length] = minutes % 10;
        minutes = parseInt(minutes / 10);
    }
    min_digits.reverse();
    var min_col1 = min_digits[0];
    var min_col2 = min_digits[1];
}
   
if(seconds<10){
    var sec_col1 = 0;
    var sec_col2 = seconds;
}
else{    
var sec_digits = [];
    while (seconds > 0) {
        sec_digits[sec_digits.length] = seconds % 10;
        seconds = parseInt(seconds / 10);
    }
    sec_digits.reverse();
    var sec_col1 = sec_digits[0];
    var sec_col2 = sec_digits[1];
}

    var col = [hour_col1, hour_col2, min_col1, min_col2, sec_col1, sec_col2];
    console.log(col);

    return col;
};

exercise.binary = function(time) {
    var col = exercise.roman(time);
    console.log('col', col);
// col is an array with 6 digits inside
// for loop should go through each digit and assign binary reponse for each position

    var binary_hrs1 = {
        position1: 'off',
        position2: 'off',
        position4: 'off',
        position8: 'off'};
 
    var binary_hrs2 = {
        position1: 'off',
        position2: 'off',
        position4: 'off',
        position8: 'off'};

    var binary_mins1 = {
        position1: 'off',
        position2: 'off',
        position4: 'off',
        position8: 'off'};

    var binary_mins2 = {
        position1: 'off',
        position2: 'off',
        position4: 'off',
        position8: 'off'};
    
    var binary_sec1 = {
        position1: 'off',
        position2: 'off',
        position4: 'off',
        position8: 'off'};

    var binary_sec2 = {
        position1: 'off',
        position2: 'off',
        position4: 'off',
        position8: 'off'};

   
    //for (var i =0; i<col; i++){     // i is the col number for which digit


    if (col[0] >= 2) {
        binary_hrs1.position2= 'on';
        col[0] = col[0]-2;}
    else binary_hrs1.position2 = 'off';

    if (col[0] >= 1) {
        binary_hrs1.position1 = 'on';
        col[0]=col[0]-1;}
    else binary_hrs1.position1 = 'off';
       
    /////

    if (col[1] >= 8) {
        binary_hrs2.position8 = 'on';
        col[1]= col[1]-8;}
    else binary_hrs2.position8 = 'off';

    if (col[1] >= 4) {
        binary_hrs2.position4 = 'on';
        col[1] = col[1]-4;}
    else binary_hrs2.position4 = 'off';

    if (col[1] >= 2) {
        binary_hrs2.position2 = 'on';
        col[1]= col[1]-2;}
    else binary_hrs2.position2 = 'off';

    if (col[1] >= 1) {
        binary_hrs2.position1 = 'on';
        col[1]= col[1]-1;}
    else binary_hrs2.position1 = 'off';
    
    /////

    if (col[2] >= 8) {
        binary_mins1.position8 = 'on';
        col[2]= col[2]-8;}
    else binary_mins1.position8 = 'off';

    if (col[2] >= 4) {
        binary_mins1.position4 = 'on';
        col[2]= col[2]-4;}
    else binary_mins1.position4 = 'off';

    if (col[2] >= 2) {
        binary_mins1.position2 = 'on';
        col[2]= col[2]-2;}
    else binary_mins1.position2 = 'off';

    if (col[2] >= 1) {
        binary_mins1.position1 = 'on';
        col[2]= col[2]-1;}
    else binary_mins1.position1 = 'off';

/////

    if (col[3] >= 8) {
        binary_mins2.position8 = 'on';
        col[3]= col[3]-8;}
    else binary_mins2.position8 = 'off';

    if (col[3] >= 4) {
        binary_mins2.position4 = 'on';
        col[3]= col[3]-4;}
    else binary_mins2.position4 = 'off';

    if (col[3] >= 2) {
        binary_mins2.position2 = 'on';
        col[3]= col[3]-2;}
    else binary_mins2.position2 = 'off';

    if (col[3] >= 1) {
        binary_mins2.position1 = 'on';
        col[3]= col[3]-1;}
    else binary_mins2.position1 = 'off';

//////

    if (col[4] >= 8) {
        binary_sec1.position8 = 'on';
        col[4]= col[4]-8;}
    else binary_sec1.position8 = 'off';

    if (col[4] >= 4) {
        binary_sec1.position4 = 'on';
        col[4]= col[4]-4;}
    else binary_sec1.position4 = 'off';

    if (col[4] >= 2) {
        binary_sec1.position2 = 'on';
        col[4]= col[4]-2;}
    else binary_sec1.position2 = 'off';

    if (col[4] >= 1) {
        binary_sec1.position1 = 'on';
        col[4]= col[4]-1;}
    else binary_sec1.position1 = 'off';

/////

    if (col[5] >= 8) {
        binary_sec2.position8 = 'on';
        col[5]= col[5]-8;}
    else binary_sec2.position8 = 'off';

    if (col[5] >= 4) {
        binary_sec2.position4 = 'on';
        col[5]= col[5]-4;}
    else binary_sec2.position4 = 'off';

    if (col[5] >= 2) {
        binary_sec2.position2 = 'on';
        col[5]= col[5]-2;}
    else binary_sec2.position2 = 'off';

    if (col[5] >= 1) {
        binary_sec2.position1 = 'on';
        col[5]= col[5]-1;}
    else binary_sec2.position1 = 'off';

    var binary = [binary_hrs1, binary_hrs2, binary_mins1, binary_mins2, binary_sec1, binary_sec2];
    console.log('binary', binary);
    return binary;
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
    // 
    //----------------------------------------------------------

 




