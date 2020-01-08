// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: event.teacherOpenId,
      page: 'course',
      data: {
        name1: {
          value: event.name
        },
        name2: {
          value: event.className
        },
        date4: {
          value: event.time
        },
      },
      templateId: '-LcIeb8ranqUmSo1oBVfxkuAmLLdbhupFlZ1u6o15Mk'
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}