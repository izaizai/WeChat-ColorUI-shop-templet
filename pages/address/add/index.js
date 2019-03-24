const app = getApp();

Page({
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		TabbarBot: app.globalData.tabbar_bottom,
		hidden: true,
		region: ['重庆市', '重庆市', '江北区'],
	},
	onLoad: function (option) {
	    wx.getSetting({
	        success: res => {
		        if (!res.authSetting['scope.userInfo']) {
		            wx.redirectTo({
		              	url: '/pages/auth/auth'
		            })
		        }
	        }
	    });
	},
	RegionChange: function (e) {
		this.setData({
			region: e.detail.value
		})
	},
	
});
