const app = getApp();
Page({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        TabbarBot: app.globalData.tabbar_bottom,
        TabCur: 1,scrollLeft:0,
        SortMenu: [{id:1,name:"未使用"},{id:2,name:"已使用"},{id:3,name:"已过期"}],
    },
    onLoad: function (options) {
        let that = this;
    },
    tabSelect(e) {
        console.log(e.currentTarget.dataset.id);
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id-1)*60
        })
    }
});
