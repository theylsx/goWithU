// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:["语文", "数学", "英语", "物理", "化学"],
    courseIcon:["../../icon/chinese.png", "../../icon/math.png", "../../icon/english.png", "../../icon/physics.png", "../../icon/chemical.png"],
    courseMotto: ["无丝竹之乱耳，无案牍之劳形", "a²+b²=c²", "Nothing is impossible", "E=mc²", "H₂CO₃⇌CO₂↑+H₂O"],
    current: 0,
    video: [{
      type: 'primary',
      text: '查看视频',
    }],
    homework: [{
      type: 'primary',
      text: '开始学习',
    }]
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

  onChange: function(e){
    console.log(this.data.current);
    var that = this;
    that.setData({
      current: e.detail.key
    })
  },

  clickCard: function(e){
    console.log(e);
    wx.navigateTo({
      url: '../video/video',
    })
  },

  toHomework: function(e){
    wx.navigateTo({
      url: '../homework/homework',
    })
  }
})