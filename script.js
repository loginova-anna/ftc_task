window.onload = function() {
  var cells = Array.prototype.slice.call(document.getElementsByClassName('cell'));
  cells.forEach(function(item,index){
  	item.onclick = function(){
  		console.log(item.innerHTML||'Error');
  	}
  });
  var btn = document.getElementById('btn');
  btn.onclick = getSubString;
};

var getSubString = function(){
	var str='abcdbcdecdefbcdeabcd';
	var result = str.match(/b[^e]*e/);
	console.log(result[0]);
}