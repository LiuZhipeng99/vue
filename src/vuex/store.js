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
                success:'',   //success累加
                fails:'',    //result为false，且进入类型为1
                inservice:[],
                total_revenue:[],
                total_cost:[],
                sfc_id:[],
                result:[],
                revenue:[],
                cost:[],
                slots:[],
                paths:[],
                porb:[], //总收益/总cost：
                sfc_entertime:[],  //sfc进入的时间与其id
                sfc_leavetime:[] //sfc离开的时间及其id
            }
        ]
    },
    mutations:{
        async  data_resultInit(state,res){

           state.data=res.data
           const length=state.data.length

           //initArray
           var event_type=new Array(length)
           var success=new Array(length)
           var total_revenue=new Array(length)
           var total_cost=new Array(length)
           var sfc_id=new Array(length)
           var result=new Array(length)

            //add data to array
           for(var i=0;i<state.data.length;i++){
               event_type[i]=state.data[i].event_type
               success[i]=state.data[i].success
               total_revenue[i]=state.data[i].total_revenue
               total_cost[i]=state.data[i].total_cost
               result[i]=state.data[i].result
               sfc_id[i]=state.data[i].sfc_id
           }


           //copy to data
            //先定义
            state.data_result.fails=0
            state.data_result.total_cost=[]
            state.data_result.total_revenue=[]
            state.data_result.porb=[]
            state.data_result.sfc_entertime=[]
            state.data_result.sfc_leavetime=[]
            for(var j=0;j<state.data.length;j++)
           {
               state.data_result.success=success[j]  //初始化success
               if(result[j]=='False'&&event_type[j]==1){    //csv中数据只有两种形式：string和number
                   state.data_result.fails+=1}

               //初始化传输完成的sfc_id,确定其进入时间离开时间，以及其离开时间,及其是否部署成功
               if(event_type[j]==1){
                   if(result[j]=='False'){
                   state.data_result.sfc_entertime.push({sfc_id:sfc_id[j],entertime:j+1,is_success:false})}
                   else state.data_result.sfc_entertime.push({sfc_id:sfc_id[j],entertime:j+1,is_success:true})
               }
               if(event_type[j]==0){
                   state.data_result.sfc_leavetime.push({sfc_id:sfc_id[j],leavetime:j+1})
               }


                //初始化是收益与支出
               state.data_result.total_cost[j]=total_cost[j]
               state.data_result.total_revenue[j]=total_revenue[j]
               state.data_result.porb[j]=(parseFloat(total_revenue[j])/parseFloat(total_cost[j])).toFixed(2)

               //这样写data_result.success地址不会改变，无法被监听
               await sleep(250)    //实现异步更新data_result.success
               //为了让watch监听对象
               let address=Object.assign({},state.data_result,state.data_result)
               state.data_result=address
           }


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
