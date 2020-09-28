hits = 0;
var hitElement = document.querySelector( '.hits' );
document.body.onkeyup = function(e) {
  addHit();
}

var addHit = function() {
  hits++;
}

var renderHits = function() {
  alert("You have hit a key on the keyboard: " + hits + " times.")
}

var resetHits = function() {
  hits = 0;
  renderHits();
}
