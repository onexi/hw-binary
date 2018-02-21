var exercise = {};

exercise.roman = function(time){

    //    Return an object with roman time
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var romanTime = {
        hour_col1 : Math.floor(hours / 10), 
        hour_col2 : hours % 10,
        min_col1  : Math.floor(minutes / 10),
        min_col2  : minutes % 10,
        sec_col1  : Math.floor(seconds / 10), 
        sec_col2  : seconds % 10,
    };

    return romanTime;

};

exercise.binary = function(time, col){

    //    Return an object with
    //    the binary clock values 
    //    for the given column
    var romanTime = exercise.roman(time);
    var digit = romanTime[col];
    var binaryStr = '000' + digit.toString(2);
    var binaryStr4 = binaryStr.substr(binaryStr.length - 4);
    var onOff = ['off', 'on'];

    var binary = {
        position8 : onOff[Number(binaryStr4.charAt(0))],
        position4 : onOff[Number(binaryStr4.charAt(1))],
        position2 : onOff[Number(binaryStr4.charAt(2))],
        position1 : onOff[Number(binaryStr4.charAt(3))]
    };

    return binary;

};

exercise.coordString = function(i, j){
    return i + '-' + j;
    
};