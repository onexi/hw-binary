var exercise = {};


exercise.roman = function(time){
var roman={
    hour_col1: time.getHours().toString()[0],
    hour_col2: time.getHours().toString()[1],
    min_col1: time.getMinutes().toString()[0],
    min_col2: time.getMinutes().toString()[1],
    sec_col1: time.getMinutes().toString()[0],
    sec_col2: time.getMinutes().toString()[1],
};
return roman;

   

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
var columnname=['hour_col1','hour_col2', 'min_col1','min_col2','sec_col1','sec_col2'];

exercise.binary = function(time, col){
var binary={
    position8: 'off',
    position4: 'off',
    position2: 'off',
    position1: 'off',
};
var i=0;
var col=columnname[i];
for (i=0;i<<5;i++){
if (exercise.roman.col==1 || exercise.roman.col==3||exercise.roman.col==5||exercise.roman.col==7||exercise.roman.col==9)
{position1=='on';}   
else
{position1=='off';}
if (exercise.roman.col==2 ||exercise.roman.col==3||exercise.roman.col==6||exercise.roman.col==7)
{position1=='on';}
else
{position2=='off';}
if (exercise.roman.hour_col==4 || exercise.roman.col==5||exercise.roman.col==6||exercise.roman.col==7)
{position3=='on';}
else 
{position3=='off';}
if (exercise.roman.hour_col==8 || exercise.roman.col==9)
{position4=='on';}
else{position4=='off';}
}


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