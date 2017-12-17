let express = require( 'express' )

let router = express.Router()

router.use( '/local', require( './local' ) )
// 
module.exports = router
