// pages/myStudent/myStudent.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NameList: [],
    OpenIdList: []

  },

  addStudent: function () {
    wx.navigateTo({
      url: '../addStudent/addStudent',
    })
  },

  tap: function (e) {
    wx: wx.navigateTo({
      url: '../studentInformation/studentInformation?studentOpenId=' + e.currentTarget.id

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.url + '/getMyStudent',
      method: 'POST',
      data:{
        "OpenId":app.globalData.openId 
      },
      success: res=>{
        console.log(res)
        var mNameList = []
        var mOpenList = []
        for(var index in res.data){
          mNameList.push(res.data[index].name)
          mOpenList.push(res.data[index].openId)
        }
        this.setData({
          NameList: mNameList,
          OpenIdList: mOpenList
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