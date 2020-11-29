function changeColor(color){
	document.body.style.backgroundColor = color;
}

var tiempo = setInterval(function(){document.body.style.backgroundColor = "red"}, 1000);
var tiempo = setInterval(function(){document.body.style.backgroundColor = "blue"}, 2000);
var tiempo = setInterval(function(){document.body.style.backgroundColor = "black"}, 3000);
