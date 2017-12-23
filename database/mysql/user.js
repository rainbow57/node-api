/*
用户相关的表
*/
let Sequelize = require( 'sequelize' )

module.exports = ( sequelize ) => {
	let tableSettings = {
			timestamps: false,
			freezeTableName: true
		},
		User = sequelize.define( 'user', {
			//自增，主键
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			username: {
				type: Sequelize.STRING,
				unique: 'usernameidx',
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			salt: {
				type: Sequelize.STRING
			},
			avatar: Sequelize.STRING, //头像
			email: Sequelize.STRING,
			phone: Sequelize.STRING
		}, tableSettings),
		Token = sequelize.define( 'token', {
			id: {
				type: Sequelize.STRING,
				primaryKey: true
			}
			userId: Sequelize.INTEGER,
			deviceType: Sequelize.STRING,
			deviceName: Sequelize.STRING,
			expireTime: Sequelize.BIGINT, //到期时间
			clientSecret: Sequelize.STRING,
			serverSecret: Sequelize.STRING,
			created: Sequelize.BIGINT,
			updated: Sequelize.BIGINT
		}, tableSettings )

	return {
		User,
		Passport
	}
}