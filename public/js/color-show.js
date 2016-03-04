'use strict';


// Call this function when the page loads (the "ready" event)

$(document).ready(function() {
	initializePage();
    var clicked = sessionStorage.getItem('clicked');
    var bkgdColor = sessionStorage.getItem('color0');
    var foreColor = sessionStorage.getItem('color2');
    var orientation = "left top";
    var blck = "#000";



    if(bkgdColor != "#FFF")
    {
    	foreColor = "#FFF";
    }

    var x = document.getElementById("donutchart");
	if (clicked)
	{
		$('body').css({
  'background' : '-webkit-linear-gradient(bottom left,' + bkgdColor + ', ' + blck + ') no-repeat',

 // 'background' : '-moz-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ')',
  //'background' : '-o-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ')',
  //'background' : '-ms-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ')',
  //'background' : 'linear-gradient(to right,' + rgba + ', ' + rgbaTwo + ')'
});

		//$("body").css({"background": "-webkit-linear-gradient(#000 30%, " + bkgdColor + ")"});
       // $('body').css("background-color","linear-gradient(left, rgba("+bkgdColor+",0.0), rgba("+bkgdColor+",0.2)");

		//$('body').css('background-color', bkgdColor);
		$('body').css('color', foreColor);
		//$('.thumbnail').css('background-color', bkgdColor);
$('.thumbnail').css({
  'background' : '-webkit-linear-gradient(top,' + bkgdColor + ', ' + blck + ') no-repeat',

 // 'background' : '-moz-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ')',
  //'background' : '-o-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ')',
  //'background' : '-ms-linear-gradient(left,' + rgba + ', ' + rgbaTwo + ')',
  //'background' : 'linear-gradient(to right,' + rgba + ', ' + rgbaTwo + ')'
});

        $('.thumbnail h3').css('color', foreColor);
	}
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$('#colorBtn').click(randomizeColors);

}




function randomizeColors(e) {
	console.log("User clicked on color button");
	$.get("/palette", doColorStuff);
	sessionStorage.setItem('clicked', 'true');
}

function doColorStuff(colorData){
  var colors = colorData['colors']['hex'];
  var blck = "#000";
  var colore = colors[0];
  console.log(colors);

$('body').css({
  'background' : '-webkit-linear-gradient(bottom left,' + colore + ', ' + blck + ')'}); 
 //$('body').css('background-color', colors[0]);
$('.thumbnail').css('background-color', colors[1]);
//$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
//$('p').css('color', colors[3]);
//$('.project img').css('opacity', .75);

sessionStorage.setItem('clicked', 'true');
sessionStorage.setItem('color0', colors[0]);
sessionStorage.setItem('color2', colors[2]);
}