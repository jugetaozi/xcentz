/**
 * restful api 子路由
 */

const router = require('koa-router')()
const XcentzList = require('./../controllers/xcentz-list')
const UserInfo = require('./../controllers/user-info')
const Lottery = require('./../controllers/lottery')
const File = require('./../controllers/file')

const routers = router
	.post('/getList', XcentzList.getNewList)
	.post('/queryLotteryData', Lottery.queryLotteryData)
	.post('/createUser', XcentzList.createUser)
	.post('/loginIn', UserInfo.loginIn)
	.post('/download', File.download)
	.post('/uploadExcel', File.uploadExcel)

module.exports = routers
