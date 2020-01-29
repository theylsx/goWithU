// pages/studentWorkList/studentWorkList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: "",
    workList: [],
    idList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      openId: options.id
    })
    var that = this
    wx.request({
      url: app.globalData.url + "/getStudentWork",
      method: 'POST',
      data: {
        studentOpenId: that.data.openId
      },
      success: res => {
        console.log(res)
        var tmpList = []
        for (var i = 0; i < res.data.length; i++) {
          var id = res.data[i].id.timeSecond.toString(16) + res.data[i].id.machineIdentifier.toString(16) + res.data[i].id.processIdentifier.toString(16) + res.data[i].id.counter.toString(16)
          tmpList.push(id)
        }
        that.setData({
          workList: res.data,
          idList: tmpList
        })
      }
    })

  },

  clickToAdd: function(){
    wx.navigateTo({
      url: '../addWork/addWork?studentOpenId=' + this.data.openId,
    })
  },

  onClick: function(e){
    wx.navigateTo({
      url: "../homework/homework?id=" + e.currentTarget.id + "&studentOpenId=" + this.data.openId
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
    var that = this
    wx.request({
      url: app.globalData.url + "/getStudentWork",
      method: 'POST',
      data: {
        studentOpenId: that.data.openId
      },
      success: res => {
        console.log(res)
        that.setData({
          workList: res.data
        })
      }
    })
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