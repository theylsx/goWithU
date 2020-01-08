// pages/studentAppointment/studentAppointment.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacherOpenId: '',
    teacherName: '',
    className: '',
    time: '',
  },

  formSubmit: function (e) {
    wx.requestSubscribeMessage({
      tmplIds: ['-LcIeb8ranqUmSo1oBVfxkuAmLLdbhupFlZ1u6o15Mk'],
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
    var that = this
    this.setData({
      formId: e.detail.formId
    }),
      console.log(this.data.formId)
    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'push',
      data: {
        name: app.globalData.name,
        className: that.data.className,
        time: that.data.time,
        teacherOpenId: that.data.teacherOpenId
      },
      success: res => {
        console.log(res)
        if(res.result.errCode !== 0){
          wx.showToast({
            icon : 'none',
            title: '填写信息出现错误，请联系老师',
            duration: 1000
          })
        }else{
          wx.showToast({
            title: '成功',
          })
          setTimeout(function () {
            wx.navigateBack({

            })
          }, 1500)
        }
     
      },
      fail: res => {
        console.log(res)
        wx.showToast({
          title: '出现错误',
        })
      }
    })
  },
  getClassName: function (e) {
    this.setData({
      className: e.detail.value
    })
  },

  getTime: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      teacherOpenId: options.teacherOpenId,
      teacherName: options.name
    })
    console.log(this.data.teacherOpenId)

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