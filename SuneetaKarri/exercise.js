var exercise = {};


exercise.roman = function(time){

var hours = ("00" + time.getHours()).slice(-2);
    minutes = ("00" + time.getMinutes()).slice(-2);
    seconds = ("00" + time.getSeconds()).slice(-2);

  return{

   hour_col51 : hours.slice(0,1),
   hour_col52 : hours.slice(1,2),
   min_col53 : minutes.slice(0,1),
   min_col54 : minutes.slice(1,2),
   sec_col55 : seconds.slice(0,1),
   sec_col56 : seconds.slice(1,2)
  		};
};

exercise.binary = function(time, col){
var binary = { 
            position8 : 'off', 
            position4 : 'off', 
            position2 : 'off', 
            position1 : 'off', 
        }; 
 
	if(time>= 8)
	{
		binary.position8='on'
		time -=8
	}
	else {
		binary.position8='off'
	}
	if(time >=4)
	{
		binary.position4='on'
		time-=4
	}
	else {
		binary.position4='off'
	}
	
	if (time>=2) 
	{
		binary.position2='on'
		time-=2
	}
	else {
		binary.position2='off'
	}
		if (time>=1) {
		binary.position1='on'
		time-=1
	}
	else {
		binary.position1='off'
	}
	
 	return binary;
 };