let passport = require( 'passport' ),
	LocalStrategy = require( 'passport-local' ).Strategy,
	message = require( '../message' )

let verifyCallback = 

exports.setStrategy = ( user, config ) => {
	passport.use( new LocalStrategy({
		passReqToCallback: true
	}, ( req, username, password, done ) => {
		//从req的Header中取出用户信息
		let token = req.get( 'Authorization' )
		token && ( token = token.replace( 'Token ', '' ) )
		if ( !token ){
			//没有验证信息，未登陆
			done( null, false, { code: 401, message: message.needLogin })
		}
	}))
}