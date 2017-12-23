process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require( 'express' ),
	bodyParser = require( 'body-parser'),
	config = require( './config/' + process.env.NODE_ENV ),
	log = require( './logs.js' )

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: false }) )

require( './routers' )( app )

app.use( function( req, res, next ){
	res.send('ok')
})

app.listen( config.port )