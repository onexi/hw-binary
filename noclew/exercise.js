var exercise = {};


exercise.roman = function (time) {

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

    //-------------------------------------
    return {
        hour_col1: Number(time.getHours().toString()[0]),
        hour_col2: Number(time.getHours().toString()[1]),
        min_col1: Number(time.getMinutes().toString()[0]),
        min_col2: Number(time.getMinutes().toString()[1]),
        sec_col1: Number(Math.floor(time.getSeconds() / 10)),
        sec_col2: Number(time.getSeconds() % 10)
    };
};


exercise.binary = function (time, col) {

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

    var binary = {};
    if (col === 1) var myDigit = Number(Math.floor(time.getHours() / 10));
    else if (col === 2) var myDigit = Number(time.getHours() % 10);
    else if (col === 3) var myDigit = Number(Math.floor(time.getMinutes() / 10));
    else if (col === 4) var myDigit = Number(time.getMinutes() % 10);
    else if (col === 5) var myDigit = Number(Math.floor(time.getSeconds() / 10));
    else if (col === 6) var myDigit = Number(time.getSeconds() % 10);

    console.log(myDigit);
    //myDigit = time;
    if ((col !== 1) && (col !== 3) && (col !== 5)) {
        if (myDigit >= 8) {
            binary.position8 = 'on';
            myDigit -= 8;
        }
        else { binary.position8 = 'off'; }
    }

    if ((col !== 1)) {
        if (myDigit >= 4) {
            binary.position4 = 'on';
            myDigit -= 4;
        }
        else binary.position4 = 'off';
    }

    if (myDigit >= 2) {
        binary.position2 = 'on';
        myDigit -= 2;
    }
    else binary.position2 = 'off';

    if (myDigit == 1) {
        binary.position1 = 'on';
        myDigit -= 1;
    }
    else binary.position1 = 'off';

    console.log(binary);
    return binary;

};

exercise.placeDiv = function (binObj, col) {
    var posLeft = 50 + (col - 1) * 110;

    var div8;
    if (binObj.position8 === 'on') {
        div8 = document.createElement('div');
        div8.className = 'digitOn';
    }
    else if (binObj.position8 === 'off') {
        div8 = document.createElement('div');
        div8.className = 'digitOff';
    }
    else div8 = null;

    if (div8 !== null) {
        div8.style.left = posLeft + 'px';
        div8.style.posTop = 50;
        document.body.appendChild(div8);
    }


    var div4;
    if (binObj.position4 === 'on') {
        div4 = document.createElement('div');
        div4.className = 'digitOn';
    }
    else if (binObj.position4 === 'off') {
        div4 = document.createElement('div');
        div4.className = 'digitOff';
    }
    else div4 = null;

    if (div4 !== null) {
        div4.style.left = posLeft + 'px';
        div4.style.posTop = 160;
        document.body.appendChild(div4);
    }

    var div2;
    if (binObj.position2 === 'on') {
        div2 = document.createElement('div');
        div2.className = 'digitOn';
    }
    else if (binObj.position2 === 'off') {
        div2 = document.createElement('div');
        div2.className = 'digitOff';
    }
    else div2 = null;

    if (div2 !== null) {
        div2.style.left = posLeft + 'px';
        div2.style.posTop = 270;
        document.body.appendChild(div2);
    }


    var div1;
    if (binObj.position1 === 'on') {
        div1 = document.createElement('div');
        div1.className = 'digitOn';
    }
    else if (binObj.position1 === 'off') {
        div1 = document.createElement('div');
        div1.className = 'digitOff';
    }
    else div1 = null;

    if (div1 !== null) {
        div1.style.left = posLeft + 'px';
        div1.style.posTop = 380;
        document.body.appendChild(div1);
    }


};