<template>
    <div>
        {{minute}}:{{second}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            minute:'10',
            second:'00'
        }
    },
    created(){
      var str = 60
        this.tid=setInterval(()=>{
            str--
            this.$nextTick(()=>{
                if(this.second=='00'){
                    this.minute--
this.minute=this.minute<10?'0'+this.minute:this.minute
                    str=59
                    if(this.minute==0) this.minute=10
                }
                this.second=add(str)
            })
        },1000)
      function add(str){
        return str<10?'0'+str:str
      }
    },
}
</script>