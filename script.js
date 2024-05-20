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


var header = document.createElement('div');
header.setAttribute('id','header')


console.log(header)
document.body.insertBefore(header, document.body.firstChild);

fetchContent("header.html")

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