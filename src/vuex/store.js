import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

//这是休眠函数的封装
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

let store =new Vuex.Store({
    state:{
        data_result:[
            {
                event_id:[],
                event_type:[],
                placement_id:[],
                success:'',
                fails:'',
                inservice:[],
                total_revenue:[],
                total_cost:[],
                sfc_id:[],
                result:[],
                revenue:[],
                cost:[],
                slots:[],
                paths:[]
            }
        ]
    },
    mutations:{
        async  data_resultInit(state,res){
           // console.log(res.data)   //没问题

           state.data=res.data
           const length=state.data.length


           //initArray
           var event_id=new Array(length)
           var event_type=new Array(length)
           var placement_id=new Array(length)
           var success=new Array(length)
           var inservice=new Array(length)
           var total_revenue=new Array(length)
           var total_cost=new Array(length)
           var sfc_id=new Array(length)
           var result=new Array(length)
           var revenue=new Array(length)
           var cost=new Array(length)
           var slots=new Array(length)
           var paths=new Array(length)

            //add data to array
           for(var i=0;i<state.data.length;i++){
               event_id[i]=state.data[i].event_id
               event_type[i]=state.data[i].event_type
               placement_id[i]=state.data[i].placement_id
               success[i]=state.data[i].success
               inservice[i]=state.data[i].inservice
               total_revenue[i]=state.data[i].total_revenue
               total_cost[i]=state.data[i].total_cost
               sfc_id[i]=state.data[i].sfc_id
               result[i]=state.data[i].result
               revenue[i]=state.data[i].revenue
               cost[i]=state.data[i].cost
               slots[i]=state.data[i].slots
               paths[i]=state.data[i].paths
           }


           //copy to data
            state.data_result.event_id=event_id
            state.data_result.event_type=event_type
            state.data_result.placement_id=placement_id
            state.data_result.fails=0
           for(var j=0;j<state.data.length;j++)
           {
               // console.log('qwq')
               state.data_result.success=success[j]
               if(j>0) {
                   if (state.data_result.success == success[j - 1]){
                       state.data_result.fails+=1
                   }
                       }
               //这样写data_result.success地址不会改变，无法被监听
               await sleep(5)    //实现异步更新data_result.success
               //为了让watch监听对象
               let address=Object.assign({},state.data_result,state.data_result)
               state.data_result=address
               // console.log(state.data_result.success)
           }
            state.data_result.inservice=inservice
            state.data_result.total_revenue=total_revenue
            state.data_result.total_cost=total_cost
            state. data_result.sfc_id=sfc_id
            state. data_result.result=result
            state.data_result.revenue=revenue
            state.data_result.cost=cost
            state. data_result.slots=slots
            state.data_result.paths=paths

       }


    },
    actions:{
        getdata(context){
            var formData = new FormData();
            formData.append('request_type','deploy_result');
        axios({
                  // url: 'http://47.95.227.153:5002/predict',       //向服务器请求大型csv返回速度将会很慢
                  url:'http://127.0.0.1:5002/predict',
                  method: 'post',
                  data: formData,
                  headers: {
                      'Content-Type': 'application/json'
                  }
              }).then((res)=>{  context.commit('data_resultInit',res)
              })
            .catch(function (error) {
                console.log(error);
            });

    },

}
    })
export default store
