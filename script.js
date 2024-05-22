function fetchContent(path) {
    fetch(path)
    .then(function (response) {
        if (response.ok) {
        return response.text();
        }
        throw response;
    })
    .then(function (text) {
        //console.log(text);
        document.getElementById("header").innerHTML = text;
    });
}

const arrContentURLs = [
    "ueber.html",
    "/data/baeume/index.html",
    "/data/kinder/index.html",
    "/data/psychosozial/index.html",
    "/data/radfahrende/index.html",
    "/data/coronafallzahlen/index.html",
    "/data/apothekendichte/index.html",
    "/data/gewalt/index.html",
    "/data/brokenlifts/index.html",
    "/data/kriminalitsanalyse/index.html",
    "/data/sommerspass/index.html",
    "/data/psychosozial/index.html",
    "/data/hitzehotspots/index.html",
    "/",
    "impressum.html"
]


var button = document.createElement('a');
button.setAttribute('href','../../index.html')
button.setAttribute('style','font-family: sans-serif; font-weight: 400; background-color: #eee; color:#111; padding: 8px 16px; margin: 80px 8px; border-radius: 0px; border: 1px solid #6F6F6E; background: #ECECED; box-shadow: 4px 4px 0px 0px #6F6F6E; text-decoration: none;');

// position: fixed; top: 8px; left: 8px; z-index: 9000;');
button.innerHTML = '← Zurück zur Übersicht'

var spacer = document.createElement('div');
spacer.setAttribute('class', 'spacer');
spacer.setAttribute('style', 'height: 80px');

console.log(button)
// document.body.insertBefore(spacer, document.body.firstChild);
document.body.insertBefore(button, document.body.firstChild);

//fetchContent("header.html")

const selectElement = document.querySelector("#project-select");
console.log(selectElement)

selectElement.addEventListener("change", (event) => {
    console.log(event.target.value);

    if (event.target.value != "Trenner") {
        window.location.href = arrContentURLs[0]
    }
    
});

/*
document.getElementById("space").innerHTML = "<iframe src='" + arrContentURLs[0] + "'></iframe>";



var iframe = document.getElementsByTagName("iframe");
console.log(iframe)

window.addEventListener('DOMContentLoaded', function() {
    console.log('All asset are loaded')
    var links = document.getElementsByTagName("a");
    console.log(links)

    for (var i = 0; i < links.length; i++) {
        links[i].target = "_blank";
    }
});
*/