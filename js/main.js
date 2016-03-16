var formSubmit = document.getElementByID( 'form' );

formSubmit.addEventListent( 'submission', function() {
	event.preventDefault();
	console.log( 'The firstname is ' + document.getElementByID( 'firstname' ).value );
	console.log( 'The firstname is ' + document.getElementByID( 'lastname' ).value );
	console.log( 'The firstname is ' + document.getElementByID( 'email' ).value );
	console.log( 'The firstname is ' + document.getElementByID( 'message' ).value );
} );
