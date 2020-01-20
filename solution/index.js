

module.exports={
    age:function(year,month,date,year1,month1,date1)
    {

var diff_ms =(new Date(year1,month1,date1)).getTime() - (new Date(year,month,date)).getTime();
var age_dt = new Date(diff_ms); 
  
    result= Math.abs(age_dt.getUTCFullYear() - 1970);
    return result


},
age1:function(year2,hour2,minutes2)
    {
    var d = new Date();
    var n1 = d.getHours();
    var min= d.getMinutes();
    var full = d.getFullYear();
    var nyear=Math.abs(year2-full);
    var nhour=hour2-n1;
    var nmin=minutes2-min;
    return {nyear:Math.abs(year2-full), nhour:Math.abs(hour2-n1) , nmonth:Math.abs(minutes2-min)}
    
}
};

  