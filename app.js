//app.js
var util = require('./utils/util.js')
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  /**
   * 获取登录认证用户
   */
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  /**
   * 应用获得access token（调用远程接口获取并设定至app全局）
   */
  getAccessToken: function(cb) {
    var that = this;
    if (this.globalData.accessToken) {
      typeof cb == "function" && cb(this.globalData.accessToken)
    } else {
      //获取access token
      util.getAccessToken({
        success: (res) => {
          that.globalData.accessToken = res.data.access_token
          typeof cb == "function" && cb(that.globalData.accessToken)
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    accessToken: null
  }
})