

module.exports={
    age:function(year,month,date,year1,month1,date1)
    {

var diff_ms =(new Date(year1,month1,date1)).getTime() - (new Date(year,month,date)).getTime();
var age_dt = new Date(diff_ms); 
  
    result= Math.abs(age_dt.getUTCFullYear()-1970);
    return result;
    


},
   age1:function(year2,hour2,minutes2)
    {
    var d = new Date();
    var n1 = d.getHours();
    var min= d.getMinutes();
    var full = d.getFullYear();
    var obj1=Math.abs(year2-full);
    var obj2=hour2-n1;
    var obj3=minutes2-min;
    return {obj1:Math.abs(year2-full), obj2:Math.abs(hour2-n1) , obj3:Math.abs(minutes2-min)}
    //return 
    //return 
}}

