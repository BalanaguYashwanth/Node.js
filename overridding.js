var bick={
    car: 'telsa',
    speed :'high',
};

var person=bick;
person.car='benz';
console.log(bick.car);
console.log(person.speed);

console.log(19=='19')//true i.e it only compares the values
console.log(19==='19')//flase i.e it compare values and datatypes  