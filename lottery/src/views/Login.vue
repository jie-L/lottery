<template>
  <div id="login_up" style="height:100%">
		<div class="login_bigbox" style="width:10rem;background-color:#08533c;height:100%;">
			<div style="height:100%;">
				<div class="login">
          <div v-if="type"><h2 >登录</h2></div>
					<div v-else><h2 >注册</h2> </div>
				</div>
				<div>
					<div class="login_top">
						<div class="touxiangimgs">
							<img class="touxiangimg" :src="url">
							<input class="file_in" type="file">
						</div>
						<div class="zc_box">
							<label for="">账号：
                <input type="text" v-model="login_in.account">
              </label>
              <label for="">密码：
                <input type="text" v-model="login_in.password">
              </label>

							<button class="surebtn">确定</button>
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
     url:'',
     login_in:{
       account:'',
       password:'',
       img_url:''
     }
    
   }
 },
 created(){
   if(location.href.split('?')[1]=='in'){
     this.type=false
     console.log(this.type)
   }
   if(location.href.split('?')[1]=='up'){
     this.type=true
     console.log(this.type)
   }
 },
};
</script>

<style scoped>
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
}
.touxiangimgs{
  width: 1.6rem;
  height:1.6rem;
  border-radius: 50%;
  display: block;
  margin: 0.3rem auto;
  position: relative;
}
.file_in{
  width: 1.6rem;
  height:1.6rem;
  border: solid 1px #fff;
  border-radius: 50%;
  opacity: 0;
  position:absolute;
  left:0;top:0;
  z-index: 5
}
.touxiangimg{
  width: 1.6rem;
  height:1.6rem;
  border: solid 1px #000;
  border-radius: 50%;
  position:absolute;
  left:0;top:0;
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
</style>
