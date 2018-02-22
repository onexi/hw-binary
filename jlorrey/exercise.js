// Jocelyn Lorrey 1.00 Pset 2 2/20/18
var exercise = {};

// My helper function to ensure proper number digits if first digits are 0's:
exercise.addZeros = function(valueToChange, desiredNumZeros) {
    zerosToAdd = desiredNumZeros - valueToChange.length;
    for (i=0; i<zerosToAdd; i++) {
        valueToChange = "0".concat(valueToChange);
    }
    return valueToChange;
}
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
    hours   = String(time.getHours()); //make string for indexing
    minutes = String(time.getMinutes());
    seconds = String(time.getSeconds());

    //Ensure proper number of 0's (e.g reported as "06", not "6")
    hours = exercise.addZeros(hours, 2); //call helper function addZeros (defined @ top)
    minutes = exercise.addZeros(minutes, 2);
    seconds = exercise.addZeros(seconds, 2);

    var romanCols = {
        hour_col1 : Number(hours[0]), //index string, then make that value a number
        hour_col2 : Number(hours[1]),
        min_col1  : Number(minutes[0]), 
        min_col2  : Number(minutes[1]),
        sec_col1  : Number(seconds[0]), 
        sec_col2  : Number(seconds[1])
    };
    return romanCols;
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
    //----------------------------------------------------------
    romanCols = exercise.roman(time); 
    romanVal = romanCols[col]; //the roman digit associated with column

    binaryVal = romanVal.toString(2); //convert to binary string (bonus: can index strings)
    binaryVal = exercise.addZeros(binaryVal, 4); //ensure 4 digits 
    //(ex. "0001", not "1")
    stateArray = ['off', 'on']; //will use to map binary (0, 1) to ('off', 'on') 

    var binary = {                                //e.g. if romanVal = 7 --> binaryVal = '0111'
        position8 : stateArray[Number(binaryVal[0])], // binaryVal[0]=0 > bool=0 > stateArray[0]='off'
        position4 : stateArray[Number(binaryVal[1])], // binaryVal[1]=1 > bool=1 > stateArray[1]='on'
        position2 : stateArray[Number(binaryVal[2])], // binaryVal[2]=1 > bool=1 > stateArray[1]='on'
        position1 : stateArray[Number(binaryVal[3])]  // binaryVal[3]=1 > bool=1 > stateArray[1]='on'
    };
    return binary;
};