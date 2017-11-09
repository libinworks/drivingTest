Page({

  /**
   * 页面的初始数据
   */
  data: {
    example: [],
    num: 1,
    clickIndex: '',
    change: '',
    isTop: false
  },

  // 自定义方法
  switchTab(options) {
    let tab = options.target.dataset.tab

    // 小程序中更新数据
    this.setData({
      tab: tab
    });

    // 调用获取数据的方法
    this.getExampleData()
  },

  // 定义获取话题列表的方法
  getExampleData() {
    // 显示loading showLoading 不会自动消失
    wx.showLoading({
      title: '试题加载中...',
    })

    // 存储this上下文环境
    let that = this

    // 发送请求
    wx.request({
      url: 'https://bird.ioliu.cn/v1/?url=https://way.jd.com/jisuapi/driverexamQuery?c1=',
      data: {
        pagesize: 20,
        pagenum: that.data.num,
        appkey: '841e93ac0927441aa6332b2502bb52f3'
      },
      method: 'GET',
      success: (res) => {
        // 当前的数据 that.data.topics
        // 请求回来的数据 res.data.data
        let newExample = that.data.example.concat(res.data.result.result.list)
        // console.log(res.data)
        // 更新数据只能使用setData
        that.setData({
          example: newExample
        })

        // 手动关闭Loading状态
        wx.hideLoading()
      }
    })
  },

  /**
   * 参考答案
   */
  my(e) {
    // this.clickIndex = ''
    // this.clickIndex = e.currentTarget.dataset.testid
    let answer = e.currentTarget.dataset.testid
    let explain = e.currentTarget.dataset.hi
    wx.showModal({
      title: '参考答案：' + answer,
      content: '解释：' + explain,
      showCancel: false,
      confirmText: '我知道了',
      success: function (res) {
        if (res.confirm) {
          console.log('知道了')
        }
      }
    })  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getExampleData()
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
    this.data.example = []
    this.data.num = 1
    this.getExampleData()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.num++
    this.getExampleData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /**
   * 页面滚动事件
   * */
  onPageScroll: function (e) {
    if (e.scrollTop >= 300) {
      this.setData({
        isTop: true
      })
    }else{
      this.setData({
        isTop: false
      })
    }
  },

  /**
   * 定义回到顶部的方法
   * 
  */
  backToTop() {
    wx.pageScrollTo({
      scrollTop: 0
    })

    // 回到顶部元素，设置为false
    this.setData({
      isTop: false
    })
  },
})