var exercise = {};

exercise.roman = function(time){
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
     
    h2 = checkTime(h);
    m2 = checkTime(m);
    s2 = checkTime(s);
    hour = h2.toString();
    min = m2.toString();
    sec = s2.toString();
    document.getElementById('romanclockh1').innerHTML = hour[0];
    document.getElementById('romanclockh2').innerHTML = hour[1];
    document.getElementById('romanclockm1').innerHTML = min[0];
    document.getElementById('romanclockm2').innerHTML = min[1];
    document.getElementById('romanclocks1').innerHTML = sec[0];
    document.getElementById('romanclocks2').innerHTML = sec[1]; 

    return {hour_col1:hour[0], hour_col2:hour[1], min_col1:min[0], min_col2:min[1], sec_col1:sec[0], sec_col2:sec[1]};

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

};

exercise.binary = function(time, col){
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();  
  var hrminsec = [h,m,s];
    var refarray =[];

    //getting the array of digits
    for (var i = 0; i < hrminsec.length; i++){
      if (hrminsec[i]<10){
        refarray.push('0');
        refarray.push((hrminsec[i].toString()));  
      }
      else if (hrminsec[i]>=10){
        refarray.push((hrminsec[i].toString())[0]);
        refarray.push((hrminsec[i].toString())[1]);
      }
    }

    //getting the array of positions
    var positionarray = [];

    for (var k in refarray){
      var position8 = 'off';
      var position4 = 'off';
      var position2 = 'off';
      var position1 = 'off';
      if (refarray[k]=='1'){
          position1 = 'on';
        }        
      else if (refarray[k]=='2'){
          position2 = 'on';
        }
      else if (refarray[k]=='3'){
          position1 = 'on';
          position2 = 'on';
        }
      else if (refarray[k]=='4'){
          position4 = 'on';
        }
      else if (refarray[k]=='5'){
          position1 = 'on';
          position4 = 'on'; 
        }
      else if (refarray[k]=='6'){
          position2 = 'on';
          position4 = 'on';
        }
      else if (refarray[k]=='7'){
          position1 = 'on';
          position2 = 'on';
          position4 = 'on';
        }
      else if (refarray[k]=='8'){
          position8 = 'on';
        }
      else if (refarray[k]=='9'){
          position1 = 'on';
          position8 = 'on';
        }
      positionarray.push({"position1":position1, "position2":position2, "position4":position4, "position8":position8});
      }

      //changing the colors of the squares
      if (positionarray[0]['position1'] == 'on'){
        document.getElementById('hour_col1_post1').style.backgroundColor = 'red';}
        else {document.getElementById('hour_col1_post1').style.backgroundColor = 'silver';}

      if (positionarray[0]['position2'] == 'on'){
        document.getElementById('hour_col1_post2').style.backgroundColor = 'red';}
        else {document.getElementById('hour_col1_post2').style.backgroundColor = 'silver'}
    
      if (positionarray[1]['position1'] == 'on'){
        document.getElementById('hour_col2_post1').style.backgroundColor = 'red';}
        else {document.getElementById('hour_col2_post1').style.backgroundColor = 'silver'}

      if (positionarray[1]['position2'] == 'on'){
        document.getElementById('hour_col2_post2').style.backgroundColor = 'red';}
        else {document.getElementById('hour_col2_post2').style.backgroundColor = 'silver'}

      if (positionarray[1]['position4'] == 'on'){
        document.getElementById('hour_col2_post4').style.backgroundColor = 'red';}
        else {document.getElementById('hour_col2_post4').style.backgroundColor = 'silver'}

      if (positionarray[1]['position8'] == 'on'){
        document.getElementById('hour_col2_post8').style.backgroundColor = 'red';}
        else {document.getElementById('hour_col2_post8').style.backgroundColor = 'silver'}

      if (positionarray[2]['position1'] == 'on'){
        document.getElementById('min_col3_post1').style.backgroundColor = 'red';}
        else {document.getElementById('min_col3_post1').style.backgroundColor = 'silver'}
        
      if (positionarray[2]['position2'] == 'on'){
        document.getElementById('min_col3_post2').style.backgroundColor = 'red';}
        else {document.getElementById('min_col3_post2').style.backgroundColor = 'silver'}

      if (positionarray[2]['position4'] == 'on'){
        document.getElementById('min_col3_post4').style.backgroundColor = 'red';}
        else {document.getElementById('min_col3_post4').style.backgroundColor = 'silver'}

      if (positionarray[3]['position1'] == 'on'){
        document.getElementById('min_col4_post1').style.backgroundColor = 'red';}
        else {document.getElementById('min_col4_post1').style.backgroundColor = 'silver'}

      if (positionarray[3]['position2'] == 'on'){
        document.getElementById('min_col4_post2').style.backgroundColor = 'red';}
        else {document.getElementById('min_col4_post2').style.backgroundColor = 'silver'}

      if (positionarray[3]['position4'] == 'on'){
        document.getElementById('min_col4_post4').style.backgroundColor = 'red';}
        else {document.getElementById('min_col4_post4').style.backgroundColor = 'silver'}

      if (positionarray[3]['position8'] == 'on'){
        document.getElementById('min_col4_post8').style.backgroundColor = 'red';}
        else {document.getElementById('min_col4_post8').style.backgroundColor = 'silver'}

      if (positionarray[4]['position1'] == 'on'){
        document.getElementById('sec_col5_post1').style.backgroundColor = 'red';}
        else {document.getElementById('sec_col5_post1').style.backgroundColor = 'silver'}

      if (positionarray[4]['position2'] == 'on'){
        document.getElementById('sec_col5_post2').style.backgroundColor = 'red';}
        else {document.getElementById('sec_col5_post2').style.backgroundColor = 'silver'}

      if (positionarray[4]['position4'] == 'on'){
        document.getElementById('sec_col5_post4').style.backgroundColor = 'red';}
        else {document.getElementById('sec_col5_post4').style.backgroundColor = 'silver'}

      if (positionarray[5]['position1'] == 'on'){
        document.getElementById('sec_col6_post1').style.backgroundColor = 'red';}
        else {document.getElementById('sec_col6_post1').style.backgroundColor = 'silver'}

      if (positionarray[5]['position2'] == 'on'){
        document.getElementById('sec_col6_post2').style.backgroundColor = 'red';}
        else {document.getElementById('sec_col6_post2').style.backgroundColor = 'silver'}

      if (positionarray[5]['position4'] == 'on'){
        document.getElementById('sec_col6_post4').style.backgroundColor = 'red';}
        else {document.getElementById('sec_col6_post4').style.backgroundColor = 'silver'}

      if (positionarray[5]['position8'] == 'on'){
        document.getElementById('sec_col6_post8').style.backgroundColor = 'red';}
        else {document.getElementById('sec_col6_post8').style.backgroundColor = 'silver'}

      
      //returning object of binary clock values for given column
      
      if (col == 'hour_col1'){
        return binary = positionarray[0]
      };
      if (col == 'hour_col2'){
        return binary = positionarray[1]
      };
      if (col == 'min_col1'){
        return binary = positionarray[2]
      };
      if (col == 'min_col2'){
        return binary = positionarray[3]
      };
      if (col == 'sec_col1'){
        return binary = positionarray[4]
      };
      if (col == 'sec_col2'){
        return binary = positionarray[5]
      };
    



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