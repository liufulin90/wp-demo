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
    data: options.data || {},
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
/**
 * 判断值是否在数组中
 *
 * @param needle 被判断的值
 * @param haystack 数组
 * @param strict： 严格模式true，非严格false
 * @returns {boolean}
 */
const inArray = (needle, haystack, strict = false) => {
  if (!isArray(haystack)) {
    throw Error('the second argument is not a Array');
  }
  let len = haystack.length;
  for (let i = 0; i < len; i++) {
    if (strict === true) {
      if (haystack[i] === needle) return true;
    } else {
      if (haystack[i] == needle) return true;
    }
  }
  return false;
}

/**
 * 获取access token
 */
const getAccessToken = (options) => {
  ajax({
    url:'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa7d34effcf814443&secret=0076f7509fd8913259543e034035c49e',
    success:(res) => {
      console.log(res)
      typeof options.success == 'function' && options.success(res)
    },
    fail: function (res) {
      typeof options.fail == 'function' && options.fail(res);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  ajax,
  inArray,
  getAccessToken
}
