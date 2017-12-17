


module.exports = ( app ) => {
	app.use( '/auth', require( '../auth' ) )//用户验证
}