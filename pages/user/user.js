// pages/user/user.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        identity: "",
        type: app.globalData.type
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            type: app.globalData.type
        })
        if (this.data.type == 0) {
            this.setData({
                identity: "小可爱"
            })
        } else if (this.data.type == 1) {
            this.setData({
                identity: "志愿者"
            })
        }

        console.log(this.data.type)
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

    recruit: function () {
        wx.navigateTo({
            url: '../recruit/recruit',
        })
    },

    learn: function () {
        wx.navigateTo({
            url: '../goods/goods',
        })
    },

    feedbackList: function () {
        wx.navigateTo({
            url: '../studentFeedbackList/studentFeedbackList',
        })
    },

    product: function () {
        wx.navigateTo({
            url: '../upload/upload',
        })
    },

    myTeacher: function () {
        wx.navigateTo({
            url: '../myTeacher/myTeacher',
        })
    },

    myStudent: function () {
        wx.navigateTo({
            url: '../myStudent/myStudent',
        })
    },

    talk: function () {
        if (this.data.type == 0) {
            wx.navigateTo({
                url: '../talk/talk',
            })
        } else if (this.data.type == 1) {
            wx.navigateTo({
                url: '../talkWithStudent/talkWithStudent',
            })
        }

    },

    signUp: function () {
        if (this.data.type == 0) {
            wx.navigateTo({
                url: '../studentRegistrationForm/studentRegistrationForm'
            })
        } else {
            wx.navigateTo({
                url: '../teacherRegistrationForm/teacherRegistrationForm'
            })
        }
    }

})
