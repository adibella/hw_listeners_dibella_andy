var listen = document.getElementsByTagName( 'h1' )[0];
var num = 0;

listen.addEventListener( 'click', function() {
	num++;
	var New = document.createElement( 'P' );
	New.innerHTML = 'This is click number ' + New;
	document.body.appendChild( New );
} );
