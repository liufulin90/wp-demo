function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 网络请求
 */
function ajax(options){
  wx.request({
    url: options.url,
    data: options.data,
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      typeof options.success == 'function' && options.success(res);
    },
    fail: function (res) {
      typeof options.fail == 'function' && options.fail(res);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  ajax: ajax
}
