chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
        alert("clicked");
    }
});