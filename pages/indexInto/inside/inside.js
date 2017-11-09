// pages/indexInto/inside/inside.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTop: false
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
    wx.stopPullDownRefresh()
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

  /**
   * 页面滚动事件
   * */
  onPageScroll: function (e) {
    if (e.scrollTop >= 300) {
      this.setData({
        isTop: true
      })
    } else {
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
  }
})