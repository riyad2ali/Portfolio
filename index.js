const home = document.getElementById("home-btn")
const about = document.getElementById("about-btn")
const projects = document.getElementById("projects-btn")
const contact = document.getElementById("contact-btn")

function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

function homeScroll() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
}

function aboutScroll() {
    //window.scrollTo(0, 500);
    window.scrollTo({
        top: 580,
        behavior: 'smooth',
      })
}

function projectScroll() {
    window.scrollTo({
        top: 1450,
        behavior: 'smooth',
      })
}

function contactScroll() {
    window.scrollTo({
        top: 2630,
        behavior: 'smooth',
      })
}
