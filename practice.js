function bolo(number)
{
    console.log('hi',number);
    time(
        function (){
            console.log('bye',number);
        }
    )
    

}
function time(callback)
{
    setTimeout(callback,5000);
}

bolo(1);
bolo(2);
bolo(3);
bolo(4);