let passport = require( 'passport' ),
	LocalStrategy = require( 'passport-local' ).Stategy

let verifyCallback = ( req, username, password, done ) => {
	//从req的Header中取出用户信息
	
}

exports.setStrategy = ( user, config ) => {
	passport.use( new LocalStrategy({
		passReqToCallback: true
	}, verifyCallback ))
}