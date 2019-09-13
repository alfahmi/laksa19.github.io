// ==UserScript==
// @name         Auto Click WA
// @namespace    https://laksa19.github.io/autowa
// @updateURL    https://raw.githubusercontent.com/laksa19/autowa/master/autowa.user.js
// @downloadURL  https://raw.githubusercontent.com/laksa19/autowa/master/autowa.user.js
// @version      0.0.20
// @author       Laksamadi Guko
// @description  Auto Click For Whatsapp Web
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var url = new URL(window.location);
    var guko = url.searchParams.get("guko");

    if(guko == "joss"){


        var auto = setInterval(function(){
            if(document.getElementsByTagName('button')[5]){
                document.getElementsByTagName('button')[5].click();
                closeWA();
            }

        },2000)

        setInterval(function(){
            var x = document.getElementsByTagName('div');
            for (var i = 0; i < x.length; i++) {
                if((x[i].innerHTML) == "OK"){
                    x[i].click();
                    closeWA();
                }
            }
        },2000)

        function closeWA(){
            setTimeout(function(){
                window.close();
            },3500)
        }



    }
})();

