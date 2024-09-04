circleTime(30);

function circleTime(second) {
    const strSec = second.toString();
    document.getElementById("circle").style.setProperty("animation-duration", strSec+"s");  
}

const pathElement = document.getElementById('circle');
const pathLength = pathElement.getTotalLength();
console.log(`Path length: ${pathLength}`);