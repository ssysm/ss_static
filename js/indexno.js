(function () {
    var widthget = window.innerWidth;
    
    switch (widthget) {
        case 1280:
            document.getElementById("homepage").style.height = 600 + "px";break;
        case 1366:
            document.getElementById("homepage").style.height = 600 + "px";break;
        case 1920:
            document.getElementById("homepage").style.height = 800 + "px";break;
        case 1024:
            document.getElementById("homepage").style.height = 600 + "px";break;
        case 1600:
            document.getElementById("homepage").style.height = 700 + "px";break;
        case 2160:
            document.getElementById("homepage").style.height = 900 + "px";break;
        default:
            document.getElementById("homepage").style.height = 600 + "px";break;
    }
})();
