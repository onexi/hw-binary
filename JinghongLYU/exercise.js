var exercise = {};


exercise.roman = function(time){

    //    Return an object with roman time. 
    //    Time is reported using 6 columns.

    var stamp = {
        hour_col1: Math.floor(time.getHours()/10),
        hour_col2: (time.getHours() % 10),
        min_col1: Math.floor(time.getMinutes() / 10),
        min_col2: (time.getMinutes() % 10),
        sec_col1: Math.floor(time.getSeconds() / 10),
        sec_col2: (time.getSeconds() % 10)
    }
    return stamp;
};

exercise.binary = function(time, col){

    //    Return an object with
    //    the binary clock values 
    //    for the given column

    var stamp  = exercise.roman(time);
    var number = stamp[col];

	var binary = { 
        position8 : 'off', 
		position4 : 'off', 
		position2 : 'off', 
		position1 : 'off', 
    }; 

	if (number >= 8){
        binary.position8 = 'on';
        number -= 8;
    }
    if (number >= 4){
        binary.position4 = 'on';
        number -= 4;
    }
    if (number >= 2){
        binary.position2 = 'on';
        number -= 2;
    }
    if (number >= 1){
        binary.position1 = 'on';
        number -= 1;
    }
   return binary;

};