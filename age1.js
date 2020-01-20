var app=require('./age.js');
result=app.age1(1999,06,22);
//console.log("year:"+result.obj1)
//console.log("hour:"+result.obj2)
//console.log("min:"+result.obj3)
result=app.age(1999,06,22,2020,06,22);

console.log(result)