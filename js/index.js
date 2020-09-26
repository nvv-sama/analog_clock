var diallines = document.getElementsByClassName('diallines');
var clockE1 = document.getElementsByClassName('clock')[0];
// vẽ vạch số trên đồng hồ
for(var i = 1 ; i < 60 ; i++) {
    clockE1.innerHTML += '<div class="diallines"></div>';
    diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
    let d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    hDeg = (h / 12 ) * 360 ; 
    mDeg = ((m / 60) * 360); 
    sDeg = ((s / 60) * 360) + 360;

    hClock = document.querySelector('.hour');
    mClcok = document.querySelector('.minute');
    sClock = document.querySelector('.second');

    hClock.style.transform = "rotate("+hDeg+"deg)";
    mClcok.style.transform = "rotate("+mDeg+"deg)";
    sClock.style.transform = "rotate("+sDeg+"deg)";
}

// setInterval sau 1s sẽ thực hiện lại hàm clock()
setInterval("clock()", 1000)