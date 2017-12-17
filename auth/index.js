let express = require( 'express' ),
	router = express.Router(),
	config = require( '../config/' + ( process.env.NODE_ENV || 'development' ))

//添加策略
require( './local/strategy' ).setStrategy( user, config )

router.use( '/local', require( './local' ) )
// 
module.exports = router
