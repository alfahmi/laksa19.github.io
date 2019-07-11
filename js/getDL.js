
var dl = "https://github.com/laksa19/laksa19.github.io/blob/master/download/";
        var url = window.location+ '';
        var getDLink = url.split("?");
        var RDLink = url.split("?")[1];
        var DLink = RDLink.replace("_", " ");

        document.getElementById('fileDL').innerHTML = DLink.toUpperCase()
        function getLink(link){
                var cd = document.getElementById("countdown");
                var t = document.getElementById("title");
                var l = document.getElementById("link");
                var counter = 5;
                    setInterval(function() {
                    counter--;
                    if (counter >= 0) {
                        cd.innerHTML = counter;
                    }
                    if (counter === 0) {
                        t.innerHTML = "LINK AVAILABLE"
                        cd.innerHTML = "Download"
                        l.href = link
                        setTimeout(function(){
                            l.click()
                        },(1000))
                    clearInterval(counter);
                    }
                }, 1000);
            }

        if(RDLink == "mikhmon_portable"){
            getLink(dl+"mikhmonv3ws.zip?raw=true")
        }else if(RDLink == "mikhmon_for_webserver"){
            getLink("https://github.com/laksa19/mikhmonv3/archive/master.zip")
        }else if(RDLink == "update.zip"){
            getLink(dl+"update.zip?raw=true")
        }else if(RDLink == "template_hotspot"){
            getLink("https://codeload.github.com/laksa19/template-hotspot-mikhmon/zip/master")
        }else if(RDLink == "vc9"){
            getLink("ss")
        }

