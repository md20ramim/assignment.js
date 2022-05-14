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