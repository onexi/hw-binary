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
    var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        //if(hour<10){document.getElementById('block5_-1').innerHTML = 'time';
        //           document.getElementById('block6_-1').innerHTML = '';};

        //if((hour >10)&&(hour<20)){document.getElementById()};
        var hr1stDigit = (Math.floor(hour / 10)) % 10;
        var hr2ndDigit = hour % 10;
        var min1stDigit = (Math.floor(minutes / 10)) % 10;
        var min2ndDigit = minutes % 10;
        var sec1stDigit = (Math.floor(seconds / 10)) % 10;
        var sec2ndDigit = seconds % 10;
        console.log(hour)
        console.log(minutes)
        console.log(seconds)
        document.getElementById('box1_0').textContent = sec2ndDigit;
        document.getElementById('box2_0').textContent= sec1stDigit;
        document.getElementById('box3_0').textContent = min2ndDigit;
        document.getElementById('box4_0').textContent = min1stDigit;
        document.getElementById('box5_0').textContent = hr2ndDigit;
        document.getElementById('box6_0').textContent = hr1stDigit;

    
};

exercise.binary = function(time){
    document.getElementById('box6_1').style.background = "grey";
    document.getElementById('box6_2').style.background = "grey";
    document.getElementById('box5_1').style.background = "grey";
    document.getElementById('box5_2').style.background = "grey";
    document.getElementById('box5_3').style.background = "grey";
    document.getElementById('box5_4').style.background = "grey";
    document.getElementById('box4_1').style.background = "grey";
    document.getElementById('box4_2').style.background = "grey";
    document.getElementById('box4_3').style.background = "grey";
    document.getElementById('box3_1').style.background = "grey";
    document.getElementById('box3_2').style.background = "grey";
    document.getElementById('box3_3').style.background = "grey";
    document.getElementById('box3_4').style.background = "grey";
    document.getElementById('box2_1').style.background = "grey";
    document.getElementById('box2_2').style.background = "grey";
    document.getElementById('box2_3').style.background = "grey";
    document.getElementById('box1_1').style.background = "grey";
    document.getElementById('box1_2').style.background = "grey";
    document.getElementById('box1_3').style.background = "grey";
    document.getElementById('box1_4').style.background = "grey";

    
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

    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var pos1val;
    var pos2val;
    var pos4val;
    var pos8val;

    //Col 1
    var hr1stDigit = (Math.floor(hour / 10)) % 10;
    var hrcol1bin = parseInt(hr1stDigit, 10).toString(2);
       
    var count0col1 = 4 - hrcol1bin.length;
     //seccol2bin = seccol2bin.toString();
       for (i = 0; i < count0col1; i++) {
            hrcol1bin = '0'+hrcol1bin;
        }
       pos1val= hrcol1bin[3]
       pos2val= hrcol1bin[2]
       pos4val= hrcol1bin[1]
       pos8val = hrcol1bin[0]
       if (pos1val == 1){document.getElementById('box6_1').style.background = "red"};
       if (pos2val == 1){document.getElementById('box6_2').style.background = "red"};
       //if (pos4val == 1){document.getElementById('box5_2').style.background = "red"};
       //if (pos8val == 1){document.getElementById('box5_2').style.background = "red"};

    //Col 2
    var hr2ndDigit = hour % 10;
    var hrcol2bin = parseInt(hr2ndDigit, 10).toString(2);
       
    var count0col2 = 4 - hrcol2bin.length;
    //hrcol2bin = hrcol2bin.toString();
       for (i = 0; i < count0col2; i++) {
            hrcol2bin = '0'+hrcol2bin;
        }
       pos1val= hrcol2bin[3]
       pos2val= hrcol2bin[2]
       pos4val= hrcol2bin[1]
       pos8val = hrcol2bin[0]
       if (pos1val == 1){document.getElementById('box5_1').style.background = "red"};
       if (pos2val == 1){document.getElementById('box5_2').style.background = "red"};
       if (pos4val == 1){document.getElementById('box5_3').style.background = "red"};
       if (pos8val == 1){document.getElementById('box5_4').style.background = "red"};
    
   //Col 3
    var min1stDigit = (Math.floor(minutes / 10)) % 10;
    var mincol1bin = parseInt(min1stDigit, 10).toString(2);
       
    var count0col3 = 4 - mincol1bin.length;
    //mincol1bin = mincol1bin.toString();
       for (i = 0; i < count0col3; i++) {
            mincol1bin = '0'+mincol1bin;
        }
       pos1val= mincol1bin[3]
       pos2val= mincol1bin[2]
       pos4val= mincol1bin[1]
       pos8val = mincol1bin[0]
       if (pos1val == 1){document.getElementById('box4_1').style.background = "red"};
       if (pos2val == 1){document.getElementById('box4_2').style.background = "red"};
       if (pos4val == 1){document.getElementById('box4_3').style.background = "red"};
       //if (pos8val == 1){document.getElementById('box4_4').style.background = "red"};

    // Col 4
    var min2ndDigit = minutes % 10;
    var mincol2bin = parseInt(min2ndDigit, 10).toString(2);
       
    var count0col4 = 4 - mincol2bin.length;
    //mincol2bin = mincol2bin.toString();
       for (i = 0; i < count0col4; i++) {
            mincol2bin = '0'+mincol2bin;
        }
       pos1val= mincol2bin[3]
       pos2val= mincol2bin[2]
       pos4val= mincol2bin[1]
       pos8val = mincol2bin[0]
       if (pos1val == 1){document.getElementById('box3_1').style.background = "red"};
       if (pos2val == 1){document.getElementById('box3_2').style.background = "red"};
       if (pos4val == 1){document.getElementById('box3_3').style.background = "red"};
       if (pos8val == 1){document.getElementById('box3_4').style.background = "red"};


    //COl 5
    var sec1stDigit = (Math.floor(seconds / 10)) % 10;
    var seccol1bin = parseInt(sec1stDigit, 10).toString(2);
       
    var count0col5 = 4 - seccol1bin.length;
    //seccol1bin = seccol1bin.toString();
    for (i = 0; i < count0col5; i++) {
            seccol1bin = '0'+seccol1bin;
        }
       pos1val= seccol1bin[3]
       pos2val= seccol1bin[2]
       pos4val= seccol1bin[1]
       pos8val = seccol1bin[0]
       if (pos1val == 1){document.getElementById('box2_1').style.background = "red"};
       if (pos2val == 1){document.getElementById('box2_2').style.background = "red"};
       if (pos4val == 1){document.getElementById('box2_3').style.background = "red"};
       //if (pos8val == 1){document.getElementById('box5_2').style.background = "red"};


    //Last Column
    var sec2ndDigit = seconds % 10;
    var seccol2bin = parseInt(sec2ndDigit, 10).toString(2);

    var count0col6 = 4 - seccol2bin.length;
    console.log("count " + count0col6)
     seccol2bin = seccol2bin.toString();
       for (i = 0; i < count0col6; i++) {
            seccol2bin = '0'+seccol2bin;
        }
       pos1val= seccol2bin[3]
       pos2val= seccol2bin[2]
       pos4val= seccol2bin[1]
       pos8val = seccol2bin[0]
       
       if (pos1val == '1'){document.getElementById('box1_1').style.background = "red"};
       if (pos2val == '1'){document.getElementById('box1_2').style.background = "red"};
       if (pos4val == '1'){document.getElementById('box1_3').style.background = "red"};
       if (pos8val == '1'){document.getElementById('box1_4').style.background = "red"};
       console.log(document.getElementById('box1_4').style.color)


      



    
    

};