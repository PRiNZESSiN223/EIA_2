var SendData;
(function (SendData) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        setupColorDivs();
    }
    function setupColorDivs() {
        console.log("Hallo");
        var colors = ["red", "green", "blue"];
        var divs = document.getElementsByTagName("div");
        console.log(divs);
        for (var i = 0; i < divs.length; i++) {
            console.log(i);
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }
    function handleClickOnDiv(_event) {
        var style = _event.target.style;
        console.log(style.backgroundColor);
        sendRequest(style.backgroundColor);
    }
    function sendRequest(_color) {
        var xhr = new XMLHttpRequest();
        //xhr.open("GET", "http://localhost:5000?color=" + _color, true);
        // xhr.open("GET", "file:///Users/maxime/Documents/workspace/EIA_2_beta/aufgabe 11/EIA2-W17_Node-master/ServerTest.js" + _color, true);
        xhr.open("GET", "https://prinzessin223.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
})(SendData || (SendData = {}));
//# sourceMappingURL=SendData.js.map