const app = getApp();
Page({
    data: {
        StatusBar: app.globalData.StatusBar + 6,
        TabbarBot: app.globalData.tabbar_bottom,
        TabCur: 0,scrollLeft:0,
        SortMenu: [{id:0,name:"综合"},{id:1,name:"销量"},{id:2,name:"新品"},{id:3,name:"价格"}],
        ShopList: [{
            index: 1,
            image: 'https://image.weilanwl.com/img/4x3-1.jpg',
            title: '商品名称商品名称商品名称商品名称',
            price: '100',
            sales: '2.2万'
        },{
            index: 2,
            image: 'https://image.weilanwl.com/img/4x3-2.jpg',
            title: '商品名称商品名称',
            price: '1000',
            sales: '85'
        },{
            index: 3,
            image: 'https://image.weilanwl.com/img/4x3-3.jpg',
            title: '商品名称商品名称商品名称商品名称',
            price: '39.9',
            sales: '2000'
        },{
            index: 4,
            image: 'https://image.weilanwl.com/img/4x3-4.jpg',
            title: '商品名称商品名称商品名称商品名称',
            price: '100',
            sales: '2.2万'
        },{
            index: 5,
            image: 'https://image.weilanwl.com/img/4x3-3.jpg',
            title: '商品名称商品名称商品名称商品名称',
            price: '39.9',
            sales: '2000'
        },{
            index: 6,
            image: 'https://image.weilanwl.com/img/4x3-4.jpg',
            title: '商品名称商品名称商品名称商品名称',
            price: '100',
            sales: '2.2万'
        }],
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
    },
    btnback: function () {
        wx.navigateBack();
    },
    search: function () {
        wx.navigateTo({
            url: '/pages/shop/search/index'
        });
    }
});
