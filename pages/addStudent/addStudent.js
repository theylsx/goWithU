// pages/addStudent/addStudent.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name: '',
    Hospital: ''

  },

  showToast: function () {
    wx.request({
      url: 'http://localhost:8080/addMyStudent',
      method: 'POST',
      data: {
        "Name": this.data.Name,
        "Hospital": this.data.Hospital,
        "MyOpenId": "o0yYO5LCHp58ZfkHMvSI5kSPvl-4",
      },
      success: res => {
        if (res.data == "fail") {
          wx.showToast({
            title: '找不到该学生',
            icon: 'loading',
            duration: 1500
          })
        }else if(res.data == "exist"){
          wx.showToast({
            title: '学生已存在',
            duration: 1500
          })
        } 
        else {
          wx.showToast({
            title: '添加成功',
            icon: '',
            image: '',
            duration: 1500,
            mask: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../myStudent/myStudent'
            })
          }, 1500);
        }
      }
    })

  },

  getName: function (e) {
    this.data.Name = e.detail.value
  },

  getHospital: function (e) {
    this.data.Hospital = e.detail.value
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

  }
})