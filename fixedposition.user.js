// ==UserScript==
// @name          FixedPositionToStatic
// @namespace     http://github.com/Arven/arven-design
// @description	  Converts fixed positioned elements to static
// @include       *://*/*
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

var myNodeList = document.querySelectorAll("div")
for (var i = 0; i < myNodeList.length; ++i) {
  var el = myNodeList[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
  if(window.getComputedStyle(el).position === 'fixed') {
      el.style.position = 'static';
  }
}
