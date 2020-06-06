// ==UserScript==
// @name         WebWhatsApp Dark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @match        https://web.whatsapp.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(window).on("load", function() {
        document.body.className = 'web dark';
    });
})();
