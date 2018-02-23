var exercise = {};

var time = new Date();

function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

exercise.roman = function(time){
    console.log(" ex.js Roman_Time: "+Roman_Time);

     Roman_Time = {
        hour_col1: String(Math.floor(time.getHours()/10)),
        hour_col2: String(time.getHours()%10),
        min_col1: leftPad(time.getMinutes(),2)[0],
        min_col2: leftPad(time.getMinutes(),2)[1],
        sec_col1: String(Math.floor(time.getSeconds()/10)),
        sec_col2: String(time.getSeconds()%10)
    };
        
        
   return Roman_Time;
    

} //-------------------------------------
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


exercise.binary = function(time, col){

    
        if (Number(col[0])==9){
            return  {
                position8: 'on',
                position4: 'off',
                position2: 'off',
                position1: 'on'
            }}
        if (Number(col[0])==8){
            return {
                position8: 'on',
                position4: 'off',
                position2: 'off',
                position1: 'off'
            }}
        if (Number(col[0])==7){
            return {
                position8: 'off',
                position4: 'on',
                position2: 'on',
                position1: 'on'
            }}
        if (Number(col[0])==6){
            return {
                position8: 'off',
                position4: 'on',
                position2: 'on',
                position1: 'off'
            }}
        if (Number(col[0])==6){
            return {
                position8: 'off',
                position4: 'on',
                position2: 'on',
                position1: 'off'
            }}

        if (Number(col[0])==5){
            return {
                position8: 'off',
                position4: 'on',
                position2: 'off',
                position1: 'on'
        }}
        if (Number(col[0])==4){
            return {
                position8: 'off',
                position4: 'on',
                position2: 'off',
                position1: 'off'
            }

        }
        if (Number(col[0])==3){
            return {
                position8: 'off',
                position4: 'off',
                position2: 'on',
                position1: 'on'
            }
        }
        if (Number(col[0])==2){
            return {
                position8: 'off',
                position4: 'off',
                position2: 'on',
                position1: 'off'
            }}
        if (Number(col[0])==1){
            return {
                position8: 'off',
                position4: 'off',
                position2: 'off',
                position1: 'on'
                }}
        if (Number(col[0])==0){
            return  {
                    position8: 'off',
                    position4: 'off',
                    position2: 'off',
                    position1: 'off'
                    }}
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

