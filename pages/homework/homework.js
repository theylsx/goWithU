// pages/homework/homework.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    current: 1,
    show: 0,
    disabled: false,
    work: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id,
      studentOpenId: options.studentOpenId
    })
    if (app.globalData.type == 1) {
      this.setData({
        disabled: true
      })
    }
    var that = this
    wx.request({
      url: app.globalData.url + '/getWork',
      method: 'POST',
      data: {
        id: that.data.id
      },
      success: res => {
        console.log(res.data)
        that.setData({
          work: res.data
        })
      }
    })
    wx.request({
      url: app.globalData.url + '/getAnswer',
      method: 'POST',
      data: {
        openId: that.data.studentOpenId,
        workId: that.data.id
      },
      success: res => {
        console.log(res.data)
        if (res !== 0) {
          that.setData({
            answer: res.data.answer,
            value1: that.data.answer[0],
            disabled: true
          })
        }

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
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.current,
      value1: this.data.answer[this.data.current]
    })
  },

  onChange2(field, e) {
    this.setData({
      [field]: e.detail.value
    })

    console.log('radio发生change事件，携带value值为：', e.detail)
  },
  onChange1(e) {
    this.onChange2('value1', e)
    console.log(e)
    
  }
})