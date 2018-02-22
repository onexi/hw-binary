var exercise = {};


exercise.roman = function(time){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------

    var romanTime = {
        hour_col1 : Math.floor(time.getHours() / 10),
        hour_col2 : (time.getHours() % 10),
        minute_col1  : Math.floor(time.getMinutes() / 10),
        minute_col2  : (time.getMinutes() % 10),
        second_col1  : Math.floor(time.getSeconds() / 10),
        second_col2  : (time.getSeconds() % 10)
    }

    return romanTime;
    
};

exercise.binary = function(time, col){

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

    var timeNum = time[col];

	var binary = { 
        position8 : 'off', 
		position4 : 'off', 
		position2 : 'off', 
		position1 : 'off', 
    }; 

    if (timeNum == 8 || timeNum == 9){
        binary.position8 = 'on';
    }
    if (timeNum == 4 || timeNum == 5 || timeNum == 6 || timeNum == 7){
        binary.position4 = 'on';
    }
    if (timeNum == 2 || timeNum == 3 || timeNum == 6 || timeNum == 7){
        binary.position2 = 'on';       
    }
    if (timeNum == 1 || timeNum == 3 || timeNum == 5 || timeNum == 7 || timeNum == 9){
        binary.position1 = 'on';    
    }

   return binary;

};

// New Function to paint each column
exercise.drawColumn = function(binaryTime, col){
    if (binaryTime.position1 == 'on'){
        document.getElementById(col+'_Pos1').style.backgroundColor = 'red';
    }
    else{
        document.getElementById(col+'_Pos1').style.backgroundColor = 'silver';
    }

    if (binaryTime.position2 == 'on'){
        document.getElementById(col+'_Pos2').style.backgroundColor = 'red';
    }
    else{
        document.getElementById(col+'_Pos2').style.backgroundColor = 'silver';
    }

    if (binaryTime.position4 == 'on'){
        document.getElementById(col+'_Pos4').style.backgroundColor = 'red';
    }
    else{
        document.getElementById(col+'_Pos4').style.backgroundColor = 'silver';
    }

    if (binaryTime.position8 == 'on'){
        document.getElementById(col+'_Pos8').style.backgroundColor = 'red';
    }
    else{
        document.getElementById(col+'_Pos8').style.backgroundColor = 'silver';
    }
}