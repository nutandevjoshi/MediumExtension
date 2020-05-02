
// My code

// var s = document.createElement('script');
// (document.head||document.documentElement).appendChild(s);



var s = document.createElement('script');
s.src = chrome.extension.getURL('popupcode.js');
(document.head||document.documentElement).appendChild(s);