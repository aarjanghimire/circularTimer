circleTime(20);

function circleTime(second) {
    const strSec = second.toString();
    document.getElementById("circle").style.setProperty("animation-duration", strSec+"s");  
}
