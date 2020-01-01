// pages/studentInformation/studentInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name: '',
    Hospital: '',
    Information: 'qweqweqwe',
    OpenId: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      OpenId: options.studentOpenId
    })
    var that = this
    wx.request({
      url: 'http://localhost:8080/getStudent',
      method: 'POST',
      data: {
        "OpenId": this.data.OpenId
      },
      success: function (res) {
        that.setData({
          Name: res.data.name,
          Hospital: res.data.hospital,
          Information: res.data.information
        })
        console.log(that.data.Information)
      }
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
    this.setData({
      Name: '',
      Hospital: '',
      Information: '',
      OpenId: ''
    })

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