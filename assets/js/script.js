function GetRTime() {
    var EndTime = new Date('2019/05/1 09:00:00'); //截止时间
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    /*var d=Math.floor(t/1000/60/60/24);
    t-=d*(1000*60*60*24);
    var h=Math.floor(t/1000/60/60);
    t-=h*60*60*1000;
    var m=Math.floor(t/1000/60);
    t-=m*60*1000;
    var s=Math.floor(t/1000);*/

    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);

    document.getElementById("dd").innerHTML = d + "";
    document.getElementById("hh").innerHTML = h + "";
    document.getElementById("mm").innerHTML = m + "";
    document.getElementById("ss").innerHTML = s + "";
}
setInterval(GetRTime, 1000);