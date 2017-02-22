var exercise = {};

exercise.roman = function(time){

    var response ={
        hour_col1 : 0, 
        hour_col2 : 0,
        min_col1  : 0, 
        min_col2  : 0, 
        sec_col1  : 0, 
        sec_col2  : 0,
    };
    //var now = time;

    //console.log (time);
    
    response.hour_col1 =Math.floor(time.getHours()/10);
    response.hour_col2 =time.getHours()%10;

    response.min_col1 =Math.floor(time.getMinutes()/10);
    response.min_col2 =time.getMinutes()%10;

    response.sec_col1 =Math.floor(time.getSeconds()/10);
    response.sec_col2 =time.getSeconds()%10;

    return response;
   // return [hour_col1, hour_col2, min_col1, min_col2, sec_col1, sec_col2];
};

exercise.binary = function(time, col){

    var binary= {
        position8: 'off',
        position4: 'off', 
        position2: 'off', 
        position1: 'off', 
    }
    
    var num =0;
    //var now = time;

    if (col=='hour_col1'){num=Math.floor(time.getHours()/10);}
    else if (col=='hour_col2'){num=time.getHours()%10;}
    else if (col=='min_col1'){num=Math.floor(time.getMinutes()/10);}
    else if (col=='min_col2'){num=time.getMinutes()%10;}
    else if (col=='sec_col1'){num=Math.floor(time.getSeconds()/10);}
    else if (col=='sec_col2'){num=time.getSeconds()%10;}

    //console.log("col: " + col + " num: "+num +" time: "+ time);
    
// console.log("col: " + col + "num: "+ num);
    if (num>=8) {binary.position8= 'on'; num -=8;}
    if (num>=4) {binary.position4= 'on'; num -=4;}
    if (num>=2) {binary.position2= 'on'; num -=2;}
    if (num>=1) {binary.position1= 'on'; num -=1;}


  //  console.log(" pos8: "+ binary.position8+ " pos4: "+ binary.position4 + " pos2: "+ binary.position2 + " pos1: "+ binary.position1);

    return binary;



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

