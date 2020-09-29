# Invisable Key Counter
An invisable key counter bookmarklet.

## Install

To install these bookmarklets, just highlight the text and drag it to the bookmarks bar then click them to use them!

### Spacebar clicker

Copy the code to bookmarks bar
Click this bookmart to activate the script
Install:

javascript:(function(){
	var script=document.createElement('script');
	script.type='text/javascript';
	script.src='https://cdn.jsdelivr.net/gh/Brenden2008/InvisableKeyCounter@master/source/mainspacebar.js';
	document.getElementsByTagName('head')[0].appendChild(script);
})();

Click this button to view your click count:

javascript:renderHits()
