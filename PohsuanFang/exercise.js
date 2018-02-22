
var exercise = {};

exercise.roman = function(time){
    var time= new Date();
    var hc1 = ~~(time.getHours()/10);
    var hc2 = time.getHours()%10;
    var mc1 = ~~(time.getMinutes()/10);
    var mc2 = time.getMinutes()%10;
    var sc1 = ~~(time.getSeconds()/10);
    var sc2 = time.getSeconds()%10;
    
var roman={ 
    hour_col1: hc1,
    hour_col2: hc2,
    min_col1: mc1,
    min_col2: mc2,
    sec_col1: sc1,
    sec_col2: sc2};
// console.log(roman);
return roman;
};





   
//if for hours and minutes six different
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


var columnname=['hour_col1','hour_col2', 'min_col1','min_col2','sec_col1','sec_col2'];
console.log(columnname);
//exercise.binary code
exercise.binary = function(time, col){
var p8='off';
var p4='off';
var p2='off';
var p1='off';
var get1=exercise.roman(time).hour_col1;

var hour_col1={
    position8: p8,
    position4: p4,
    position2: p2,
    position1: p1,
};
if (get1==1 || get1==3||get1==5||get1==7||get1==9)
{p1=='on';}   
else
{p1=='off';}
if (get1==2 ||get1==3||get1==6||get1==7)
{p2=='on';}
else
{p2=='off';}
if (get1==4 || get1==5||get1==6||get1==7)
{p3=='on';}
else 
{p3=='off';}
if (get1==8 || get1==9)
{p4=='on';}
else{p4=='off';}
}
// var hour_col2={
//     position8: p8,
//     position4: p4,
//     position2: p2,
//     position1: p1,
// };
// var min_col1={};
// var min_col2={};
// var sec_col1={};
// var sec_col2={}; 

// var getcolumnvalue=exercise.roman(time).col;
// var col=columnname[i]
// console.log(exercise.roman(time).hour_col1);
// // var binary={
// //     position8: p8,
// //     position4: p4,
// //     position2: p2,
// //     position1: p1, };

// // var i=0;
// var col=columnname[i];
// for (i=0;i<<5;i++){
// if (exercise.roman.col==1 || exercise.roman.col==3||exercise.roman.col==5||exercise.roman.col==7||exercise.roman.col==9)
// {position1=='on';}   
// else
// {position1=='off';}
// if (exercise.roman.col==2 ||exercise.roman.col==3||exercise.roman.col==6||exercise.roman.col==7)
// {position1=='on';}
// else
// {position2=='off';}
// if (exercise.roman.hour_col==4 || exercise.roman.col==5||exercise.roman.col==6||exercise.roman.col==7)
// {position3=='on';}
// else 
// {position3=='off';}
// if (exercise.roman.hour_col==8 || exercise.roman.col==9)
// {position4=='on';}
// else{position4=='off';}
// }
// return binary;

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

// };