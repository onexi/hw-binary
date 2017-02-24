var exercise = {};


exercise.roman = function(time){

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var h1 = Math.floor(hours/10);
    var m1 = Math.floor(minutes/10);
    var s1 = Math.floor(seconds/10);

    var h2 = hours % 10;
    var m2 = minutes % 10;
    var s2 = seconds % 10;

    var numerals = [h1, h2, m1, m2, s1, s2];

    return numerals;   

};

exercise.binary = function(time, col){

var position= [0,0,0,0];

var digits = 0;

var even_check = (col % 2) === 0;

//Get the right digits from  time, depending on the column number

if(col === 0 || col === 1){
    digits = time.getHours();
} else if(col === 2 || col === 3) {
    digits = time.getMinutes();
} else if(col === 4 || col === 5) {
    digits = time.getSeconds();
}

//Turn on the corresponding positions

if(even_check){

    if (digits >= 40) {
            position[2] = 1;
            digits -= 40;
    }

    if (digits >= 20) {
            position[1] = 1;
            digits -= 20;
    }

    if (digits >= 10) {
            position[0] = 1;
            digits -= 10;
    }

} else if(even_check === false) {

    digits = digits % 10;

    if (digits >= 8) {
            position[3] = 1;
            digits -= 8;
    }

    if (digits >= 4) {
            position[2] = 1;
            digits -= 4;
    }

    if (digits >= 2) {
            position[1] = 1;
            digits -= 2;
    }

    if (digits >= 1) {
            position[0] = 1;
            digits -= 1;
    }
}

return position;

}; 