var exercise = {};


exercise.roman = function(time){
    
    hours = time.getHours();
    mins = time.getMinutes();
    secs = time.getSeconds();

    var romanTime = {
           hr1 : (hours-(hours%10))/10, 
           hr2 : hours%10,
           min1 : (mins-(mins%10))/10, 
           min2 : mins%10, 
           sec1 : (secs-(secs%10))/10, 
           sec2 : secs%10,
    };
    //console.log("h:m:s = " + romanTime.hour_col1 + romanTime.hour_col2 + ":" + 
    //romanTime.min_col1 + romanTime.min_col2 + ":" + romanTime.sec_col1 + romanTime.sec_col2);

    return romanTime;
};

exercise.binary = function(time, col){

    var powerOfTwos = [8,4,2,1];
    var remainder = col;

    var binary = {
        pos8 : 'off',
        pos4 : 'off',
        pos2 : 'off',
        pos1 : 'off',
    };

    for (i=0; i<powerOfTwos.length; i++){
        if (remainder-powerOfTwos[i]>=0){
            keyString = "pos"+powerOfTwos[i];
            binary[keyString] = 'on';
            remainder -= powerOfTwos[i];

        }
    }

    return binary;
};