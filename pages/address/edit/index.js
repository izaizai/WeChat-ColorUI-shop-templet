const app = getApp();

Page({
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		hidden: true,
		region: ['重庆市', '重庆市', '江北区'],
	},
	onLoad: function (option) {
		console.log(option.id);
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
