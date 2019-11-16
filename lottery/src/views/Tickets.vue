<template>
  <div class="application">
      <div class="main">
          <!-- 点击跳转页面 @click -->
        <button class="btn">
              <i class="iconfont">&#xe62a;</i> <router-link to="/lotteryHall"><span>继续选号</span></router-link>
        </button>
        <div class="order">
            <div class="imgTop">
                <img src="../assets/img/Lian.png">
            </div>
            <!-- content padding -->
            <div class="content">
                <!-- content_div 活的div -->
                <div class="content_div">
                    <div class="content_min" v-if="this.$store.state.tickets.length<=0">
                        <div class="JuZ">
                            <span class="oneZ">至少选择一注，</span>
                            <router-link style="color: #1976d2;" to="/lotteryHall"><span class="towZ">去选号</span></router-link>
                        </div>
                    </div>
                    <div class="content_min" v-else v-for="(i,index) in this.$store.state.tickets" :key="index">
                        <!-- Trash 垃圾桶 -->
                        <div class="Trash">
                            <i @click="dele(index)" class="iconfont">&#xe696;</i>
                        </div>
                        <div class="Right">
                            <div class="Right_top">
                                <span>{{i.num.join('  ')}}</span>
                            </div>
                            <div class="Right_bottom">
                                <span>{{i.type}}  <span>{{i.zhu}}</span>注  <span>{{i.jin}}</span>模拟金</span>
                            </div>
                            <!--  -->  
                        </div>
                    </div>
                </div>
                <div class="imgBottom">
                    <img src="../assets/img/Xian.png">
                </div>
            </div>
            
        </div>
      </div>
        <div class="footer">
            <div class="footer_left">
                <span class="Fbai">共<span>{{this.$store.getters.getzhu}}</span>注 </span> <span class="YeSpan"><span>{{this.$store.getters.getjin}}</span>模拟金</span>
            </div>
            <div class="footer_right" @click="alert()">
                <!-- 点击 跳转页面 @click -->
                <span>投注</span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        alert(){
            var a=confirm('共选中'+this.$store.getters.getzhu+'注，合计'+this.$store.getters.getjin+'模拟金，确认支付吗？')
            if(a){
                this.$axios.post('/shops/zhu',{
                    moni:this.$store.getters.getjin,
                    username:localStorage.username,
                    shoplist:this.$store.state.tickets,
                    monijin:this.$store.getters.getjin,
                    }).then(data=>{
                    console.log(data)
                    alert(data.data.type)
                    this.$store.commit('reTickets')
                    localStorage.usermoni=data.data.moni
                    localStorage.userpoint=data.data.point
                })
            }else{
                console.log(1234)
            }
        },
        dele(index){
           this.$store.commit('delTickets',index)
           console.log(this.$store.state.tickets)
        }
    },
}
</script>

<style scoped>
    .application{
        width: 10rem;
        height: 17.778rem;
        background: #f3f3f3;
        position: relative;
    }
    .main{
        height: 17.778rem;
        padding: 0 0.625rem;
    }
    .btn{
        width: 2.6875rem;
        height: 0.8438rem;
        border: 0.0313rem solid #1976D2;
        color: #1976d2;
        background-color: #f5f5f5;
        padding: 0 0.25rem;
        margin-top: 0.25rem;
    }
    .btn i,span{
        font-size: 0.375rem;
    }
    .order{
        width: 8.75rem;
        margin-top: 0.3125rem;
        /* background: red; */
    }
    .imgTop{
        width: 8.75rem;
        height: 0.3125rem;
    }
    .imgTop img{
        width: 8.75rem;
        height: 0.3125rem;
    }
    .content{
        padding: 0 0.1875rem;
    }
    .content_div{
        width: 8.375rem;
        height: 2.25rem;
        background: #fdfdfd;
        z-index: 2;
    }
    .imgBottom{
        width: 8.375rem;
        height: 0.3125rem;
        margin-top: -0.0781rem;
    }
    .imgBottom img{
        width: 8.42rem;
        height: 0.3125rem;
    }
    .content_min{
        padding: 0 0.5rem;
        height: 2.25rem;
        background: #fdfdfd;
    }
    .content_min .JuZ{
        height: 2.25rem;
        text-align: center;
    }
    .content_min .towZ{
        color: #1976d2;
    }
    .content_min .oneZ{
        font-size: 0.375rem;
        line-height: 2.25rem;
        text-align: center;
        color: #08533c;
    }
        /* width: 7.375rem; */
    .Trash{
        width: 1.575rem;
        height: 2.25rem;
        float: left;
    }
    .Trash{
        color: #bdbdbd;
        line-height: 2.25rem;
    }
    .Right{
        width: 5.8rem;
        height: 2.25rem;
        float: left;
    }
    .Right_top{
        width: 5.8rem;
        height: 0.75rem;
        margin-top: 0.4rem;
    }
    .Right_top span{
        color: #b71c1c;
        line-height: 0.75rem;
        font-size: 0.375rem;
        font-weight: 500;
    }
    .Right_bottom{
        width: 5.8rem;
        height: 0.75rem;
    }
    .Right_bottom span{
        line-height: 0.75rem;
        color: rgba(0, 0,0,0.54);
        font-size: 0.1875rem;
    }
    .footer{
        width: 10rem;
        height: 1.6563rem;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .footer_left{
        width: 7rem;
        height: 1.6563rem;
        background: #212121;
        float: left;
        text-align: center;
    }
    .footer_right{
        width: 3rem;
        height: 1.6563rem;
        background: #b71c1c;
        float: left;
        text-align: center;
    }
    .footer_right span{
        color: #fff;
        font-weight: bold;
        font-size: 0.4rem;
        line-height: 1.6563rem;
    }
    .Fbai{
        color: #fff;
        font-weight: bold;
        font-size: 0.4rem;
        line-height: 1.6563rem;
    }
    .YeSpan{
        color: #ffc107;
        font-size: 0.4rem;
        font-weight: bold;
    }
</style>