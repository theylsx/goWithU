// pages/teacherRegistrationForm/teacherRegistrationForm.js
import { $wuxToast } from '../../dist/index'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    schoolName: '',
    teacherGrade: '',
    faculty: '',
    sex: '',
    studentSubject: '',
    studentGrade: '',
    introduction: '',
    remark: ''
  },

  getName: function(e) {
    this.setData({name: e.detail.value})
  },
  getPhone: function(e) {
    this.setData({phone: e.detail.value})
  },
  getSchoolName: function(e) {
    this.setData({schoolName: e.detail.value})
  },
  getTeacherGrade: function(e) {
    this.setData({teacherGrade: e.detail.value})
  },
  getFaculty: function(e) {
    this.setData({faculty: e.detail.value})
  },
  getSex: function(e) {
    this.setData({sex: e.detail.value})
  },
  getStudentSubject: function(e) {
    this.setData({studentSubject: e.detail.value})
  },
  getStudentGrade: function(e) {
    this.setData({studentGrade: e.detail.value})
  },
  getIntroduction: function(e) {
    this.setData({introduction: e.detail.value})
  },
  getRemark: function(e) {
    this.setData({remark: e.detail.value})
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

  submit: function () {
    const {name, phone, schoolName, teacherGrade, faculty, sex, studentSubject, studentGrade, introduction, remark} = this.data
    if (name === '' || phone === '' || schoolName === '' || teacherGrade === '' || faculty === '' || sex === '') {
      $wuxToast().show({
        type: 'forbidden',
        duration: 1500,
        color: '#fff',
        text: '信息不完整'
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '是否提交报名信息',
        success (res) {
          if (res.confirm) {
            wx.request({
              url: app.globalData.url + '/addTeacherRegistrationForm',
              method: 'POST',
              data: {
                "openId": app.globalData.openId,
                "name": name,
                "phone": phone,
                "schoolName": schoolName,
                "teacherGrade": teacherGrade,
                "faculty": faculty,
                "sex": sex,
                "studentSubject": studentSubject,
                "studentGrade": studentGrade,
                "introduction": introduction,
                "remark": remark
              },
              success: res => {
                wx.showToast({
                  title: '已提交报名信息',
                  duration: 1500
                })
                setTimeout(function () {
                  wx.switchTab({
                    url: '../user/user',
                  })
                }, 1500)
              },
              fail: res => {
                console.log(res)

              }
            })
          }
        }
      })
    }
  }

})