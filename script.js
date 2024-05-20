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


var header = document.createElement('div');
header.setAttribute('id','header')
document.body.appendChild(header);


/*
document.getElementById("space").innerHTML = "<iframe src='" + arrContentURLs[0] + "'></iframe>";


const selectElement = document.querySelector("#project-select");

selectElement.addEventListener("change", (event) => {
    console.log(event.target.value);

    if (event.target.value != "Trenner") {
        document.getElementById("space").innerHTML = "<iframe src='" + arrContentURLs[event.target.value] + "'></iframe>";

        var links = document.getElementsByTagName("a");
        console.log(links)
    }
    
});

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