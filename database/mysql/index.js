let Sequelize = require( 'sequelize' ),
	path = require( 'path' ),
	fs = require( 'fs' ),
	log = require( '../../logs.js' ),
	sequelize
	
exports.initDatabase = ( config ) => {
	if ( sequelize ) {
		log.log( 'sequelize has been init')
		return sequelize
	}

	sequelize = new Sequelize({
		...config,
		timestamps: false,
		pool: {
			min: 0,
			max: 10,
			idle: 3000
		}
	})
	return sequelize
}

exports.syncTable = async () => {
	try
	{
		let user models = require( './user')
		Object.keys( models ).forEach( item => {
			item.sync()
		})
	}
	catch( err ){
		log.error( err )
		return
	}
}

exports.getModels = ( sequelize ) => {
	let models = {}
	//读取当前目录下除index.js外的所有文件（这些文件认为是models文件）
	fs.readdirSync( __dirname ).map( filename => {
		log.log( 'file:' + filename  )
		if( filename == 'index.js' ) return
		let model = require( './' + filename )( sequelize )
		model && ( log.log( 'model:' + JSON.stringify( model ) ) )
		!model && ( log.error( 'model: null' ) )
		model && ( models = { ...models, ...model } )
	})
	log.log( JSON.stringify( 'models:' +  models ) )

	return models
}