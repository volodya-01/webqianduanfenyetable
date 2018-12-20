// store.js
import Vue from 'Vue'
import Vuex from 'vuex'

// 引入 axios
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    test01: {
      name: 'Wise Wrong'
    },
    test02: {
      tell: '12312345678'
    },
   /*  object:{
        WaterNum :"21312323"
    }, */
    object: {
      "DailyWaterSupply": 123123,
      "MinPressure": 0.23,
      "SchemeNO": "1"
    }
  },
  actions: {
    // 封装一个 ajax 方法
 /*    saveForm(context) {
      axios.post('http://112.64.170.158:8185/Service1.svc/GetWaterquantity', JSON.stringify(context.state.object))
      .then(function (res) {
          console.log(res)
            alert("请求后台数据成功了：123456")
        })
        .catch(function (err) {
          console.log(err)
        
        })

    } */
   saveForm(context) {
     axios.post('http://112.64.170.158:8189/Service1.svc/GetSchemeList', JSON.stringify(context.state.object))
       .then(function (res) {
         console.log(res)
         alert("请求后台数据成功了：123456")
       })
       .catch(function (err) {
         console.log(err)

       })

   }



  },
  
})

export default store