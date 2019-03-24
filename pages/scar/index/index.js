const app = getApp();
Page({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
    },
    onLoad: function (options) {

    },
    submit: function () {
        wx.navigateTo({
            url: '/pages/scar/order/index'
        })
    }
});
