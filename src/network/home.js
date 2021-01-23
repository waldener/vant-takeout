import {request} from "@/network/network";

//根据经纬度获取位置,参数是经纬度字符串。如：('15.066,53.538')
export function getAddress(p) {
  return request({
    url: '/position',
    params: {
      p
    }
  })
}
//获取食物信息
export function getFood() {
  return request({
    url:'/index_category',
  })
}

//根据经纬度获取商家列表
export function getShopList(p) {
  return request({
    url: '/shops',
    params: {
      p
    }
  })
}

//根据经纬度和关键字搜索商铺列表  p:{geo:'123,456',keyword=test}
export function searchShopList(p) {
  return request({
    url: '/search_shops',
    params: {
      p
    }
  })
}

//获取一次性验证码
export function getOnceCode() {
  return request({
    url: '/captcha',
  })
}

//用户名密码登陆
// |参数		|是否必选 |类型     |说明
// |name       |Y       |string   |用户名
// |pwd        |Y       |string   |密码
// |captcha    |Y       |string   |验证码
export function login(p) {
  return request({
    url: '/login_pwd',
    params: {
      p
    }
  })
}

//手机验证码登录
//
// 	|参数		|是否必选 |类型     |说明
// 	|phone       |Y       |string   |手机号
//  |code        |Y       |string   |验证码
export function codeLogin(p) {
  return request({
    url: '/login_sms',
    params: {
      p
    }
  })
}

// //发送短信验证码
// |参数     |是否必选 |类型     |说明
// |phone       |Y       |string   |手机号
export function sendCode(p) {
  return request({
    url: '/sendcode',
    params: {
      p
    }
  })
}

//根据回话获取用户信息
export function userInfo() {
  return request({
    url: '/userinfo',
  })
}

//用户登出
export function out() {
  return request({
    url: '/logout',
  })
}
export function shopsInfo() {
  return request({
    url: '/shop/info',
  })
}
export function shopsGoods() {
  return request({
    url: '/shop/goods',
  })
}
export function shopsRatings() {
  return request({
    url: '/shop/ratings',
  })
}