// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },

  
  onPreview(e) {
    console.log('onPreview', e)
    const {
      file,
      fileList
    } = e.detail
    wx.previewVideo({
      current: file.url,
      urls: fileList.map((n) => n.url),
    })
    
  },
  onRemove(e) {
    const {
      file,
      fileList
    } = e.detail
    wx.showModal({
      content: '确定删除？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            fileList: fileList.filter((n) => n.uid !== file.uid),
          })
        }
      },
    })
  },

  chooseVideo: function () {
    var that = this
    wx.chooseVideo({
      success: function (res) {
        console.log(res)
        that.setData({
          src: res.tempFilePath,
        })
      }
    })
  },

  chooseImage: function () {
    var that = this
    wx.chooseImage({
      success: function (res) {
        console.log(res);
        that.setData({
          src: res.tempFilePaths[0],
        })
      }
    })
  },

  //上传视频 目前后台限制最大100M，以后如果视频太大可以在选择视频的时候进行压缩
  uploadVideo: function () {
    var src = this.data.src;
    wx.uploadFile({
      url: 'https://tuppy.pub/tuppy/upload',//服务器接口
      method: 'POST',//这句话好像可以不用
      filePath: src,
      header: {
        'content-type': 'multipart/form-data'
      },
      name: 'data',//服务器定义的Key值
      success: function (res) {
        console.log(res.data);
      },
      fail: function () {
        console.log('接口调用失败')
      }
    })
  }

})