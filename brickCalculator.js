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