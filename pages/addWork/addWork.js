// pages/addWork/addWork.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    pageKey: "1",
    count: '',
    workName: '',
    declaration: '',
    teacherOpenId: '',
    studentOpenId: '',
    mFirst: '',
    mSecond: '',
    mThird: '',
    mFouth: '',
    mAnswer: '',
    mTitle: '',
    title: [],
    answer: [],
    selection: []



  },

  getWorkName: function(e) {
    this.setData({
      workName: e.detail.value
    })
  },
  getDeclaration: function(e) {
    this.setData({
      declaration: e.detail.value
    })
  },
  getCount: function(e) {
    this.setData({
      count: e.detail.value
    })
  },
  getTitle: function(e) {
    this.setData({
      mTitle: e.detail.value
    })
  },
  getFirst: function(e) {
    this.setData({
      mFirst: e.detail.value
    })
  },
  getSecond: function(e) {
    this.setData({
      mSecond: e.detail.value
    })
  },
  getThird: function(e) {
    this.setData({
      mThird: e.detail.value
    })
  },
  getFouth: function(e) {
    this.setData({
      mFouth: e.detail.value
    })
  },
  getAnswer: function(e) {
    this.setData({
      mAnswer: e.detail.value
    })
  },
  add: function() {
    this.setData({
      pageKey: 2
    })
  },

  onChange(e) {
    if (this.data.mAnswer === "" || this.data.mThird === "" || this.data.mFouth === "" || this.data.mTitle === "" || this.data.mSecond === "" || this.data.mFirst === "") {
      return
    }
    var currentSelection = []
    currentSelection.push(this.data.mFirst)
    currentSelection.push(this.data.mSecond)
    currentSelection.push(this.data.mThird)
    currentSelection.push(this.data.mFouth)
    console.log(this)
    console.log('onChange', e)
    this.data.selection.push(currentSelection)
    this.data.answer.push(this.data.mAnswer)
    this.data.title.push(this.data.mTitle)
    this.setData({
      current: e.detail.current,
      mFirst: '',
      mSecond: '',
      mThird: '',
      mFouth: '',
      mAnswer: '',
      mTitle: ''
    })
    console.log(currentSelection)
    console.log(this.data)
  },

  save: function() {
    if (this.data.mAnswer === "" || this.data.mThird === "" || this.data.mFouth === "" || this.data.mTitle === "" || this.data.mSecond === "" || this.data.mFirst === "") {
      return
    }
    var currentSelection = []
    currentSelection.push(this.data.mFirst)
    currentSelection.push(this.data.mSecond)
    currentSelection.push(this.data.mThird)
    currentSelection.push(this.data.mFouth)
    console.log(this)
    this.data.selection.push(currentSelection)
    this.data.answer.push(this.data.mAnswer)
    this.data.title.push(this.data.mTitle)
    wx.request({
      url: app.globalData.url + "/addWork",
      method: "POST",
      data: {
        count: this.data.count,
        workName: this.data.workName,
        declaration: this.data.declaration,
        teacherOpenId: this.data.teacherOpenId,
        studentOpenId: this.data.studentOpenId,
        title: this.data.title,
        answer: this.data.answer,
        selection: this.data.selection
      },
      success: res => {
        console.log(res)
        wx.navigateBack({

        })
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      studentOpenId: options.studentOpenId,
      teacherOpenId: app.globalData.openId
    })
    console.log(this.data)

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

  }
})