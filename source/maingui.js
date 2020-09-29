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

//give some style:
var sheet = window.document.styleSheets[0];
sheet.insertRule('body{margin:0;font-family:'Open Sans',sans-serif;position:absolute;width:100vw;height:100vh;overflow:hidden;display:table}#activity{display:table-cell;text-align:center;vertical-align:middle}#activity:before{content:'';position:absolute;top:0;left:0;width:100vw;height:20vh;background:rgba(0,173,239,.5)}#activity:after{content:'';position:absolute;bottom:0;left:0;width:100vw;height:20vh;background:rgba(235,0,138,.5)}#result{text-transform:uppercase}.tryagain{background-attachment:scroll;background-clip:border-box;background-color:rgb(127,206,119);background-image:none;background-origin:padding-box;background-size:auto;border-bottom-left-radius:16px;border-bottom-right-radius:16px;border-top-left-radius:16px;border-top-right-radius:16px;box-sizing:border-box;color:rgb(255,255,255);cursor:pointer;display:inline-block;font-family:'Open Sans',sans-serif;font-size:32px;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:93px;line-height:normal;margin-bottom:8px;margin-left:9.28px;margin-right:9.28px;margin-top:8px;min-height:0;min-width:208px;outline-width:0;padding-bottom:24px;padding-left:24px;padding-right:24px;padding-top:24px;position:relative;text-align:center;text-transform:none;transition-delay:0s;transition-duration:0.28s;transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);width:351.594px;z-index:0;-webkit-user-select:none}a:link,a:hover,a:visited,a:active{text-decoration:none}.hits{font-size:2em;font-weight:bolder}', sheet.cssRules.length);

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
document.document.getElementById("mainbox").appendChild(p);

var span = document.createElement("SPAN");
span.innerHTML = 0;
span.className = "hits";
document.document.getElementById("mainbox").appendChild(span);

var pp = document.createElement("P");
pp.innerHTML = " times.";
document.document.getElementById("mainbox").appendChild(pp);

var btn = document.createElement("BUTTON");
btn.innerHTML = "Reset";
btn.onclick = resetHits();
document.document.getElementById("mainbox").appendChild(btn);






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

