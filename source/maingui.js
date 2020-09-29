//install libs in to site:
var script=document.createElement('script');
script.type='text/javascript';
script.src='https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var script1=document.createElement('script');
script1.type='text/javascript';
script1.src='https://code.jquery.com/jquery-3.5.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script1);

//Make da gui
//Im out of my area right now because we do all of this with dom manipulation in js


//Give it gui
function openscgui(){
  $( function() {
    $( "#mainbox" ).dialog();
    } );
}


//container
var div = document.createElement("DIV");
div.id = "mainbox";
div.title = "Spacebar Counter";
document.body.appendChild(div);

//Counter
var p = document.createElement("P");
p.innerHTML = "You have hit the spacebar: ";
document.getElementById("mainbox").appendChild(p);

var span = document.createElement("SPAN");
span.innerHTML = 0;
span.className = "hits";
document.getElementById("mainbox").appendChild(span);

var pp = document.createElement("P");
pp.innerHTML = " times.";
document.getElementById("mainbox").appendChild(pp);

var btn = document.createElement("BUTTON");
btn.innerHTML = "Reset";
btn.onclick = resetHits();
document.getElementById("mainbox").appendChild(btn);






// Make it work

hits = 0;
var hitElement = document.querySelector( '.hits' );
document.body.onkeyup = function(e) {
  if( e.keyCode == 32 ) {
    addHit();
  }
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

