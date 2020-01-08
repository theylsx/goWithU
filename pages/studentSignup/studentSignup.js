// pages/studentSignup/studentSignup.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    hospital: '',
    information: ''

  },
  getName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  getHospital: function (e) {
    this.setData({
      hospital: e.detail.value
    })
  },
  getInformation: function (e) {
    this.setData({
      information: e.detail.value
    })
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

  onClick: function () {
    var that = this
    console.log(that.data)
    wx.request({
      url: app.globalData.url + '/newStudent',
      method: 'POST',
      data: {
        openId: app.globalData.openId,
        name: that.data.name,
        hospital: that.data.hospital,
        information: that.data.information,

      },
      success: res => {
        console.log(res)
        wx.showToast({
          title: '已提交注册信息',
          duration: 1500
        })
        setTimeout(function () {
          wx.switchTab({
            url: '../course/course',
          })
        }, 1500)
      },
      fail: res => {
        console.log(res)
      }
    })

    console.log("switch")
  }
})