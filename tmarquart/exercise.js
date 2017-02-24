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

    var hrs;
    var hr1;
    var hr2;
    var minutes;
    var min1;
    var min2;
    var seconds;
    var sec1;
    var sec2;


    hrs=time.getHours();
    minutes=time.getMinutes();
    seconds=time.getSeconds();


//FAKE TIME!!

//console.log(Number(hr1)); doesnt work

    hr1=(hrs-hrs%10)/10;
    hr2=hrs%10;
    min1=(minutes-minutes%10)/10;
    min2=minutes%10;
    sec1=(seconds-seconds%10)/10;
    sec2=seconds%10;


document.getElementById("H1").innerHTML=hr1;
document.getElementById("H2").innerHTML=hr2;
document.getElementById("H3").innerHTML=min1;
document.getElementById("H4").innerHTML=min2;
document.getElementById("H5").innerHTML=sec1;
document.getElementById("H6").innerHTML=sec2;

    // return  { 
    //     hour_col1 : hr1, 
    //     hour_col2 : hr2,
    //     min_col1  : min1, 
    //     min_col2  : min2, 
    //     sec_col1  : sec1, 
    //     sec_col2  : sec2
    // };

return [hr1,hr2,min1,min2,sec1,sec2];

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

//document.getElementById('Bin21').style.backgroundColor='red';

//Number(42).toString(2); "101010"
//console.log((42).toString(2).split("")) -> ["1", "0", "1", "0", "1", "0"]
//console.log(time.getSeconds())

var hr1a;
var hr2a;
var min1a;
var min2a;
var sec1a;
var sec2a;

// console.log(time[0])

//console.log(hr1,hr2,min1,min2,sec1,sec2)
hr1a=time[0].toString(2).split("")
hr2a=time[1].toString(2).split("")
min1a=time[2].toString(2).split("")
min2a=time[3].toString(2).split("")
sec1a=time[4].toString(2).split("")
sec2a=time[5].toString(2).split("")
//console.log(sec2a);

setColors(hr1a,1);
setColors(hr2a,2);
setColors(min1a,3);
setColors(min2a,4);
setColors(sec1a,5);
setColors(sec2a,6);





};

function setColors(inputArray,col){
    var tag;
    var row;
    tag="Bin"+col;

    for (var i=0;i<4;i++){
        row=4-i;
        if (inputArray.length>i){
            if (inputArray[inputArray.length-i-1]==1){
                document.getElementById(tag+row).style.backgroundColor='red';
            } else{
                document.getElementById(tag+row).style.backgroundColor='silver';
            }
        } else{
            document.getElementById(tag+row).style.backgroundColor='silver';
        }
    }

}