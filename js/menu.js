document.write(`
<div class="topnav" id="TopNav">
    <a id="home" href="./"><i class="fa fa-home"></i></a>
    <a id="fitur" href="./fitur.html">Fitur</a>
    <div id="download" class="dropdown">
        <button class="dropbtn">Download
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="./download.html">MIKHMON</a>
            <a href="./template.html">Template Login Page</a>
            <a href="./voucher.html">Template Voucher</a>
        </div>
    </div>
    <a id="tutorial" href="./tutorial.html">Tutorial</a>
    <a id="support" href="./support.html">Dukungan</a>
    <a id="about" href="./about.html">About</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="TopNav()">&#9776;</a>
</div>
`);

function TopNav() {
    var x = document.getElementById("TopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var uri = window.location.pathname;
var uri = uri.split("/");
var uri = uri[uri.length - 1];
var uri = uri.split(".html")[0];
if (uri === "") {
    $(function () {
        $("#home").addClass("active");
    });
} else if (uri === "fitur") {
    $(function () {
        $("#fitur").addClass("active");
    });
} else if (uri === "download") {
    $(function () {
        $("#download").addClass("active");
    });
} else if (uri === "template") {
    $(function () {
        $("#download").addClass("active");
    });
} else if (uri === "voucher") {
    $(function () {
        $("#download").addClass("active");
    });
} else if (uri === "tutorial") {
    $(function () {
        $("#tutorial").addClass("active");
    });
} else if (uri === "support") {
    $(function () {
        $("#support").addClass("active");
    });
} else if (uri === "about") {
    $(function () {
        $("#about").addClass("active");
    });
}