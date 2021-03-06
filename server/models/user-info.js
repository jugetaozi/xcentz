const dbUtils = require('./../utils/db-util')
const jwt = require('jsonwebtoken')
const codes = require('../codes/users')
const config = require('../../config.js')
const userInfo = {
	/**
	 * 用户登录
	 *
	 */
	async loginIn(options) {
		// let _sql = `
		// SELECT * from v_detail_review
		//   where first_name="${options.first_name}" or last_name="${options.last_name}"
		// 	limit 1`

		// let _sql = `SELECT * FROM User_Info_N where name="${options.name}" and password="${options.password}"`
		let _sql = `SELECT * FROM User_Info_N where name="${
			options.name
		}" and password="${options.password}"`
		// console.log(_sql);
		let result = await dbUtils.query(_sql)
		let _obj = {
			data: null,
			code: 999999,
			message: '',
		}
		if (Array.isArray(result) && result.length > 0) {
			delete result[0]['name']
			delete result[0]['password']
			const token = jwt.sign(
				{
					...result[0],
				},
				config.secretkey,
				{
					expiresIn: '2h',
				}
			)
			_obj.data = {
				token,
				userInfo: result[0],
			}
			_obj.message = '登录成功'
			_obj.code = 0
		} else {
			_obj.message = codes.FAIL_USER_NAME_OR_PASSWORD_ERROR
		}
		return _obj
	},
}

module.exports = userInfo
