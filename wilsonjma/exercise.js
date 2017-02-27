var exercise = {};


exercise.roman = function(time){
var time = new Date();
var currentHours = time.getHours();
var currentMinutes = time.getMinutes();
var currentSeconds = time.getSeconds();

    if(currentHours.toString().length == 1){
        document.getElementById("hour_col1").innerHTML= currentHours == 0;
        document.getElementById("hour_col2").innerHTML= currentHours == currentHours.toString()[0];
    }
    else{
        document.getElementById("hour_col1").innerHTML= currentHours.toString()[0];
        document.getElementById("hour_col2").innerHTML= currentHours.toString()[1];
    }
    if(currentMinutes.toString().length == 1){
        document.getElementById("min_col1").innerHTML= currentMinutes == 0;
        document.getElementById("min_col2").innerHTML= currentMinutes == currentMinutes.toString()[0];
    }
    else{
        document.getElementById("min_col1").innerHTML = currentMinutes.toString()[0];
        document.getElementById("min_col2").innerHTML = currentMinutes.toString()[1];
    }
    document.getElementById("sec_col1").innerHTML = currentSeconds.toString()[0];
    document.getElementById("sec_col2").innerHTML = currentSeconds.toString()[1]; 
    

};
exercise.binary = function(time, col){
    var time = new Date();
    var currentHours = time.getHours();
    var currentMinutes = time.getMinutes();
    var currentSeconds = time.getSeconds();
    switch(currentHours){
        case currentHours > 19:
            document.getElementById('hour_col1_pos2').style.backgroundColor = 'red';
            break;
        case 19 >= currentHours > 9:
            document.getElementById('hour_col1_pos1').style.backgroundColor = 'red';
            break;
        case currentHours <= 9:
            document.getElementById('hour_col1_pos1').style.backgroundColor = 'silver';
            document.getElementById('hour_col1_pos2').style.backgroundColor = 'silver';
            break;
        case currentHours == 1:
            document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
            break;
        case currentHours == 2:
            document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
            break;
        case currentHours == 3:
            document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
            document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
            break;
        case currentHours == 4:
            document.getElementById('hour_col2_pos4').style.backgroundColor = 'red';
            break;
        case currentHours == 5:
            document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
            document.getElementById('hour_col2_pos4').style.backgroundColor = 'red';
            break;
        case currentHours == 6:
            document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
            document.getElementById('hour_col2_pos4').style.backgroundColor = 'red';
            break;
        case currentHours == 7:
            document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
            document.getElementById('hour_col2_pos2').style.backgroundColor = 'red';
            document.getElementById('hour_col2_pos4').style.backgroundColor = 'red';
            break;
        case currentHours == 8:
            document.getElementById('hour_col2_pos8').style.backgroundColor = 'red';
            break;
        case currentHours == 9:
            document.getElementById('hour_col2_pos8').style.backgroundColor = 'red';
            document.getElementById('hour_col2_pos1').style.backgroundColor = 'red';
            break;
        case currentHours == 0:
            document.getElementById('hour_col1_pos1').style.backgroundColor = 'silver';
            document.getElementById('hour_col1_pos2').style.backgroundColor = 'silver';
            document.getElementById('hour_col2_pos1').style.backgroundColor = 'silver';
            document.getElementById('hour_col2_pos2').style.backgroundColor = 'silver';
            document.getElementById('hour_col2_pos4').style.backgroundColor = 'silver';
            document.getElementById('hour_col2_pos8').style.backgroundColor = 'silver';
        }   
    switch(currentMinutes){
        case 10 > currentMinutes >=0:
            document.getElementById('min_col3_pos1').style.backgroundColor = 'silver';
            document.getElementById('min_col3_pos2').style.backgroundColor = 'silver';
            document.getElementById('min_col3_pos4').style.backgroundColor = 'silver';
            break;
        case 20 > currentMinutes >=10:
            document.getElementById('min_col3_pos1').style.backgroundColor = 'red';
            document.getElementById('min_col3_pos2').style.backgroundColor = 'silver';
            document.getElementById('min_col3_pos4').style.backgroundColor = 'silver';
            break;
        case 30 > currentMinutes >=20:
            document.getElementById('min_col3_pos1').style.backgroundColor = 'silver';
            document.getElementById('min_col3_pos2').style.backgroundColor = 'red';
            document.getElementById('min_col3_pos4').style.backgroundColor = 'silver';
            break;
        case 40 > currentMinutes >=30:
            document.getElementById('min_col3_pos1').style.backgroundColor = 'red';
            document.getElementById('min_col3_pos2').style.backgroundColor = 'red';
            document.getElementById('min_col3_pos4').style.backgroundColor = 'silver';
            break;
        case 50 > currentMinutes >=40:
            document.getElementById('min_col3_pos1').style.backgroundColor = 'silver';
            document.getElementById('min_col3_pos2').style.backgroundColor = 'silver';
            document.getElementById('min_col3_pos4').style.backgroundColor = 'red';
            break;
        case 60 > currentMinutes >=50:
            document.getElementById('min_col3_pos1').style.backgroundColor = 'red';
            document.getElementById('min_col3_pos2').style.backgroundColor = 'silver';
            document.getElementById('min_col3_pos4').style.backgroundColor = 'red';
            break;
        
        }
    } 
    for(i < 6 && j < 10; currentMinutes == i,j;i++,j++){
        switch(j){
            case j ==0:    
                document.getElementById('min_col4_pos1').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos2').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'silver';
                break;
            case j == 1:
                document.getElementById('min_col4_pos1').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos2').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'silver';
            case j == 2: 
                document.getElementById('min_col4_pos2').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos2').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'silver';
                break;
            case j ==3:
                document.getElementById('min_col4_pos2').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos1').style.backgroundColor = 'red';
            case j == 4:
                document.getElementById('min_col4_pos2').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos1').style.backgroundColor = 'silver';
            case j == 5:
                document.getElementById('min_col4_pos2').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos1').style.backgroundColor = 'red';
            case j == 6:
                document.getElementById('min_col4_pos2').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos1').style.backgroundColor = 'silver';
            case j == 7:
                document.getElementById('min_col4_pos2').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos1').style.backgroundColor = 'red';
            case j == 8:
                document.getElementById('min_col4_pos2').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos1').style.backgroundColor = 'silver';
            case j == 9:
                document.getElementById('min_col4_pos2').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos4').style.backgroundColor = 'silver';
                document.getElementById('min_col4_pos8').style.backgroundColor = 'red';
                document.getElementById('min_col4_pos1').style.backgroundColor = 'red';

        }
    }
}