# Invisable Key Counter
An invisable key counter bookmarklet.

## Install

To install these bookmarklets, just highlight the text and drag it to the bookmarks bar then click them to use them!

### Spacebar clicker

Copy the code to bookmarks bar
Click this bookmart to activate the script
Install:

javascript:hits=0;var hitElement=document.querySelector(".hits");document.body.onkeyup=function(t){32==t.keyCode&&addHit()};var addHit=function(){hits++},renderHits=function(){alert("You have hit the spacebar: "+hits+" times.")},resetHits=function(){hits=0,renderHits()};

Click this button to view your click count:

javascript:renderHits()


### Any Key clicker

Copy the code to bookmarks bar
Click this bookmart to activate the script
Install:

javascript:hits=0;var hitElement=document.querySelector(".hits");document.body.onkeyup=function(t){addHit()};var addHit=function(){hits++},renderHits=function(){alert("You have hit a key on the keyboard: "+hits+" times.")},resetHits=function(){hits=0,renderHits()};

Click this button to view your click count:

javascript:renderHits()

### Any key clicker gui

Copy the code to bookmarks bar
Click this bookmart to activate the script
Install:

javascript:var script1=document.createElement("script");script1.type="text/javascript",script1.crossOrigin="anonymous",script1.src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(script1);var script=document.createElement("script");script.type="text/javascript",script.crossOrigin="anonymous",script.src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",document.getElementsByTagName("head")[0].appendChild(script);var x=document.createElement("LINK");function openscgui(){$(function(){$("#mainbox").dialog()})}x.crossOrigin="anonymous",x.setAttribute("rel","stylesheet"),x.setAttribute("type","text/css"),x.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"),document.head.appendChild(x);var div=document.createElement("DIV");div.id="mainbox",div.title="Key Counter",document.body.appendChild(div);var p=document.createElement("P");p.innerHTML="You have hit a key on the keyboard: ",document.getElementById("mainbox").appendChild(p);var span=document.createElement("SPAN");span.innerHTML=0,span.className="hits",document.getElementById("mainbox").appendChild(span);var pp=document.createElement("P");pp.innerHTML=" times.",document.getElementById("mainbox").appendChild(pp);var xx=document.createElement("INPUT");xx.setAttribute("type","text"),xx.setAttribute("value","Type here!"),document.getElementById("mainbox").appendChild(xx),hits=0;var hitElement=document.querySelector(".hits");document.body.onkeyup=function(e){addHit()};var addHit=function(){hits++,renderHits()},renderHits=function(){hitElement.innerHTML=hits},resetHits=function(){hits=0,renderHits()};

Click this button to view your click count:

javascript:openscgui()
