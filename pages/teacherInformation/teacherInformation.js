// pages/teacherInformation/teacherInformation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: '',
    name: '',
    email: '',
    place: '',
    introduction: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      openId: options.teacherOpenId
    })
    var that = this
    wx.request({
      url: app.globalData.url + '/getTeacher',
      method: 'POST',
      data: {
        openId: that.data.openId
      },
      success: function (res) {
        console.log(res)
        that.setData({
          name: res.data.name,
          email: res.data.email,
          place: res.data.place,
          introduction: res.data.information
        })
        console.log(that.data)
      },
      fail: res => {
        console.log(res)
      }
    })
  },

  onClick: function(){
    wx.navigateTo({
      url: '../studentAppointment/studentAppointment?teacherOpenId=' + this.data.openId + '&name='+this.data.name
    })
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

  }
})