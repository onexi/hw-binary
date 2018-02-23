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
    return exercise.cleanseTime(time, asObj=false);

};
exercise.cleanseTime = function (time, asObj=true) {
	/*Returns time as Object / string through they can be printed
	on columns */ 
	var stringTime = String(time); //so we dont have to stringize everytime
	if (asObj==true) {
		var obj = {"hour": stringTime.slice(16,18),
				   "minute":stringTime.slice(19,21),
				   "second": stringTime.slice(22,24),
			};
		return obj;
	}
	else {
		return stringTime.slice(16,24).replace(/:/g,""); //regex g to replace all instances
	}
    //console.log(obj);
}

exercise.convertPositionArraytoSignals = function(positionArray) {
    var binary = {
        "position8":"",
        "position4":"",
        "position2":"",
        "position1":""
    }
    for(var i=0;i<positionArray.length;i++) {
        var tempLight = "off";
        if (positionArray[i]) {
            tempLight = "on";
        }
        else {
            tempLight = "off"
        }
        binary["position"+Math.pow(2,i)] = tempLight;
    }
    return binary;
}
    
exercise.binary = function(time, col, outputFormat="obj"){
    // Assumed columns to be numbers (indexed from 0), and not in the format hour_col2
    // So, for 05:13:47 and column nunber 0, element to process to binary would be 0
    // Returns positions array from 0 to 4, 0 being the bottom position
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
    var positions = new Array(4).fill(false); //initialize all positions to false
    var toConvert = Number(exercise.cleanseTime(time,osObj=false)[col]); //To convert is a number to be converted positions
    // Find highest power of two contained by the number
    if (toConvert == 0) {
        if (outputFormat == "obj") {
            return exercise.convertPositionArraytoSignals(positions);
        }
        else
            return positions;
    }
    var tempVar = toConvert;
    var highestPowerof2 = 0;
    while (tempVar > 1) {
        tempVar = Math.floor(tempVar/2); //Integer division
        highestPowerof2++;
    }
    positions[highestPowerof2] = true;
    // The number can be of form (2^n +1/2/3) since we're dealing with numbers < 9
    var remainder = toConvert % Math.pow(2,highestPowerof2);
    if (remainder >= 2) {
        positions[1] = true;
        remainder -=2;
    }
    if (remainder > 0) {
        positions[0] = true;
    }
    if (outputFormat=="obj")
    {
        return exercise.convertPositionArraytoSignals(positions);
    }
    return positions;
};