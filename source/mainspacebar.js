hits = 0;
var hitElement = document.querySelector( '.hits' );
document.body.onkeyup = function(e) {
  if( e.keyCode == 32 ) {
    addHit();
  }
}

var addHit = function() {
  hits++;
}

var renderHits = function() {
  alert("You have hit the spacebar: " + hits + " times.")
}

var resetHits = function() {
  hits = 0;
  renderHits();
}
