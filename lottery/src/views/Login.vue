<template>
  <div id="login_up" style="height:100%">
		<div class="login_bigbox" style="width:10rem;background-color:#08533c;">
			<div style="height:100%;">
				<div class="login">
          <div v-if="type"><h2 >登录</h2></div>
					<div v-else><h2 >注册</h2> </div>
				</div>
				<div>
					<div class="login_top">
						<div class="touxiangimgs">
							<div class="touxiangimg"><img :src="login_up.img_url" v-show="imgUrl" style="display: inline-block;width: 100%;height: 100%;"></div>
							<input class="file_in" type="file" @change="btn($event)">
						</div>
						<div class="zc_box">
							<label for="">账号：
                <input type="text" v-model="login_up.account" @input="input">
              </label>
              <label for="">密码：
                <input type="password" v-model="login_up.password" @input="input">
              </label>

							<button class="surebtn" :class="{active:bga}" @click="Determine">确定</button>
						</div>
					</div>
				</div>
        <div class="btn">
				  <div @click="type=true" style="background: yellowgreen">登录</div>
				  <div @click="type=false" style="background: orange">注册</div>
		  	</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
 name:'login',
  data(){
   return{
     type:true,
     bga:false,
     imgUrl:false,
     login_up:{
       account:'',
       password:'',
       img_url:''
     }
    
   }
 },
 created(){
   if(localStorage.url){
     this.login_up.img_url = localStorage.url
   }else{
     this.login_up.img_url ='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2114264504,4025672769&fm=26&gp=0.jpg'
   }
 },
 methods:{
   Determine() {
      if(this.type){
        // 登录
      this.$axios
        .post("/users/in", this.login_up)
        .then(res => {
          if(res.data.type =='yes'){
            location.href ='/'
          }
          alert(res.data.data);
        })
        .catch(res => {
          console.log(err);
        });
      }else{
        //  注册
      this.$axios
        .post("/users/up", this.login_up)
        .then(res => {
          if (res.data.type == "yes") {
            this.type = true;
          }
          alert(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
      
      }
      
    },
    input(){
      if(this.login_up.account !='' && this.login_up.password !=''){
        this.bga = true
      }else{
        this.bga = false
      }
    },
 	//          头像
			btn($event){
				var f = $event.target.files[0]
				var d = new FormData
				d.append('img',f)
				this.$http.post('/filess/file',d,{
				}).then((data)=>{
					console.log(data.data)
          this.login_up.img_url= 'http://localhost:8000/img/'+data.data
          this.imgUrl = true
          localStorage.url = this.login_up.img_url
				},(err)=>{
					console.log(err)
        })
//					this.$axios
//					.get("/filess/aaa", {
//						params: {
//						}
//					})
//					.then(data => {
//						console.log(data);
//					});
			}
 },
 created(){
   if(location.href.split('?')[1]=='in'){
     this.type=false
   }
   if(location.href.split('?')[1]=='up'){
     this.type=true
   }
 },
};
</script>

<style scoped>
input{
  outline: none;
  border:none;
}
*{
  margin: 0;padding: 0;
}

.login{
  padding-top:0.3rem; 
  text-align: center;
}
.login div{
  display: inline-block;
}
.login h2{
  display: inline-block;
  color: #fff;
  font-size: 0.7rem;
}
.login_bigbox{
  box-sizing: border-box;
  padding-top: 3rem;
  height: 100%;
}
.touxiangimgs{
  width: 1.6rem;
  height:1.6rem;
  border-radius: 50%;
  margin: 0.3rem auto;
  position: relative;
}
.touxiangimg{
  width:100%;
  height: 100%;
  border: solid 1px #000;
  border-radius: 50%;
}

.file_in{
  width: 1.6rem;
  height:1.6rem;
  border: solid 1px #fff;
  border-radius: 50%;
  opacity: 0;
  position:absolute;
  left:0;top:0;
}
.touxiangimg{
  width: 1.6rem;
  height:1.6rem;
  border: solid 1px #000;
  border-radius: 50%;
  /*position:absolute;
  left:0;top:0;*/
}
.touxiangimg img{
  width:100%;
  height: 100%;
  border-radius: 50%;
}
img:not([src]){
  display: none;
}
.zc_box{
  width:8rem;
  height: 5rem;
  margin:auto;
}
.zc_box label{
  display: block;
  padding: 0.5rem 0 0 0.9rem;
  font-size:0.55rem;
  color: #fff;
}
.zc_box label input{
  width:5rem;
  height:1rem;
  opacity: 0.5;
  border-bottom: 1px solid #ffffff;
}
.zc_box button{
  width:4rem;
  height:1rem;
  font-size: 0.5rem;
  display: block;
  margin: 1rem auto 0;
  border-radius: 4rem;
  border:none;
  outline:none;
  color:azure;
}
.btn{
  width:8rem;
  margin: 1rem auto;
  padding-bottom: 1rem;

}
.btn div{
  display: inline-block;
  width:45%;
  height:1rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.5rem;
  margin-left: 0.3rem;
  color: aliceblue;
}
.active{
  background: #3377ff;
}
</style>
