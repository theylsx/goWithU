// pages/course/course.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // course:["微课程", "科普视频", "微课程", "微课程", "微课程"],
    // courseBody: ["掌握图形的面积", "探索大自然的美妙", "微课程", "微课程", "微课程"],
    // courseIcon:["../../icon/math.png", "../../icon/physics.png", "../../icon/english.png", "../../icon/physics.png", "../../icon/chemical.png"],
    // courseMotto: ["s = a x b", "a²+b²=c²", "Nothing is impossible", "E=mc²", "H₂CO₃⇌CO₂↑+H₂O"],
    // current: 0,
    // work:["第一次课程", "第二次课程", "第三次课程"],
    // video: [{
    //   type: 'primary',
    //   text: '查看视频',
    // }],
    homework: [{
      type: 'primary',
      text: '开始学习',
    }],
    courseIcon: "../../icon/physics.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    if (app.globalData.type == 1) {
      wx.request({
        url: app.globalData.url + '/getTeacherWork',
        method: 'POST',
        data: {
          teacherOpenId: app.globalData.openId
        },
        success: function (res) {
          console.log(res)
          var tmpList = []
          for (var i = 0; i < res.data.length; i++) {
            var id = res.data[i].id.timeSecond.toString(16) + res.data[i].id.machineIdentifier.toString(16) + res.data[i].id.processIdentifier.toString(16) + res.data[i].id.counter.toString(16)
            tmpList.push(id)
          }
          that.setData({
            workList: res.data,
            idList: tmpList
          })

        }
      })
    } else {
      wx.request({
        url: app.globalData.url + '/getStudentWork',
        method: 'POST',
        data: {
          studentOpenId: app.globalData.openId
        },
        success: function (res) {
          console.log(res)
          var tmpList = []
          for (var i = 0; i < res.data.length; i++) {
            var id = res.data[i].id.timeSecond.toString(16) + res.data[i].id.machineIdentifier.toString(16) + res.data[i].id.processIdentifier.toString(16) + res.data[i].id.counter.toString(16)
            tmpList.push(id)
          }
          that.setData({
            workList: res.data,
            idList: tmpList
          })

        }
      })
    }


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onChange: function (e) {
    console.log(this.data.current);
    var that = this;
    that.setData({
      current: e.detail.key
    })
  },

  clickCard: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../video/video',
    })
  },

  toHomework: function (e) {
    console.log(e)
    wx.navigateTo({
      url: "../homework/homework?id=" + e.currentTarget.id + "&studentOpenId=" + e.currentTarget.dataset.studentopenid
    })
    // wx.navigateTo({
    //   url: '../courseResources/courseResources',
    // })
  }
})