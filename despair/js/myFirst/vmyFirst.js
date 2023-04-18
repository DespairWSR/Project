const vm = new Vue({
    el: '#app',
    data: {
        dataList: [],
        filterList: [],
        filter_info: {
            name:"",
            businessImplications:"",
            inputSourceRule:"",
            outSourceRule:"",
            programEntry:"",
            algorithmEngine:"",
            modelParameter:""
        }
    },
    created() {
        this.show()
    },
    methods: {
        show() {
            axios.get('http://127.0.0.1:8081').then((res) => {
                this.dataList = res.data
                this.filterList = res.data
                console.log(res.data);
            }, (err => {
                console.log(err);
            }))
        },
        // query() {
        //     let _this = this
        //     this.filterList = this.dataList.filter(function (currentValue,index,arr){
        //         if (currentValue.name.toString().indexOf(_this.filter_info.name.toString()) !== -1){
        //             return true
        //         }else{
        //             return false
        //         }
        //     })
        //     this.filter_info.name = ""
        //     cancel()
        // }
        query() {
            let that = this
            dataJSON = JSON.stringify(that.filter_info)
            console.log(dataJSON)
            cancel()
        }
    }
});
