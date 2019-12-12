//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }


  },
  click: function() {
    var judge = false
    console.log(app.globalData.openid)
    wx.request({
      url: 'https://www.tuppy.pub/goWithU',
      method: 'POST',
      header:
        { 'Content-Type': 'application/json;charset=UTF-8' },
      data: {
        "openId": app.globalData.openid
      },
      success: res => {
        console.log(res.data)
        if(res.data.openId != null){
          console.log("success")
          wx.switchTab({
            url: '../course/course',
          })
        }else{
          console.log(app.globalData.userInfo)
          wx.navigateTo({
            url: '../login/login',
          })
        } 
      },
      fail: res => {
        wx.navigateTo({
          url: '../login/login',
        })
      }
    })
  }
})