let log4js = require( 'log4js' ),
	fs = require( 'fs' ),
	path = require( 'path' ),
	logDirectory = path.join( __dirname , 'logs' )

//ensure folder exists
fs.existsSync( logDirectory ) || fs.mkdirSync( logDirectory )


let log = new log4js.getLogger()

process.env.NODE_ENV == 'production' ? ( log.level = 'ERROR' ) : ( log.level = 'DEBUGGER')

module.exports = log