// pages/studentFeedbackList/studentFeedbackList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedbackList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.url + '/getFeedbackList',
      method: 'POST',
      data:{
        "openId":app.globalData.openId
      },
      success: res=>{
        console.log(res)
       that.setData({
         feedbackList: res.data
       }) 
      },
      fail: res=>{
        console.log(res)
      }
    })
    console.log(this.data.feedbackList.data.id)

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

  onClick: function(e){
    wx.navigateTo({
      url: '../studentFeedback/studentFeedback?id=' + e.currentTarget.id
    })
  }
  
})