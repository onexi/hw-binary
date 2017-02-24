var exercise = {};


exercise.build = function () {
    exercise.dv.innerHTML = '<div id="hour" style="width: 230px; height: 450px;""></div>'; //build hour column
    exercise.dv.innerHTML += '<div id="min" style="left: 230px ;width: 230px; height: 450px;"></div>'; //build minute column
    exercise.dv.innerHTML += '<div id="sec" style="left: 460px; width: 230px; height: 450px;"></div>'; //build seconds column

var x = {};
x.one = 1;




    var mapping = {
        0: 'hour',
        1: 'min',
        2: 'sec',
    };

    for (var col = 0; col <= 2; col++) { //populate general columns with 2 columns including location
        var x = document.getElementById(mapping[col])
        for (var c = 0; c < 2; c++) {
            var strng
            strng = '<div id="' + mapping[col] + '_col' + (c + 1) + '" style="left:' + (10 + c * 110) + 'px; border:thin; background: inherit; ">';
            var k = 1;
            for (var pos = 8; pos >= 1; pos-= pos/2) {
                strng += ' <div id="' + mapping[col] + '_col' + (c + 1) + '_pos' + pos + '" style="top: ' + (10 + 110 * (k - 1)) + 'px; border: 1px solid black;'
                if ((col == 0 && c == 0 && pos == 4) || (c == 0 && pos == 8)) {
                    strng += 'visibility: hidden';
               
                };
                strng += '"></div>';
                     k++;
            };
             strng += ' <div id="' + mapping[col] + '_col' + (c + 1) + '_Roman_Digits" style="top: ' + (10 + 110 * (5 - 1)) + 'px;background: transparent;font-size: 90px; align:center;"></div>';
            strng += '</div >';
            x.innerHTML += strng;    
    }
    };
};



exercise.roman = function (time) {
    var hh = time.getHours();
    var mm = time.getMinutes();
    var ss = time.getSeconds();

    var timedigits = {
        hour_col1: (hh - hh % 10) / 10,
        hour_col2: hh % 10,
        min_col1: (mm - mm % 10) / 10,
        min_col2: mm % 10,
        sec_col1: (ss - ss % 10) / 10,
        sec_col2: ss % 10,
    };

    var list = [   
        'hour_col1',
        'hour_col2',
        'min_col1',
        'min_col2',
        'sec_col1',
        'sec_col2'];
        for (var k = 0; k <6 ; k++){
document.getElementById(list[k] + "_Roman_Digits").innerHTML = timedigits[list[k]];

        }





    return timedigits;
};

exercise.binary = function (time, col) { // (time,col)

    var romantime = exercise.roman(time);
    var timedigits = romantime[col];

    var binary = {
        pos8: 'off',
        pos4: 'off',
        pos2: 'off',
        pos1: 'off'
    };
    var mapping = {
        8: 'pos8',
        4: 'pos4',
        2: 'pos2',
        1: 'pos1'
    };

    for (var i = 8; i >= 1; i -= i / 2) {
        if (timedigits - i >= 0) {
            binary[mapping[i]] = 'on';
            timedigits -= i;
        };
    };

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
