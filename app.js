var gettablinks = document.getElementsByClassName("tablinks"); //MTML COLLECTION 
var getbtncloses = document.querySelectorAll(".btn-close");
var gettabpanes = document.getElementsByClassName("tap-pane"); //NOde List

var tappanes = Array.from(gettabpanes);

function gettab(evn, linkid) {

    tappanes.forEach(function (tappane) {
        tappane.style.display = "none";
    })
    document.getElementById(linkid).style.display = "block";

    for (var x = 0; x < gettablinks.length; x++) {
        gettablinks[x].className = gettablinks[x].className.replace("active", "");


        getbtncloses[x].addEventListener("click", function () {
            this.parentElement.style.display = "none";
        })
    }

    // console.log(evn.target);
    // evn.target.className += " active";
    // evn.target.className += evn.target.className.replace("tablinks", "tablinks active");
    // evn.target.classList.add("active");
    // console.log(evn.target);

    console.log(evn.currentTarget);
    evn.currentTarget.className += " active";
    // evn.currentTarget.className += evn.currentTarget.className.replace("tablinks", "tablinks active");
    // evn.currentTarget.classList.add("active");
}
document.getElementById("autoclick").click();