arven-design
============

Web page design templates and images for color schemes, etc.

GetBootstrapImporter
--------------------

This is a little utility to take less variables (and only
variables) and convert them into a format that can be pushed
into the getbootstrap.com customizer. The customizer doesn't
have the ability to save or import a set of values, nor does
it have color pickers or any other useful features. This tiny
script just takes a URL of less variables, and dumps it all
in the web page. It's definitely likely to break if the site
layout or element IDs change.

To use the importer, just nagivate to the customization page
http://getbootstrap.com/customize/ and copy and paste a URL
to a less file. The format is very limited. It must be single
line CSS stuff like so: "@somevariable: #value;" one per line.
As need arises more parsing could be added, but for any sort
of "generator site" to be importable, that's all that's needed.
