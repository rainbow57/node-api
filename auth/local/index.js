let express = require( 'express' ),
	passport = require( 'passport' ),
	router = express.Router()

router.use( '/', ( req, res, next ) => {
	//验证码,测试环境不用验证码
	if ( process.env.NODE_ENV === 'test' ){
		next()
		return
	}

	let error_msg,
		language = req.acceptsLanguages( 'en', 'zh' ) || 'en' , //默认使用英文
		message = require( '../message' )[ language ],
		{ username, password, captcha } = req.body
	if ( !captcha ){
		error_msg = message.captchaIsEmpty
	}
	else if ( req.session.captcha != captcha ){
		error_msg = message.captchaError
	}
	// else if ( !username || !password ) {
	// 	error_msg = message.userNameOrPasswordIsEmpty
	// }
	if ( error_msg ) {
		return res.json({
			success: false,
			message: error_msg,
			data: null
		})
	}
	next()
}, ( req, res, next ) => {
	passport.authenticate( 'local', ( error, user, info ) => {
		if ( error ){
			return res.status( 401 ).send()
		}
		if ( info ){
			return res.status( 403 ).send( info );
		}
		//通过验证
		
	})
})

module.exports = router