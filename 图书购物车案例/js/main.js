const app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-09',
                price: 85.00,
                count: 1
            }, {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            }, {
                id: 3,
                name: '《数学》',
                date: '2003-2',
                price: 30.00,
                count: 1
            }, {
                id: 4,
                name: '《代码大全》',
                date: '2010-2',
                price: 99.00,
                count: 1
            }
        ]
    },
    computed: {
        totalPrice: function() {
            let result = 0;
            for(let i = 0; i < this.list.length; i++) {
                result += this.list[i].price*this.list[i].count
            }
            return result
        }
    },
    methods: {
        increment: function (index) {
            this.list[index].count++
        },
        decrement: function (index) {
            this.list[index].count--
        },
        remove: function (index) {
            this.list.splice(index, 1)
        }
    },
    filters: {
        showPrice (price) {
            return '￥' + price.toFixed(2)
        }
    }
    //filter过滤器，一般为一个函数
})