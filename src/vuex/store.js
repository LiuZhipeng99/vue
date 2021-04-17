import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store =new Vuex.Store({
    state:{
        data_result:[
            {
                event_id:[],
                event_type:[],
                placement_id:[],
                success:[],
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
       data_resultInit(state,res){
           // console.log(res.data)   //没问题
           state.data_result=res.data
           const length=state.data_result.length
           const data=state.data_result

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
           for(var i=0;i<length;i++){
               event_id[i]=data[i].event_id
               event_type[i]=data[i].event_type
               placement_id[i]=data[i].placement_id
               success[i]=data[i].success
               inservice[i]=data[i].inservice
               total_revenue[i]=data[i].total_revenue
               total_cost[i]=data[i].total_cost
               sfc_id[i]=data[i].sfc_id
               result[i]=data[i].result
               revenue[i]=data[i].revenue
               cost[i]=data[i].cost
               slots[i]=data[i].slots
               paths[i]=data[i].paths
           }

           //copy to data
           data.event_id=event_id
           data.event_type=event_type
           data.placement_id=placement_id
           data.success=success
           data.inservice=inservice
           data.total_revenue=total_revenue
           data.total_cost=total_cost
           data.sfc_id=sfc_id
           data.result=result
           data.revenue=revenue
           data.cost=cost
           data.slots=slots
           data.paths=paths
           // console.log(data.event_id)




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
              }).then((res)=>{context.commit('data_resultInit',res)
              })
            .catch(function (error) {
                console.log(error);
            });

    }
}
    })
export default store
