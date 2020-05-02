function loadIframe(){
    var link = "https://www.youtube.com/embed/aqTCrRbDL20"
    var iframe = document.createElement('iframe');
    iframe.frameBorder=0;
    iframe.width="560px";
    iframe.height="315px";
    iframe.setAttribute("src", link);
    document.getElementById("videoElement").innerHTML='';
    document.getElementById("videoElement").append(iframe);
}
setTimeout(function () {
    loadIframe();
}, 1000);