// Add new article and text when the h1 element is clicked

var header = document.getElementsByTagName( 'h1' );

header.addEventListener( 'click', function() {
	var article = document.createElement( 'article' );
	article.innerHTML = '<p>You clicked the header!</p>';
	document.getElementById( 'container' ).appendChild( article );

} );

// Displays date when key is pressed over id uno.

var uno = document.getElementById( 'uno' );

uno.addEventListener( 'keypress', function() {
	document.innerHTML = '<input type="date">';
	document.getElementsByTagName( 'h2' ).appendChild( h1 );

} );

//Change color of Event Listener Dos text

var dos = document.getElementById( 'dos' );

dos.addEventListener( 'mouseover', function() {
	var change = document.getElementById( 'dos' );
	change.className = 'colorchange';

} );
