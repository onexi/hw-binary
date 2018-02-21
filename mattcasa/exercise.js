var exercise = {};

exercise.roman = function(time){
    var roman = {
        hour_col1: 0,
        hour_col2: 0,
        min_col1: 0,
        min_col2: 0,      
        sec_col1: 0,
        sec_col2: 0, 
    };
    min = time.getMinutes();
	if(min>9){
		exercise.roman.min_col1 = min.toString()[0];
		exercise.roman.min_col2 = min.toString()[1];
	}
	else{
		exercise.roman.min_col1 = 0;
		exercise.roman.min_col2 = min.toString()[0];
    };
    sec = time.getSeconds();
	if(sec>9){
		exercise.roman.sec_col1 = sec.toString()[0];
		exercise.roman.sec_col2 = sec.toString()[1];
	}
	else{
		exercise.roman.sec_col1 = 0;
		exercise.roman.sec_col2 = sec.toString()[0];
	};
    hour = time.getHours();
	if(hour>9){
		exercise.roman.hour_col1 = hour.toString()[0];
		exercise.roman.hour_col2 = hour.toString()[1];
	}
	else{
		exercise.roman.hour_col1 = 0;
		exercise.roman.hour_col2 = hour.toString()[0];
    };
    


    //console.log(hour_col2);
    //console.log(min_col1);
    //console.log(min_col2);
    //console.log(sec_col1);
    //console.log(sec_col2);
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

};


exercise.binary = function(time, col){

    if (time == 0){
        exercise.binary.position1 = 'off'
        exercise.binary.position2 = 'off'  
        exercise.binary.position4 = 'off'  
        exercise.binary.position8 = 'off'  
    }
    if (time == 1){
        exercise.binary.position1 = 'on'
        exercise.binary.position2 = 'off'  
        exercise.binary.position4 = 'off'  
        exercise.binary.position8 = 'off'    
    }
    if (time == 2){
        exercise.binary.position1 = 'off'
        exercise.binary.position2 = 'on'  
        exercise.binary.position4 = 'off'  
        exercise.binary.position8 = 'off'    
    }
    if (time == 3){
        exercise.binary.position1 = 'on'
        exercise.binary.position2 = 'on'  
        exercise.binary.position4 = 'off'  
        exercise.binary.position8 = 'off'    
    }
    if (time == 4){
        exercise.binary.position1 = 'off'
        exercise.binary.position2 = 'off'  
        exercise.binary.position4 = 'on'  
        exercise.binary.position8 = 'off'    
    }
    if (time == 5){
        exercise.binary.position1 = 'on'
        exercise.binary.position2 = 'off'  
        exercise.binary.position4 = 'on'  
        exercise.binary.position8 = 'off'    
    }
    if (time == 6){
        exercise.binary.position1 = 'off'
        exercise.binary.position2 = 'on'  
        exercise.binary.position4 = 'on'  
        exercise.binary.position8 = 'off'    
    }
    if (time == 7){
        exercise.binary.position1 = 'on'
        exercise.binary.position2 = 'on'  
        exercise.binary.position4 = 'on'  
        exercise.binary.position8 = 'off'    
    }
    if (time == 8){
        exercise.binary.position1 = 'off'
        exercise.binary.position2 = 'off'  
        exercise.binary.position4 = 'off'  
        exercise.binary.position8 = 'on'    
    }
    if (time == 9){
        exercise.binary.position1 = 'on'
        exercise.binary.position2 = 'off'  
        exercise.binary.position4 = 'off'  
        exercise.binary.position8 = 'on'    
    }

    //console.log(exercise.binary.position1)
    //console.log(exercise.binary.position2)
    //console.log(exercise.binary.position4)
    //console.log(exercise.binary.position8)
    
   

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

};

