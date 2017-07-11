// pages/teacher/map/map.js
import QrCode from '../../../utils/qr.js';
var util = require('../../../utils/util.js');
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade: ['2017级', '2018级', '2019级'],
    gradeIndex: null,
    classes: ['计算机科学与技术', '软件工程'],
    classesIndex: null,
    course: ['英语', '数字电路'],
    courseIndex: null,
    signTime: ['3分钟内', '5分钟内', '10分钟内'],
    signTimeIndex: null,
    signPlace: ['20米内', '30米内', '50米内', '100米内'],
    signPlaceIndex: null,
    truancy: ['20分钟后记为旷课', '30分钟后记为旷课', '40分钟后记为旷课', '50分钟后记为旷课', '60分钟后记为旷课'],
    signPlaceIndex: null,
    time: '08:30',
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
    signList: {
      okList: [
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
      ],
      notList: [
        {
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
    }
  },
  tabFun: function (e) {
    //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    if (!_datasetId) return;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    });
  },
  refrashFun: function(){
    console.log('sdf')
  },
  /**
   * 选择年级，班级，课程
   */
  bindPickerChange: function (e) {
    if (e.target.id == 'grade') {
      this.setData({
        gradeIndex: e.detail.value
      })
    }
    if (e.target.id == 'classes') {
      this.setData({
        classesIndex: e.detail.value
      })
    }
    if (e.target.id == 'course') {
      this.setData({
        courseIndex: e.detail.value
      })
    }
    if (e.target.id == 'signTime') {
      this.setData({
        signTimeIndex: e.detail.value
      })
    }
    if (e.target.id == 'signPlace') {
      this.setData({
        signPlaceIndex: e.detail.value
      })
    }
    if (e.target.id == 'truancy') {
      this.setData({
        truancyIndex: e.detail.value
      })
    }
  },
  /**
   * 监听时间picker选择器
   */ 
  listenerTimePickerSelected: function (e) {
    //调用setData()重新绘制
    this.setData({
      time: e.detail.value,
    });
  },
  /**
   * 发起签到
   */
  signSubmit: () => {
    wx.vibrateLong({
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getAccessToken((token) => {
      console.log(token)
    });
    
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
    let options = {
      modulesize: Math.min(Math.sqrt(this.size) / 2, 10),
      margin: 2,
      bgColor: '#FFFFFF',
      fgColor: '#000000',
      canvasid: 'myCanvas'
    }
    //QrCode().toImg('test', options);
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