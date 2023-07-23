    var url = location.href;
    if (url.indexOf("https://crowdworks.jp/messages/unread") === 0) {
        var elements = document.getElementsByClassName("preview");
        var length = elements.length;
        var text = "";
        for (var i = 0; i < length; i++) {
            text += elements[i].children[0].href + "\n";
        }
        navigator.clipboard.writeText(text);
    }
    if (url.indexOf("https://crowdworks.jp/r/job_offers/") === 0) {
        var elements = document.getElementsByTagName("tr");
        var text = "";
        for (let i = 1; i < elements.length; i++) {
            text += "https://crowdworks.jp/" + elements[i].getAttribute("data-href") + "\n";
        }
        navigator.clipboard.writeText(text);
    }
    if (url.indexOf("https://crowdworks.jp/notifications") === 0) {
        var elements = document.getElementsByClassName("cwv-table-message");
        var length = elements.length;
        var text = "";
        for (var i = 0; i < length; i++) {
            text += elements[i].href + "\n";
        }
        navigator.clipboard.writeText(text);
    }

