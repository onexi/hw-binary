//suhyoun yu HW 2: syu2

var exercise = {};

exercise.roman = function(time){

        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();

        if (s < 10){
            s = String(s)
            s = '0' + s;
        }else{
            s = String(s)
        }

        if (m < 10){
            m = String(m)
            m = '0' + m;
        }else{
            m = String(m)
        }

        if (h < 10){
            h = String(h)
            h = '0' + h;
        }else{
            h = String(h)
        }

        var T = {
            'h1' : Number(h[0]),
            'h2' : Number(h[1]),
            'm1' : Number(m[0]),
            'm2' : Number(m[1]),
            's1' : Number(s[0]),
            's2' : Number(s[1]),
        } ;

        var names = ['h1', 'h2', 'm1', 'm2', 's1', 's2'];

        //display number
        for (var i=0; i<6; i++){
            var key = names[i];
            document.getElementById(names[i]).innerHTML = T[key];
        }

}

exercise.binary = function(time, unit, col, t){

        //binary rep of number
        var bin = [
            [0, 0, 0, 0], //0
            [1, 0, 0, 0], //1
            [0, 1, 0, 0], //2
            [1, 1, 0, 0], //3
            [0, 0, 1, 0], //4
            [1, 0, 1, 0], //5
            [0, 1, 1, 0], //6
            [1, 1, 1, 0], //7
            [0, 0, 0, 1], //8
            [1, 0, 0, 1], //9
        ]


        //binary display
        for (i=0;i<4;i++){
            if (bin[t][i] === 1){
                a = unit + col + '_' + String(i+1);
                document.getElementById(a).style.backgroundColor = 'red'; 
            }else {
                a = unit + col + '_' + String(i+1);
                document.getElementById(a).style.backgroundColor = 'silver'; 
            }
        }

}

