// pages/studentFeedback/studentFeedback.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    studentName: '',
    headTeacher: '',
    date: '',
    className: '',
    teacher: '',
    goal: '',
    classNum: '',
    offlineNum: '',
    onlineNum: '',
    progress: '0',
    difficulty: '0',
    method: '0',
    attitude: '0',
    gains: '',
    recommend: ''

  },
  getStudentName: function (e) {
    this.setData({
      studentName: e.detail.value
    })
  },
  getHeadTeacher: function (e) {
    this.setData({
      headTeacher: e.detail.value
    })
  },
  getDate: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  getClassName: function (e) {
    this.setData({
      className: e.detail.value
    })
  },
  getTeacher: function (e) {
    this.setData({
      teacher: e.detail.value
    })
  },
  getGoal: function (e) {
    this.setData({
      goal: e.detail.value
    })
  },
  getClassNum: function (e) {
    this.setData({
      classNum: e.detail.value
    })
  },
  getOfflineNum: function (e) {
    this.setData({
      offlineNum: e.detail.value
    })
  },
  getOnlineNum: function (e) {
    this.setData({
      onlineNum: e.detail.value
    })
  },
  getGains: function (e) {
    this.setData({
      gains: e.detail.value
    })
  },
  getRecommend: function (e) {
    this.setData({
      recommend: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      id: options.id
    })
    wx.request({
      url: app.globalData.url + '/getFeedback',
      method: 'POST',
      data: {
        stringId: that.data.id
      },
      success: function (res) {
        that.setData({
          studentName: res.data.studentName,
          headTeacher: res.data.headTeacher,
          date: res.data.date,
          className: res.data.className,
          teacher: res.data.teacher,
          goal: res.data.goal,
          classNum: res.data.classNum,
          offlineNum: res.data.offlineNum,
          onlineNum: res.data.onlineNum,
          progress: res.data.progress,
          difficulty: res.data.difficulty,
          method: res.data.method,
          attitude: res.data.attitude,
          gains: res.data.gains,
          recommend: res.data.recommend

        })

      }
    })


  },

  onChange(field, e) {
    this.setData({
      [field]: e.detail.value
    })

    console.log('radio发生change事件，携带value值为：', e.detail)
  },

  onChangeProgress(e) {
    this.onChange('progress', e)
  },

  onChangeDifficulty(e) {
    this.onChange('difficulty', e)
  },

  onChangeMethod(e) {
    this.onChange('method', e)
  },

  onChangeAttitude(e) {
    this.onChange('attitude', e)
  },

  onClick: function () {
    var that = this
    console.log(this.data)
    wx.request({
      url: app.globalData.url + '/saveFeedback',
      method: 'POST',
      data: {
        stringId: that.data.id,
        studentName: that.data.studentName,
        headTeacher: that.data.headTeacher,
        date: that.data.date,
        className: that.data.className,
        teacher: that.data.teacher,
        goal: that.data.goal,
        classNum: that.data.classNum,
        offlineNum: that.data.offlineNum,
        onlineNum: that.data.onlineNum,
        progress: that.data.progress,
        difficulty: that.data.difficulty,
        method: that.data.method,
        attitude: that.data.attitude,
        gains: that.data.gains,
        recommend: that.data.recommend
      },
      success: res => {
        console.log(res)
        wx.showToast({
          title: '已保存',
          duration: 1500
        })
        setTimeout(function () {
          wx.navigateBack({})
        }, 1500)
      },
      fail: res => {
        wx.showToast({
          title: '未填写完',
          duration: 1500
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