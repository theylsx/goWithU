// pages/post/post.js
const app = getApp()
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
   content: ''

  },
  getTitle: function(e) {
    this.data.title = e.detail.value;
  },

  getContent: function(e) {
    this.data.content = e.detail.value;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  onClick: function() {
    if(this.data.title !=  "" && this.data.content != ""){
      wx.request({
        url: app.globalData.url + '/post',
        method: 'POST',
        data: {
          'Title': this.data.title,
          'Content': this.data.content,
          'OpenId': app.globalData.openId,
          'Date': util.formatTime(new Date()),
          'UserAvatar': app.globalData.userInfo.avatarUrl
        },
        success: function (res) {
          console.log(res)
          wx.showToast({
            title: '成功',
            duration: 1500
          })
        },
        fail: function () {
          wx.showToast({
            title: "失败",
            duration: 1500
          })
        },
      }),
      setTimeout(function () {
        wx.switchTab({
          url: '../communicate/communicate',
        })
      }, 1500)
    }
    else{
      wx.showToast({
        title: "请填写完整信息",
        icon:"none",
        duration: 1500
      })
    }
   
      
  }
})