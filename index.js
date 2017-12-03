let express = require( 'express' ),
	morgan = require( 'morgan' ),
	fs = require( 'fs' ),
	path = require( 'path' ),
	config = require( './' + Process.NODE_ENV || 'development' )

let app = express(),
	logDirectory = path.join( __dirname , 'logs' )

//ensure folder exists

fs.existsSync( logDirectory ) || fs.mkdirSync( logDirectory )

app.use( morgan( 'short' ) )

app.use( function( req, res, next ){
	res.send('ok')
})

app.listen( config.port )