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

    var formattedTime = returnTimeAsString(time);

        var romanTime = {
            "hour_col1":formattedTime[0],
            "hour_col2":formattedTime[1],
            "min_col1":formattedTime[3],
            "min_col2":formattedTime[4],
            "sec_col1":formattedTime[6],
            "sec_col2":formattedTime[7]
        };
        return romanTime;

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
    //var test = {[col]:(getPositions(time,col)),};
    // col.forEach(getPositions);
    // console.log(binary)
   
    var formattedTime = returnTimeAsString(time);
    var binary = {};
    binary = getPositions(formattedTime,col);
    return binary;
};

function returnTimeAsString(time){
    var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	if(hours.toString().length == 1){
		hours = "0"+hours;
	};
	if(minutes.toString().length == 1){
		minutes = "0"+minutes;
	};
	if(seconds.toString().length == 1){
		seconds = "0"+seconds;
	};
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    return formattedTime;
}


function getPositions(time,col){
    var timeString = getTimeValue(time,col);
    var positions = {};
    positions = positionSetting(timeString,col);
    return positions;
 }
 //this gets the value of what the time column should be based on where it is in the time string
function getTimeValue(time,col){
    var timeString = "";
    switch(col){
        case "hour_col1":
            timeString = time[0];
        break;
        case "hour_col2":
            timeString = time[1];
        break;
        case "min_col1":
            timeString = time[3]; //skipping the :
        break;
        case "min_col2":
            timeString = time[4];
        break;
        case "sec_col1":
            timeString = time[6];
        break;
        case "sec_col2":
            timeString = time[7];
        break;
        default:
            console.log(col +" :was sent instead");
    }
    return timeString;
}

function positionSetting(timeString,col){
    switch(timeString){
        case "0": 
            var binary = {
                position8:  'off', 
                position4:  'off',
                position2:  'off',
                position1:  'off',

            };
        break;
        case "1":
            var binary = {
                position8:  'off', 
                position4:  'off',
                position2:  'off',
                position1:  'on',

            };
        break;
        case "2":
            var binary = {
                position8:  'off', 
                position4:  'off',
                position2:  'on',
                position1:  'off',

            };
        break;
        case "3":
            var binary = {
                position8:  'off', 
                position4:  'off',
                position2:  'on',
                position1:  'on',

            };
        break;
        case "4":
            var binary = {
                position8:  'off', 
                position4:  'on',
                position2:  'off',
                position1:  'off',

            };
        break;
        case "5":
            var binary = {
                position8:  'off', 
                position4:  'on',
                position2:  'off',
                position1:  'on',

            };
        break;
        case "6":
            var binary = {
                position8: 'off', 
                position4: 'on',
                position2: 'on',
                position1: 'off',

            };
        break;
        case "7":
            var binary = {
                position8:  'off', 
                position4:  'on',
                position2:  'on',
                position1:  'on',

            };
        break;
        case "8":
            var binary = {
                position8:  'on', 
                position4:  'off',
                position2:  'off',
                position1:  'off',

            };
        break;
        case "9":
            var binary = {
                position8:  'on', 
                position4:  'off',
                position2:  'off',
                position1:  'on',

            };
        break;
        default: console.log("error in converting to binary");
    }
    return binary;
}