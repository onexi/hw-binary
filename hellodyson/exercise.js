var exercise = {};


exercise.roman = function (time) {
    //split time into h,m,and secs
    hour = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();
    //console.log(hours,mins,secs)

    var result = {
        hour_col1: (hour - hour % 10) / 10,
        hour_col2: hour % 10,
        min_col1: (min - min % 10) / 10,
        min_col2: min % 10,
        sec_col1: (sec - sec % 10) / 10,
        sec_col2: sec % 10,
    }
    //console.log(result)
    return result;
};

exercise.binary = function (time, col) {
    //get binary number
    var num = exercise.roman(time)[col].toString(2);
    while (num.length < 4) {
        num = "0" + num;
    }
    //init
    var binary = {};
    //change binary var
    for (i = 0; i < 4; i++) {
        if (num[3 - i] === "0") {
            binary["position" + (2 ** i).toString()] = 'off';
        } else {
            binary["position" + (2 ** i).toString()] = 'on';
        }
    }
    //console.log(binary);
    return binary;
};