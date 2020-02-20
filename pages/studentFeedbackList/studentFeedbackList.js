// pages/studentFeedbackList/studentFeedbackList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedbackList: [],
    idList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: app.globalData.url + '/getFeedbackList',
      method: 'POST',
      data: {
        "openId": app.globalData.openId
      },
      success: res => {
        console.log(res)
        var tmpList = []
        for (var i = 0; i < res.data.length; i++) {
          var id = res.data[i].id.timeSecond.toString(16) + res.data[i].id.machineIdentifier.toString(16) + res.data[i].id.processIdentifier.toString(16) + res.data[i].id.counter.toString(16)
          tmpList.push(id)
        }
        that.setData({
          feedbackList: res.data,
          idList: tmpList
        })
      },
      fail: res => {
        console.log(res)
      }
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

  },

  onClick: function(e) {
    wx.navigateTo({
      url: '../studentFeedback/studentFeedback?id=' + e.currentTarget.id
    })
  }

})