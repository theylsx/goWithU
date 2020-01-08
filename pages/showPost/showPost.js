// pages/showPost/showPost.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Title: '',
    Content: '',
    Date: '',
    PublisherName: '',
    Id: '',
    Avatar: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var id = JSON.stringify(options.jsonStr)
    console.log(options.jsonStr)
    this.setData({
      Id: options.jsonStr 
    })
    wx.request({
      url: app.globalData.url + '/getPost',
      method: 'POST',
      data:{
        stringId: this.data.Id
      },
      success: res=>{
        console.log(res)
        this.setData({
          Title: res.data.Title,
          Content: res.data.Content,
          Date: res.data.Date,
          PublisherName: res.data.PublisherName,
          Avatar: res.data.Avatar
        })
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
    console.log("hide")

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("unload")
    this.setData({
      Title: '',
      Content: '',
      Date: '',
      Id: ''
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