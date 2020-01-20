function order(number)
{
    console.log('orderid:',number);
    time(function()
    {
        console.log('delivered:',number);
    });
    
    
}

function time(callback)
{
    setTimeout(callback,5000);
}


order(1);
order(2);
order(3);
order(4);

