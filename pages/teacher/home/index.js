// pages/teacher/home/index.js
var util = require('../../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openMenu: false,
    imgUrls: [],
    grageList: [
      {
        title: '2017级 - 计算机科学与技术',
        gradeId: '2017-11',
        students: [
          {
            stuId: 1,
            photo: 'http://img15.3lian.com/2015/h1/280/d/3.jpg',
            name: '张三'
          }, {
            stuId: 2,
            photo: 'http://img15.3lian.com/2015/h1/280/d/5.jpg',
            name: '张三'
          }, {
            stuId: 3,
            photo: 'http://img15.3lian.com/2015/h1/280/d/2.jpg',
            name: '张三'
          }, {
            stuId: 4,
            photo: 'http://img15.3lian.com/2015/h1/280/d/6.jpg',
            name: '张三'
          }
        ]
      }, {
        title: '2017级 - 软件工程',
        gradeId: '2017-12',
        students: [
          {
            stuId: 1,
            photo: 'http://img15.3lian.com/2015/h1/280/d/2.jpg',
            name: '张三'
          }, {
            stuId: 2,
            photo: 'http://img15.3lian.com/2015/h1/280/d/3.jpg',
            name: '张三'
          }, {
            stuId: 3,
            photo: 'http://img15.3lian.com/2015/h1/280/d/5.jpg',
            name: '张三'
          }, {
            stuId: 4,
            photo: 'http://img15.3lian.com/2015/h1/280/d/3.jpg',
            name: '张三'
          }
        ]
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  /**
   * 点击主导航
   */
  clickNavMain: function(){
    var tempOpenM = false;
    if (this.data.openMenu) {
      tempOpenM = false;
    } else {
      tempOpenM = true;
    }
    this.setData({
      openMenu: tempOpenM
    })
  },
  /**
   * 点击列表展开
   */
  listAction: function(e) {
    var idx = e.target.dataset.idx;
    console.log(e)
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
    var that = this;
    util.ajax({
      url: 'http://www.linxins.com/interface/getbanners.php',
      data: {
        uid: 194
      },
      success: function (res) {
        console.log(res)
        that.setData({
          imgUrls: res.data.data
        })
      }
    });
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