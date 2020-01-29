window.attachEvent('onload', mkwidth);
window.attachEvent('onresize', mkwidth);

var minwidth = document.getElementById("site").currentStyle['min-width'].replace('px', '320');
var maxwidth = document.getElementById("site").currentStyle['max-width'].replace('px', '1280');
function mkwidth(){
    document.getElementById("site").style.width = document.documentElement.clientWidth < minwidth ? minwidth+"px" : (document.documentElement.clientWidth > maxwidth ? maxwidth+"px" : "100%");
};