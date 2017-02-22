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

	
    var roman_return = { 
	
		hour_col1 : (time.getHours()-time.getHours()%10)/10, 
		hour_col2 : time.getHours()%10,
		min_col1  : (time.getMinutes()-time.getMinutes()%10)/10, 
		min_col2  : time.getMinutes()%10, 
		sec_col1  : (time.getSeconds()-time.getSeconds()%10)/10, 
		sec_col2  : time.getSeconds()%10
	}
	
	return roman_return;
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
	
	var value;
	
	if (col=== 'hour_col1'){

	value=(time.getHours()-time.getHours()%10)/10;
	}
	
	if (col=== 'hour_col2'){

	value=time.getHours()%10;
	}
	
	if (col=== 'min_col1'){

	value=(time.getMinutes()-time.getMinutes()%10)/10;
	}
	
	if (col=== 'min_col2'){

	value=time.getMinutes()%10;
	}
	
	if (col=== 'sec_col1'){

	value=(time.getSeconds()-time.getSeconds()%10)/10;
	}
	
	if (col=== 'sec_col2'){

	value=time.getSeconds()%10;
	}
	

	var binary_return = { 
	 
		position8 : 'off', 
        position4 : 'off', 
        position2 : 'off', 
        position1 : 'off',
		
				
	}

	if (value>=8) {
		binary_return.position8 = 'on';
		value-=8;
	}
	if (value>=4) {			
		binary_return.position4 = 'on';
		value-=4;
	}			
	if (value>=2) {
		binary_return.position2 = 'on';
		value-=2;
	}
	if (value>=1) {
		binary_return.position1 = 'on';
	}
						

	
	return binary_return;

};