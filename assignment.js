//feetToMile
//feetToMile
function feetToMile(feet)
{
    var mile = feet * 0.000189394;
    return mile;
}
var feet = 1;
var ans = feetToMile(feet);
console.log(ans);

//woodCalsulator
//woodCalsulator
function woodCalculator(chair, table , bed)
{
    var sum= (chair*1)+(table*3)+(bed*5);
    return sum;
}
console.log(woodCalculator(3,3,3));

//brickCalculator
//brickCalculator
function brickCalculator(floor)
{
    var feet;
    var bricks;
    if(floor<=10)
    {
        feet=floor*15;
        bricks=feet*1000;
    }
    else if(floor<=20)
    {
        feet=(10*15)+((floor-10)*12);
        bricks=feet*1000;
    }
    else
    {
        feet=(10*15)+(10*12)+((floor-20)*10);
        bricks=feet*1000;
    }
    return bricks;
}
var floor=30;
console.log(brickCalculator(floor));

//tinyfriends
//tinyfriends
function tinyFriends(a)
{
    var min=a[0].length;
    var smallName;
    for(var i=0;i<a.length;i++)
    {
        var k=a[i].length;
        if(k<min)
        {
            min=k;
            smallName=a[i];
        }
    }
    return smallName;
}
var a=["rafi","abd","ahdos"];
console.log(tinyFriends(a));