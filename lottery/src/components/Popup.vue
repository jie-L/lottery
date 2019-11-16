<template>
  <div id="alertbox">
    <el-button type="text" @click="open">
      <slot>1111</slot>
    </el-button>
  </div>
</template>

<script>
  export default {
    props:['shopid'],
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          // title: '消息',
          message: h('p', null,[
            h('span', null, '该商品用积分兑换, '),
            h('span', null, ' 在购物区购买商品可获赠相应模拟金'),

          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            // console.log(action)
            if (action === 'confirm') {
              this.$emit('isSure',[true,this.shopid])
                done();
            } else{
              this.$emit('isSure',[false,this.shopid])
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
  }
</script>
<style>
.el-message-box {
  width: 6.5rem !important;
}
.el-message-box__message{
  margin-top: 0.5rem !important;
}
.el-message-box__message p span:nth-of-type(2){
  color:#f44336 !important;
}
.el-message-box__message p span{
  color:#000 !important;
}
.el-message-box__btns {
  display: flex;
  padding: 0.7813rem 0.2344rem 0.2344rem !important;
}
.el-message-box__btns>button{
  flex: 1;
}
.el-button{
  width: 100%;
  background-color: #ffffff !important;
  border-color:#ffffff !important; 
}
.el-button span{
 color:#43a047!important;
}

</style>