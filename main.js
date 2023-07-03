var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

var btt = document.getElementById("back-to-top"),
            body = document.body,
            docElem = document.documentElement,
            offset = 100,
            scrollPos, docHeight, 
            isFireFox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

        docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight)
        if(docHeight != 'undefined'){
            offset = docHeight / 4;
        }

        window.addEventListener("scroll", function(event){
            scrollPos = body.scrollTop || docElem.scrollTop;

            btt.className = (scrollPos > offset) ? "visible" : "";
        });
