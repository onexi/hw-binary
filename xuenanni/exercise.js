var exercise = {};


exercise.roman = function(time){
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

var Roman = {
hour_col1 : Math.floor(hour/10), 
hour_col2 : hour - Math.floor(hour/10)*10,
min_col1 : Math.floor(min/10), 
min_col2 : min - Math.floor(min/10)*10,
sec_col1 : Math.floor(sec/10), 
sec_col2 : sec - Math.floor(sec/10)*10
 };

    return Roman;

};

exercise.binary = function(time){
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    var col = {
        hour_col1 : Math.floor(hour/10), 
        hour_col2 : hour - Math.floor(hour/10)*10,
        min_col1 : Math.floor(min/10), 
        min_col2 : min - Math.floor(min/10)*10,
        sec_col1 : Math.floor(sec/10), 
        sec_col2 : sec - Math.floor(sec/10)*10
 };

var response = {
    h1pos8: 'off',
    h1pos4 : 'off',
    h1pos2 : 'off',
    h1pos1 : 'off',
    h2pos8: 'off',
    h2pos4 : 'off',
    h2pos2 : 'off',
    h2pos1 : 'off',
    m1pos8: 'off',
    m1pos4 : 'off',
    m1pos2 : 'off',
    m1pos1 : 'off',
    m2pos8: 'off',
    m2pos4 : 'off',
    m2pos2 : 'off',
    m2pos1 : 'off',
    s1pos8: 'off',
    s1pos4 : 'off',
    s1pos2 : 'off',
    s1pos1 : 'off',
    s2pos8: 'off',
    s2pos4: 'off',
    s2pos2: 'off',
    s2pos1: 'off'

};

// hours
if(col.hour_col1>1){
response.h1pos2 = 'on';

}
else if (col.hour_col1==1){

response.h1pos1 = 'on';
};

if (col.hour_col2>=8){
    response.h2pos8 = 'on';
    col.hour_col2 = col.hour_col2-8;
};
if (col.hour_col2>=4){
    response.h2pos4 = 'on';
    col.hour_col2 = col.hour_col2-4;
};
if (col.hour_col2>=2){
    response.h2pos2 = 'on';
    col.hour_col2 = col.hour_col2-2;
};
if (col.hour_col2>=1){
    response.h2pos1 = 'on';
};

// minutes 
if(col.min_col1>=4){
    response.m1pos4 = 'on';
    col.min_col1 = col.min_col1-4;
};
if(col.min_col1>=2){
    response.m1pos2 = 'on';
    col.min_col1 = col.min_col1-2;
};
if(col.min_col1>=1){
    response.m1pos1 = 'on';
};

if(col.min_col2>=8){
    response.m2pos8 = 'on';
    col.min_col2 = col.min_col2-8;
};
if(col.min_col2>=4){
    response.m2pos4 = 'on';
    col.min_col2 = col.min_col2-4;
};
if (col.min_col2>=2){
    response.m2pos2 = 'on';
    col.min_col2= col.min_col2-2;
};
if(col.min_col2>=1){
    response.m2pos1 = 'on';
};

//seconds 
if(col.sec_col1>=4){
    response.s1pos4 = 'on';
    col.sec_col1 = col.sec_col1-4;
};
if (col.sec_col1>=2){
    response.s1pos2 = 'on';
    col.sec_col1=col.sec_col1-2;
};
if(col.sec_col1>=1){
    response.s1pos1 = 'on';
};

if(col.sec_col2>=8){
    response.s2pos8 = 'on';
    col.sec_col2 = col.sec_col2-8;
};
if(col.sec_col2>=4){
    response.s2pos4 = 'on';
    col.sec_col2 = col.sec_col2-4;
};
if(col.sec_col2>=2){
    response.s2pos2 = 'on';
    col.sec_col2= col.sec_col2-2;
};
if(col.sec_col2>=1){
    response.s2pos1 = 'on';
};

return response;
};