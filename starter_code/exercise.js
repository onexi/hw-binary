var exercise = {};


exercise.roman = function(time){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    
    //  For example, for 05:13:47 PMs
    tempTime1 = String(time);
    tempTime2 = tempTime1.split(" ");
    time = tempTime2[4];
    var currentTime = [0,0,0,0,0,0];

           currentTime[0] = parseInt(time[0]); 
           currentTime[1] = parseInt(time[1]); 
           currentTime[2] = parseInt(time[3]); 
           currentTime[3] = parseInt(time[4]); 
           currentTime[4] = parseInt(time[6]); 
           currentTime[5] = parseInt(time[7]); 

        return{ 
           hour_col1 : currentTime[0], 
           hour_col2 : currentTime[1], 
           min_col1  : currentTime[2],  
           min_col2  : currentTime[3],  
           sec_col1  : currentTime[4], 
           sec_col2  : currentTime[5] 
         };
         
    // 
    //-------------------------------------

};

exercise.binary = function(time, col){

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
      	var localbinary = { 
        position8 : 'off', 
		position4 : 'off', 
		position2 : 'off', 
		position1 : 'off', 
    }; 

        var currentTime = exercise.roman(time);

        if(col=='hour_col1')
            var columnDigit = currentTime.hour_col1;
        else if(col=='hour_col2')
            var columnDigit = currentTime.hour_col2;
        else if(col=='min_col1')
            var columnDigit = currentTime.min_col1;
        else if(col=='min_col2')
            var columnDigit = currentTime.min_col2;
        else if(col=='sec_col1')
            var columnDigit = currentTime.sec_col1;
        else if(col=='sec_col2')
            var columnDigit = currentTime.sec_col2;


                if((columnDigit)>=8)
                {
                    
                   localbinary.position8 = 'on';
                    columnDigit = columnDigit - 8;
                }
                else 
                {
                    localbinary.position8 = 'off';
                }
                if((columnDigit)>=4)
                {
                    localbinary.position4 = 'on';
                    columnDigit = columnDigit - 4;
                }
                else
                {
                    localbinary.position4 = 'off';
                }
                if((columnDigit)>=2)
                {
                    localbinary.position2 = 'on';
                    columnDigit = columnDigit - 2;
                }
                else
                {
                    localbinary.position2 = 'off';
                }
                if((columnDigit)>=1)
                {
                    localbinary.position1 = 'on';
                    columnDigit = columnDigit - 1;
                }
                else
                {
                    localbinary.position1 = 'off';
                }
            

 return localbinary;
    // 
    //----------------------------------------------------------

};