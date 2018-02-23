

var exercise = {};
exercise.roman = function(time){
    var time= new Date();
    var hc1 = ~~(time.getHours()/10);
    var hc2 = ~~(time.getHours()%10);
    var mc1 = ~~(time.getMinutes()/10);
    var mc2 = ~~(time.getMinutes()%10);
    var sc1 = ~~(time.getSeconds()/10);
    var sc2 = ~~(time.getSeconds()%10);
    
var SetRomanTime={ 
    hour_col1: hc1,
    hour_col2: hc2,
    min_col1: mc1,
    min_col2: mc2,
    sec_col1: sc1,
    sec_col2: sc2};

    return SetRomanTime;
//console.log(SetRomanTime);

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
//console.log(columnname);
//exercise.binary code

exercise.binary = function(time, column){

var col1value=exercise.roman(time).hour_col1;
var col2value=exercise.roman(time).hour_col2;
var col3value=exercise.roman(time).min_col1;
var col4value=exercise.roman(time).min_col2;
var col5value=exercise.roman(time).sec_col1;
var col6value=exercise.roman(time).sec_col2;
var values=[col1value,col2value,col3value,col4value,col5value,col6value]



var col={
            position1 : 'off',
            position2 : 'off',
            position3 : 'off',
            position4 : 'off',
        };

//console.log(col);

//checking rules
    var number=values[column-1];
//console.log(number);
    if (number==1)
    {
            col.position1='on';
            col.position2='off';
            col.position3='off';
            col.position4='off';

    }
    else if (number==2)
    {       
            col.position1='off';
            col.position2='on';
            col.position3='off';
            col.position4='off';

    }
    if (number==3)
    
        {
            col.position1='on';
            col.position2='on';
            col.position3='off';
            col.position4='off';
        };

    if (number==4)
    
        {
            col.position1='off';
            col.position2='off';
            col.position3='on';
            col.position4='off';
        };
    if (number==5)
   
        {
            col.position1='on';
            col.position2='off';
            col.position3='on';
            col.position4='off';
        };
    
    if (number==6)
    
        {
            col.position1='off';
            col.position2='on';
            col.position3='on';
            col.position4='off';
        };
    
    if (number==7)
    
        {
            col.position1='on';
            col.position2='on';
            col.position3='on';
            col.position4='off';
        };
    
    if (number==8)
   
        {
            col.position1='off';
            col.position2='off';
            col.position3='off';
            col.position4='on';
        };
    
    if (number==9)
    
        {
            col.position1='on';
            col.position2='off';
            col.position3='off';
            col.position4='on';
        };
return col;


};


//     //----------------------------------------------------------
//     //  YOUR CODE
//     //    Return an object with
//     //    the binary clock values 
//     //    for the given column
//     //
//     //  For example, for time 05:13:47 PM, and column hour_col2
//     //    var binary = { 
//     //        position8 : 'off', 
//     //        position4 : 'on', 
//     //        position2 : 'on', 
//     //        position1 : 'on', 
//     //    }; 
//     // 
//     //----------------------------------------------------------

// // 