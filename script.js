const arrContentURLs = [
    "ueber.html",
    "/data/Amina-Zerourou/index.html",
    "/data/Anton-Buerkle/index.html",
    "/data/Clara-Troelsch/index.html",
    "/data/Darius-von-Berlepsch/index.html",
    "/data/Finja-Hansen/index.html",
    "/data/Hannes-Pilz/index.html",
    "/data/Laura-Schowe/index.html",
    "/data/Lisa-Bruestle/index.html",
    "/data/Max-Moeckel/index.html",
    "/data/Michelle-Borys/index.html",
    "/data/Sandra-Brämer/index.html",
    "/data/Sissi-Sommer/index.html",
    "/",
    "impressum.html"
]

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
})