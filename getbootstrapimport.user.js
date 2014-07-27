// ==UserScript==
// @name          GetBootstrapImporter
// @namespace     http://github.com/Arven/arven-design
// @description	  Imports a style to Bootstrap Customizer at getbootstrap.com
// @include       http://getbootstrap.com/customize/*
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

function setvalues() {
  var testfile = prompt("Please enter the path to your less variables data" ,"http://github.com/Arven/arven-design/testfile.less");
  if (testfile != null) {
    // Create a request, asking the server for a JSON response via the Accept header
    // Also logging whenever the state of the request changes
    var ret = GM_xmlhttpRequest({
      method: "GET",
      headers: {"Accept": "application/json"},
      url: testfile,
      onreadystatechange: function(res) {
        GM_log("Request state changed to: " + res.readyState);
      },
      onload: function(res) {
        // Lets assume we get Text back...
        var text = res.responseText;
        lines = text.split("\n");
        for(var i = 0; i < lines.length; i++) {
          var line = lines[i];
          if(line.substr(0, 1) == "@") {
            // We are actually parsing a variable.
            var re = /(@[\w-]+):\s*(.*);/;
            if(re.test(line) == true) {
              var m = line.match(re);
              //alert("input-@" + m[1] + "=" + m[2]);
              document.getElementById("input-"+m[1]).value = m[2];
            }
          }
        }
      }
    });
  
  }
}

GM_registerMenuCommand( "Set values for Bootstrap", setvalues );
