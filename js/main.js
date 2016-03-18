// Add new article and text when the h1 element is clicked

var head = document.getElementsByTagName( 'h1' );

head.addEventListener( 'click', function() {
	var article = document.createElement( 'article' );
	article.innerHTML = '<h3>You clicked the header!</h3>';
	document.getElementById( 'container' ).appendChild( article );

} );

// Displays date when key is pressed over id uno.

var uno = document.getElementById( 'uno' );

uno.addEventListener( 'keypress', function() {
	document.body.innerHTML = '<input type="date">';

} );

//Change color of Event Listener Dos text

var dos = document.getElementById( 'dos' );

dos.addEventListener( 'mouseover', function() {
	var change = document.getElementById( 'dos' );
	change.className = 'colorchange';

} );
