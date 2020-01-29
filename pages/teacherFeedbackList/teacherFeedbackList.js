// pages/teacherFeedbackList/teacherFeedbackList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentOpenId: '',
    feedbackList: [],
    idList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      studentOpenId: options.id
    })
    var that = this
    wx.request({
      url: app.globalData.url + "/getFeedbackList",
      method: 'POST',
      data: {
        openId: that.data.studentOpenId
      },
      success: res => {
        console.log(res.data)
        var tmpList = []
        for (var i = 0; i < res.data.length; i++) {
          console.log(res.data[i])
          var id = res.data[i].id.timeSecond.toString(16) + res.data[i].id.machineIdentifier.toString(16) + res.data[i].id.processIdentifier.toString(16) + res.data[i].id.counter.toString(16)
          tmpList.push(id)
        }
        that.setData({
          feedbackList: res.data,
          idList: tmpList
        })
      }
    })
    console.log(this.data.feedbackList)
  },

  addFeedback: function() {
    var that = this
    wx.request({
      url: app.globalData.url + '/addFeedback',
      method: 'POST',
      data: {
        studentOpenId: that.data.studentOpenId
      },
      success: res => {
        console.log(res)
        wx.request({
          url: app.globalData.url + "/getFeedbackList",
          method: 'POST',
          data: {
            openId: that.data.studentOpenId
          },
          success: res => {

            that.setData({
              feedbackList: res.data
            })
          }
        })
      }
    })

  },

  onClick: function(e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../studentFeedback/studentFeedback?id=' + e.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})