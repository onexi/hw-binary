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

    //Get hour, minute, and second to print to console
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    console.log('h:m:s = ' + h + ':' + m + ':' + s);

    //Get time by columns
    var myTime  = getTime(time);

    //Construct a roman time object to return for display
    var roman = {

           hour_col1 : myTime.hour_col1, 
           hour_col2 : myTime.hour_col2,
           min_col1  : myTime.min_col1, 
           min_col2  : myTime.min_col2, 
           sec_col1  : myTime.sec_col1, 
           sec_col2  : myTime.sec_col2
    };

    return roman;

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

    //Get time stop by columns
    var myTime  = getTime(time);

    //You can access object properties as if they were indices instead of using "stamp."
    var number = myTime[col];     

    //Initalize everything to be off
	var binary = { 
        position8 : 'off', 
		position4 : 'off', 
		position2 : 'off', 
		position1 : 'off', 
    }; 

    //These 4 if statements need to be in sequence since each time we subtract from "number", it needs to get checked by following if statement 
	if (number >= 8){
        binary.position8 = 'on';
        number -= 8;
    }
    if (number >= 4){
        binary.position4 = 'on';
        number -= 4;
    }
    if (number >= 2){
        binary.position2 = 'on';
        number -= 2;
    }
    if (number >= 1){
        binary.position1 = 'on';
        number -= 1;
    }

   return binary;
}




//A helper function that returns an object of time columns
function getTime(time){

    var myTime = {
        hour_col1 : Math.floor(time.getHours() / 10),
        hour_col2 : (time.getHours() % 10),
        min_col1  : Math.floor(time.getMinutes() / 10),
        min_col2  : (time.getMinutes() % 10),
        sec_col1  : Math.floor(time.getSeconds() / 10),
        sec_col2  : (time.getSeconds() % 10)
    };
    
    return myTime;
}




//A helper function that updates the colors of the clock grid
exercise.updateScreen = function(col, buttonLabel){

    //Label for buttons to update, append to it the position of interest
    var label_pos1 = buttonLabel+'_pos1';
    var label_pos2 = buttonLabel+'_pos2';
    var label_pos4 = buttonLabel+'_pos4';
    var label_pos8 = buttonLabel+'_pos8';

    //Update the four positions of the column of interest
    if (col.position1 === 'on'){
        document.getElementById(label_pos1).style.backgroundColor = 'red';
    }
    else{
        document.getElementById(label_pos1).style.backgroundColor = 'silver';
    }


    if (col.position2 === 'on'){
        document.getElementById(label_pos2).style.backgroundColor = 'red';
    }
    else{
        document.getElementById(label_pos2).style.backgroundColor = 'silver';
    }


    if (col.position4 === 'on'){
        document.getElementById(label_pos4).style.backgroundColor = 'red';
    }
    else{
        document.getElementById(label_pos4).style.backgroundColor = 'silver';
    }
    

    if (col.position8 === 'on'){
        document.getElementById(label_pos8).style.backgroundColor = 'red';
    }
    else{
        document.getElementById(label_pos8).style.backgroundColor = 'silver';
    }



};

