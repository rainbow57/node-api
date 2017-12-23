let path = require( 'path' ),
	fs = require( 'fs' ),
	log = require( '../logs.js'),
	config = require( '../config/' + process.env.NODE_ENV ),
	db = config.DataBase.dialect ? require( './' + config.DataBase.dialect ) : null,
	sequelize = db && db.initDatabase( config.DataBase )

db && db.syncTable()

module.exports = db && db.getModels( sequelize )

