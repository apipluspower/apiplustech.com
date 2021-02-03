window.onscroll = function () { shrinkNavBar() };

function shrinkNavBar() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("main-navbar").style.paddingTop = ".5rem";
        document.getElementById("main-navbar").style.paddingBottom = ".5rem";
    } else {
        document.getElementById("main-navbar").style.paddingTop = "1rem";
        document.getElementById("main-navbar").style.paddingBottom = "1rem";
    }
}