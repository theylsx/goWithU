// pages/communicate/communicate.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    picList: ["/icon/math.png", "/icon/chinese.png", "/icon/english.png"],
    dataList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.url + '/getAllPost',
      method: 'Get',
      success: res => {
        console.log(res)
        that.setData({
          dataList: res.data.list
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.request({
      url: app.globalData.url + '/getAllPost',
      method: 'Get',
      success: res => {
        console.log(res)
        that.setData({
          dataList: res.data.list
        })
      },
      fail: res => {
        console.log(res)
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

  },

  clickToPost: function () {
    wx.navigateTo({
      url: '../post/post',
    })
  },

  onClick: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../showPost/showPost?jsonStr=' + e.currentTarget.id,
    })
  },

  onChange: function (e) {
    console.log(this.data.current);
    var that = this;
    that.setData({
      current: e.detail.key
    })
  }

})