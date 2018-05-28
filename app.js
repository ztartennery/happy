var right = document.getElementById('arrow-right');
var left = document.getElementById('arrow-left');

var page = 0;

function loadDoc(updown) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            if (updown === "up" &&
                (page >= 0 && page < 14)) {
                page++;
            }

            if (updown === "down" &&
                (page > 0 && page <= 14)) {
                page--;
            }

            theJsonObject = JSON.parse(this.responseText);
            document.getElementById("content").innerHTML = theJsonObject[page];

            TweenLite.set("#content", { scale: 1 });
            TweenLite.set("#content", { css: { autoAlpha: 1 } });
            TweenLite.from("#content", 2, { css: { autoAlpha: 0 } });
            TweenLite.from("#content", 1.5, { scale: 1.5 });

        }
    };
    xhttp.open("GET", "habit.json", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send();
}





right.addEventListener("click", function() { loadDoc('up'); });
left.addEventListener("click", function() { loadDoc('down'); });

TweenLite.set("#content", { scale: 1 });
TweenLite.set("#content", { css: { autoAlpha: 1 } });
TweenLite.from("#content", 2, { css: { autoAlpha: 0 } });
TweenLite.from("#content", 1.5, { scale: 1.5 });