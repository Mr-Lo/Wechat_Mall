//获取应用实例
var app = getApp()
Page({
  data: {
    issearch: true,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    images: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    districtItems: [{
        id:"1",
        districtName: "华南特产",
        district: ["广东", "湖南", "江西", "广西", "胡建"]
      },
      {
        id: "2",
        districtName: "华北特产",
        district: ["上海", "江苏", "浙江"]
      }
    ],
    loadingHidden: false // loading
  },

  search: function(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },

  //事件处理函数
  swiperchange: function(e) {
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    //sliderList
    // wx.request({
    //     url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
    //     method: 'GET',
    //     data: {},
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //       var imgurl = { 'picurl':'http://img3.imgtn.bdimg.com/it/u=2842341723,2003886406&fm=26&gp=0.jpg'}
    //         that.setData({
    //           images: imgurl
    //         })
    //     } 
    // })

    //venuesList
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        that.setData({
          venuesItems: res.data.data
        })
        setTimeout(function() {
          that.setData({
            loadingHidden: true
          })
        }, 1500)
      }
    })

    //choiceList
    // wx.request({
    //     url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
    //     method: 'GET',
    //     data: {},
    //     header: {
    //         'Accept': 'application/json'
    //     },
    //     success: function(res) {
    //         that.setData({
    //             choiceItems: res.data.data.dataList
    //         })
    //         setTimeout(function () {
    //             that.setData({
    //                 loadingHidden: true
    //             })
    //         }, 1500)
    //     }
    // })

  }
})