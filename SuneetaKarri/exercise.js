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

var hours = ("00" + time.getHours()).slice(-2);
    minutes = ("00" + time.getMinutes()).slice(-2);
    seconds = ("00" + time.getSeconds()).slice(-2);

  return{

   hour_col51 : hours.slice(0,1),
   hour_col52 : hours.slice(1,2),
   min_col53 : minutes.slice(0,1),
   min_col54 : minutes.slice(1,2),
   sec_col55 : seconds.slice(0,1),
   sec_col56 : seconds.slice(1,2)
   };
    };

exercise.binary = function(time, col){
    var hours = ("00" + time.getHours()).slice(-2);
    minutes = ("00" + time.getMinutes()).slice(-2);
    seconds = ("00" + time.getSeconds()).slice(-2);

  return{

   hour_col1 : hours.slice(0,1),
   hour_col2 : hours.slice(1,2),
   min_col1 : minutes.slice(0,1),
   min_col2 : minutes.slice(1,2),
   sec_col1 : seconds.slice(0,1),
   sec_col2 : seconds.slice(1,2)
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

};