// ==UserScript==
// @name          FixedPositionToStatic
// @namespace     http://github.com/Arven/arven-design
// @description	  Converts fixed positioned elements to static
// @include       http://*.tld/*
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

Array.forEach(
    document.querySelectorAll("div")
    ,function(el) {
        if (window.getComputedStyle(el).position === 'fixed') {
            el.style.position = 'static';
        }
    }
);
