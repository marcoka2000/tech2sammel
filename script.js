const arrContentURLs = [
    "ueber.html",
    "https://marcoka.de/upload/HTW/2324/Amina-Zerourou/Baume-in-BerlinAmina-Zerourou/index.html",
    "https://adea76fa-e733-4ce1-83fb-b8a2a7111b4d-00-3aq5dr8bpqqjw.worf.replit.dev",
    "https://092f9e2d-30c5-4a25-b369-b043ed90a86d-00-3ezhyerhic3ne.kirk.replit.dev",
    "https://a6f67157-79f8-4152-b67c-51eeb92fc04e-00-193ix5fsxoh3s.kirk.replit.dev",
    "https://abf7e648-0da5-4c41-8944-7737c0f4e732-00-1eu7vl3jvdapx.riker.replit.dev",
    "https://ca762503-13b0-4c82-bcb8-af20181f8cd1-00-efngq341tcw3.worf.replit.dev",
    "https://adea76fa-e733-4ce1-83fb-b8a2a7111b4d-00-3aq5dr8bpqqjw.worf.replit.dev",
    "https://092f9e2d-30c5-4a25-b369-b043ed90a86d-00-3ezhyerhic3ne.kirk.replit.dev",
    "https://a6f67157-79f8-4152-b67c-51eeb92fc04e-00-193ix5fsxoh3s.kirk.replit.dev",
    "https://abf7e648-0da5-4c41-8944-7737c0f4e732-00-1eu7vl3jvdapx.riker.replit.dev",
    "https://marcoka.de/HTW/2324/Amina-Zerourou",
    //"https://a380ee93-9c69-4893-ad24-b0e9c9894a1b-00-3afvcqx2mi5jg.riker.replit.dev",
   //"https://fabc5235-bad1-45e8-802d-482deee91b2b-00-1t5kcrau5yt5w.picard.replit.dev",
   // Laura 
   "https://aa0276ed-082f-4dac-9584-dd857cb32587-00-2jvkrs15rxl6n.riker.replit.dev",
   // Amina 
   "https://8686caef-1f62-4da0-aa78-425030ed34ba-00-39gdc4xss8upv.picard.replit.dev",
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