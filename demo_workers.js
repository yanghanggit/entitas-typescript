var i = 0;

function timedCount() {
    console.log('worker thread___________________________')
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);

}

timedCount();