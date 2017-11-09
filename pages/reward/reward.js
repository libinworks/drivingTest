// pages/reward/reward.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        console.log(res.authSetting['scope.writePhotosAlbum'])
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('授权成功')
            },
            fail() {
              console.log('授权失败')
            }
          })
        }
      }
    })
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

  /**
   * 用户保存图片
   */
  image() {
    wx.getSetting({
      success(res) {
        console.log(res.authSetting['scope.writePhotosAlbum'])
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('授权成功')
            },
            fail() {
              console.log('授权失败')
            }
          })
        }
      }
    })
    wx.getImageInfo({
      src: '/imgs/reward.jpg',
      success(res) {
        let path = res.path
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(res) {
            wx.showToast({
              title: "保存图片成功",
            })
          },
          fail(res) {
          }
        })
      }
    })
    // wx.saveImageToPhotosAlbum({
    //   filePath : '/imgs/reward.jpg',
    //   success(res) {
    //     wx.showToast({
    //       title: "保存图片成功",
    //     })
    //   },
    //   fail(res) {
    //   }
    // })
  }
})