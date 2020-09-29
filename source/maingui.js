//install libs in to site:
var script1=document.createElement('script');
script1.type='text/javascript';
script1.crossOrigin = "anonymous";
script1.src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script1);

var script=document.createElement('script');
script.type='text/javascript';
script.crossOrigin = "anonymous";
script.src='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
document.getElementsByTagName('head')[0].appendChild(script);


//Make da gui
//Im out of my area right now because we do all of this with dom manipulation in js


//some css
var x = document.createElement("LINK");
  x.crossOrigin = "anonymous";
  x.setAttribute("rel", "stylesheet");
  x.setAttribute("type", "text/css");
  x.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css");
  document.head.appendChild(x);

//Give it gui
function openscgui(){
  $( function() {
    $( "#mainbox" ).dialog();
    } );
}


//container
var div = document.createElement("DIV");
div.id = "mainbox";
div.title = "Key Counter";
document.body.appendChild(div);

//Counter
var p = document.createElement("P");
p.innerHTML = "You have hit a key on the keyboard: ";
document.getElementById("mainbox").appendChild(p);

var span = document.createElement("SPAN");
span.innerHTML = 0;
span.className = "hits";
document.getElementById("mainbox").appendChild(span);

var pp = document.createElement("P");
pp.innerHTML = " times.";
document.getElementById("mainbox").appendChild(pp);

var xx = document.createElement("INPUT");
  xx.setAttribute("type", "text");
  xx.setAttribute("value", "Type here!");
  document.getElementById("mainbox").appendChild(xx);





// Make it work

hits = 0;
var hitElement = document.querySelector( '.hits' );
document.body.onkeyup = function(e) {
  addHit();
}

var addHit = function() {
  hits++;
  renderHits();
}

var renderHits = function() {
  hitElement.innerHTML = hits;
}

var resetHits = function() {
  hits = 0;
  renderHits();
}
