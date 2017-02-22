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
    str_time = String(time);
    str_list = str_time.split(" ");
    time = str_list[4];
    hour_col1 = time[0];
    hour_col2 = time[1];
    min_col1 = time[3];
    min_col2 = time[4];
    sec_col1 = time[6];
    sec_col2 = time[7];
    document.getElementById('hr1r').innerText = String(hour_col1);
    document.getElementById('hr2r').innerText = String(hour_col2);
    document.getElementById('min1r').innerText = String(min_col1);
    document.getElementById('min2r').innerText = String(min_col2);
    document.getElementById('sec1r').innerText = String(sec_col1);
    document.getElementById('sec2r').innerText = String(sec_col2);


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

    str_time = String(time);
    str_list = str_time.split(" ");
    time = str_list[4];
    hour_1 = time[0];
    hour_2 = time[1];
    min_1 = time[3];
    min_2 = time[4];
    sec_1 = time[6];
    sec_2 = time[7];


    hr12 = document.getElementById('hr12');
    hr11 = document.getElementById( 'hr11' );
    hr28 = document.getElementById('hr28');
    hr24 = document.getElementById( 'hr24' );
    hr22 = document.getElementById('hr22');
    hr21 = document.getElementById( 'hr21' );
    min14 = document.getElementById('min14');
    min12 = document.getElementById( 'min12' );
    min11 = document.getElementById('min11');
    min28 = document.getElementById( 'min28' );
    min24 = document.getElementById('min24');
    min22 = document.getElementById( 'min22' );
    min21 = document.getElementById('min21');
    sec14 = document.getElementById('sec14');
    sec12 = document.getElementById('sec12' );
    sec11 = document.getElementById('sec11');
    sec28 = document.getElementById( 'sec28' );
    sec24 = document.getElementById('sec24');
    sec22 = document.getElementById( 'sec22' );
    sec21 = document.getElementById('sec21');



    if (col == 'hour_col_1'){
        if (hour_1 == 2){
            hr12.style.backgroundColor = 'red';
        } else if (hour_1 == 1) {
            hr11.style.backgroundColor = 'red';
        }
    } else if (col == 'hour_col_2'){
        if (hour_2 >= 8){
            hr28.style.backgroundColor = 'red';
            hour_2 -= 8;
        }
        if (hour_2 >= 4){
            hr24.style.backgroundColor = 'red';
            hour_2 -= 4;
        }
        if (hour_2 >= 2){
            hr22.style.backgroundColor = 'red';
            hour_2 -= 2;
        }
        if (hour_2 >= 1){
            hr21.style.backgroundColor = 'red';
        }
    } else if (col == 'min_col_1'){
        if (min_1>= 4){
            min14.style.backgroundColor = 'red';
            min_1 -= 4;
        }
        if (min_1 >= 2){
            min12.style.backgroundColor = 'red';
            min_1 -= 2;
        }
        if (min_1 >= 1){
            min11.style.backgroundColor = 'red';
        }

    } else if (col == 'min_col_2'){
        if (min_2 >= 8){
            min28.style.backgroundColor = 'red';
            min_2 -= 8;
        }
        if (min_2 >= 4){
            min24.style.backgroundColor = 'red';
            min_2 -= 4;
        }
        if (min_2 >= 2){
            min22.style.backgroundColor = 'red';
            min_2 -= 2;
        }
        if (min_2 >= 1){
            min21.style.backgroundColor = 'red';
        }
    } else if (col == 'sec_col_1'){
        if (sec_1>= 4){
            sec14.style.backgroundColor = 'red';
            sec_1 -= 4;
        }
        if (sec_1 >= 2){
            sec12.style.backgroundColor = 'red';
            sec_1 -= 2;
        }
        if (sec_1 >= 1){
            sec11.style.backgroundColor = 'red';
        }

    } else if (col == 'sec_col_2'){
        if (sec_2 >= 8){
            sec28.style.backgroundColor = 'red';
            sec_2 -= 8;
        }
        if (sec_2 >= 4){
            sec24.style.backgroundColor = 'red';
            sec_2 -= 4;
        }
        if (sec_2 >= 2){
            sec22.style.backgroundColor = 'red';
            sec_2 -= 2;
        }
        if (sec_2 >= 1){
            sec21.style.backgroundColor = 'red';
        }
    }

};