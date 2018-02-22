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

    var romanTime ={
               hour_col1 : 0, 
               hour_col2 : 0,
               min_col1  : 0, 
               min_col2  : 0, 
               sec_col1  : 0, 
               sec_col2  : 0
             };
         

             var hour=time.getHours();
             var min=time.getMinutes();
             var sec=time.getSeconds();
             
             romanTime.hour_col1= Math.floor(hour/10);
             romanTime.hour_col2= (hour%10);
            
             romanTime.min_col1= Math.floor(min/10);
             romanTime.min_col2= (min%10);
             
             romanTime.sec_col1= Math.floor(sec/10);
             romanTime.sec_col2= (sec%10);

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



    var binary = { 
                position8 : 'off', 
                position4 : 'on', 
                position2 : 'on', 
                position1 : 'on', 
            };


            var hour= time.getHours();
            var min=time.getMinutes();
            var sec=time.getSeconds();

                        
switch(col)
{
case 0: return val( Math.floor(hour/10)) ;
case 1: return val( (hour)%10) ;
case 2: return val(Math.floor(min/10));
case 3: return val( (min)%10) ;
case 4: return val(Math.floor(sec/10)) ;
case 5: return val((sec)%10) ;
}

function val (item) {


    switch(item)
    {
    case 0: { binary.position8='off';  binary.position4='off';  binary.position2='off';  binary.position1='off'; return  binary;  } ;
    case 1: { binary.position8='off';  binary.position4='off';  binary.position2='off';  binary.position1='on';  return  binary;  } ;
    case 2: { binary.position8='off';  binary.position4='off';  binary.position2='on';   binary.position1='off'; return  binary;  } ;
    case 3: { binary.position8='off';  binary.position4='off';  binary.position2='on';   binary.position1='on';  return  binary;  } ;
    case 4: { binary.position8='off';  binary.position4='on';   binary.position2='off';  binary.position1='off'; return  binary;  } ;
    case 5: { binary.position8='off';  binary.position4='on';   binary.position2='off';  binary.position1='on';  return  binary;  } ;
    case 6: { binary.position8='off';  binary.position4='on';   binary.position2='on';   binary.position1='off'; return  binary;  } ;
    case 7: { binary.position8='off';  binary.position4='on';   binary.position2='on';   binary.position1='on';  return  binary;  } ;
    case 8: { binary.position8='on';   binary.position4='off';  binary.position2='off';  binary.position1='off'; return  binary;  } ;
    case 9: { binary.position8='on';   binary.position4='off';  binary.position2='off';  binary.position1='on';  return  binary;  } ;
  
    }

}

}