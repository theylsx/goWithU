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
    work: '',
    answer: [],
    ans: [],
    studentOpenId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      studentOpenId: options.studentOpenId
    })
    console.log(this.data)
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
          work: res.data,
          answer: new Array(res.data.count)
        })
        var t = []
        for (var i = 0; i < (that.data.work.answer.length); i++) {
          t[i] = that.iToA(that.data.work.answer[i])
        }
        that.setData({
          ans: t
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
        console.log(res)
        if (res.data != "") {
          that.setData({
            answer: res.data.answer,
            value1: res.data.answer[0],
            disabled: true
          })
        }

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

  iToA(str) {
    switch (str) {
      case "1": return "A";
      case "2": return "B";
      case "3": return "C";
      case "3": return "D";
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

  onClick(e) {
    var that = this
    wx.request({
      url: app.globalData.url + "/addAnswer",
      method: "POST",
      data: {
        answerList: that.data.answer,
        workId: that.data.id,
        studentOpenId: that.data.studentOpenId
      },
      success: function (res) {
        console.log(res)
        wx.navigateBack()
      }
    })
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
    var tmpList = this.data.answer
    console.log(this.data.current)
    console.log('radio发生change事件，携带value值为：', e.detail)
    tmpList[this.data.current - 1] = e.detail.value
    this.setData({
      answer: tmpList
    })
    console.log(this.data.answer)
  },
  onChange1(e) {
    this.onChange2('value1', e)
    console.log(e)

  }
})