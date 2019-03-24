const app = getApp();
Page({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        TabbarBot: app.globalData.tabbar_bottom,
        TabCur: 0,scrollLeft:0,
        SortMenu: [{id:0,name:"商品列表"},{id:1,name:"店铺列表"}]
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
