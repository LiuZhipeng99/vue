<template>
    <div class="xpanel-wrapper xpanel-wrapper-31">
        <div class="xpanel" >
            <el-table
                    :data="this.tableData"
                    style="width: 100% "
                    max-height="320"
                    :row-class-name="tableRowClassName"
            >
                <el-table-column
                        prop="sfc_id"
                        label="SFC ID"
                        width="80"
                        align="center">
                </el-table-column>

                <el-table-column
                        prop="sfc_entertime"
                        label="进入时间"
                        width="80"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="sfc_leavetime"
                        label="离开时间"
                        width="60"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="sfc_issuccess"
                        label="是否部署成功"
                        width="60"
                        align="center">
                </el-table-column>
                <el-table-column
                        width="80"
                        align="center"
                        label="查看更多"
                        fixed="right"
                >
                    <template slot-scope="scope">
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index, this.tableData)"
                                type="text"
                                size="small">
                            点击查看
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            </div>
        </div>
</template>

<script>

export default {
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },

            tableRowClassName({row,rowIndex}) {
                if (row.sfc_issuccess === "失败") {
                    return 'warning-row';
                }
                if (row.sfc_issuccess === "成功") {
                    return 'success-row';
                }
                return '';
            }

    },
    data() {
        return {
            search:''
        }
    },
    mounted() {


        let norepeat=0  //如何下次push与上次相同，则不push
        setInterval(() =>{
            if(this.dataArr.sfc_leavetime!=0){
                // console.log(norepeat!=this.dataArr)
                if(JSON.stringify(this.dataArr)!=JSON.stringify(norepeat)){
                    this.tableData.push(this.dataArr)
                     norepeat=this.dataArr
                }
            }
        }, 200)   //核心代码每隔1000ms,更新

    },
    computed: {
        dataArr(){
            let arr={sfc_id:this.sfc_leavetime.sfc_id,     sfc_entertime:this.sfc_leavetime.entertime,
                sfc_leavetime:this.sfc_leavetime.leavetime,     sfc_issuccess:this.sfc_leavetime.is_success}
            return arr
        },
        tableData() {
            let tableData = []
            return tableData
        },
        sfc_entertime() {
            if (this.$store.state.data_result.sfc_entertime) {
                // console.log(this.$store.state.data_result.sfc_entertime)
                return this.$store.state.data_result.sfc_entertime
            } else return [{'sfc_id': 0, 'entertime': 0}]
        },
        sfc_leavetime() {
            if (this.$store.state.data_result.sfc_leavetime) {
                if(this.$store.state.data_result.sfc_leavetime.length!=0){
                    var leavetimeset=this.$store.state.data_result.sfc_leavetime
                    var latestleaveIndex=leavetimeset.length  //当前最近一次离开的sfc
                    leavetimeset=JSON.stringify(leavetimeset)  //将observation转为string
                    leavetimeset=JSON.parse(leavetimeset)    //string转json
                    var issuccess
                     var leavetoenter  //最近一次离开的sfc对应的进入时间
                    //遍历leavetimeset，找出最近一次离开的sfc对应的进入时间
                    for (var i = 0; i < this.sfc_entertime.length; i++) {
                        if (this.sfc_entertime[i].sfc_id == leavetimeset[latestleaveIndex-1].sfc_id) {
                            leavetoenter = this.sfc_entertime[i].entertime
                            issuccess= this.sfc_entertime[i].is_success
                            if(issuccess) issuccess='成功'
                            else issuccess='失败'
                            console.log(issuccess)
                        }
                    }
                 return {sfc_id:leavetimeset[latestleaveIndex-1].sfc_id,entertime:leavetoenter,
                     leavetime:leavetimeset[latestleaveIndex-1].leavetime, is_success:issuccess }
            }
                return {sfc_id: 0, entertime: 0, leavetime: 0,is_success:0}

            }
            else return {sfc_id: 0, entertime: 0,leavetime: 0,is_success:0}
                },

    },

        watch: {
            sfc_entertime(newVal){
                return newVal
            },
            sfc_leavetime(newVal){
                return newVal
            },


        }



}
</script>

<style>
    .xpanel {
        padding:15px;
        height:100%;
        background:url("../../../assets/panel.png") center no-repeat;
        background-size:100% 100%;
        box-sizing:border-box;
    }
    /*.fill-h {height:100%;min-height:100%;}*/
    .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
    .xpanel-wrapper-31  {height:50%;}
    #rightup{
        /*margin-top: -5px;*/
    }
    .el-table .warning-row {
        background: #FEF0F0;
    }

    .el-table .success-row {
        background: #F0F9EB;
    }

</style>
