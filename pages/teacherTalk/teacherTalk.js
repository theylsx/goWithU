// pages/teacherTalk/teacherTalk.js


const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh',
    inputBottom: 0,
    inputValue: "",
    studentOpenId:"",
    studentName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      studentOpenId: options.studentOpenId,
      studentName:  options.studentName
    })
    console.log(this.data.studentName);
    wx.setNavigationBarTitle({ title: this.data.studentName })
    wx.request({
      url: app.globalData.url + '/getChatRecord',
      method: 'POST',
      data: {
        "studentOpenId": this.data.studentOpenId
      },


      success: res => {

        console.log(res)
        inputVal = '';
        for (var index in res.data) {
          var mSpeaker = res.data[index].speaker

          if (mSpeaker == null) {
            mSpeaker = "server"
          }
          else {
            mSpeaker = "customer"
          }
          msgList.push(
            {
              speaker: mSpeaker,
              contentType: 'text',
              content: res.data[index].chatContent
            }
          )

        }

        this.setData({
          cusHeadIcon: app.globalData.userInfo.avatarUrl,
          msgList
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


  focus: function (e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function (e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },



  getInput: function (e) {
    console.log(e);
    this.setData({
      inputValue: e.detail.value,
    })
  },

  /**
    * 发送点击监听
    */
  studentSendButton: function () {
    if (this.data.inputValue != "") {
      //访问服务器
      var that = this
      wx.request({
        url: app.globalData.url + '/addTeacherChatToList',
        method: 'POST',
        data: {
          studentOpenId: this.data.studentOpenId,
          teacherOpenId: app.globalData.openId,
          chatContent: that.data.inputValue
        },
        success: function (res) {
          console.log(res)
          console.log(that.data)

        },
        fail: res => {
          console.log(res)
        }
      })


      console.log(msgList.length)
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: this.data.inputValue
      })

      console.log(msgList.length)

      inputVal = "";
      this.setData({
        msgList,
        inputVal,
        inputValue: ''
      });

    }


  },




})