var person={
    print_hi : function()
    {
        console.log('hi');
        console.log(this === person);
    }

};

person.print_hi();


function ping()
{
    console.log(this === global);// true i.e ping can access any variable through out the glabal(out of the fun)
}
ping();     
