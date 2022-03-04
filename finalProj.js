function central()
{
    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("central").innerText = h + 1 + ":" + m + ":" + s;
    setTimeout(central, 1000);
}
function checkTime(i)
{
    if (i < 10) return "0" + 1;
    return i;
}

function eastern()
{
    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("eastern").innerText = h + 2 + ":" + m + ":" + s;
    setTimeout(eastern, 1000);
}
function checkTime(i)
{
    if (i < 10) return "0" + 1;
    return i;
}

function coast()
{
    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("coast").innerText = h + 2 + ":" + m + ":" + s;
    setTimeout(coast, 1000);
}
function checkTime(i)
{
    if (i < 10) return "0" + 1;
    return i;
}

function runTime() {
    central();
    eastern();
    coast();
}