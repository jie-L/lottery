<template>
	<div class="box">
		<div class="container">
			<div class="login">
				<!-- 判断点击跳转登录或者注册 -->
				<router-link v-if="logintype" class="LoginTo" :to="isLogin?'Login?up':'Login?in'"><span @click="isLogin = false">注册</span><span>|</span><span @click="isLogin = true">登录</span></router-link>
				<router-link v-else class="LoginTo" to="/Login?up"><span @click="exit()">退出</span></router-link>
			</div>
			<div class="tit">
				<p class="firend"><span>{{time}}</span>好!朋友</p>
				<div class="header-img">
					<img v-if="isLogin" :src="imgurl" alt="">
					<img v-else src="../assets/img/tx.png" alt="">
				</div>
				<div class="username">
					<p>{{username}}</p>
				</div>
				<div class="money clearfix">
					<div><p><span>{{mod}}</span>模拟金</p></div>
					<div><p><span>{{soc}}</span>积分 <router-link to="/shop">兑换</router-link></p></div>
				</div>	
			</div>
			<div class="sort">
				<div class="item" v-for = "(i,index) in arr" :key="index">
					<!-- 判断是否可点击跳转页面 -->
					<router-link :to="i.isCli?'/lotteryHall?'+i.add:'/'">
						<div @click="local(i.add)" class="ks-box">
							<img :src="index==0?img1:img2" alt="">
							<md-button class="ani md-icon-button md-accent">
     						 </md-button>
						</div>
					</router-link>	
					<p class="name">{{i.name}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	img{
		vertical-align: top;
	}
	.box{
		width: 10rem;
		min-height: 100vh;
		background: #077552;
	}
	.container{
		margin: 0 auto;
	}
	.tit{
		padding-top: .2rem;
		background: #08533c;
	}
	.header-img{
		width:1.3rem;
		height: 1.3rem;
		margin: 0 auto;
		border-radius: 50%;
	}

	.header-img img{
		width:100%;
		height: 100%;
		border-radius: 50%;
	}
	.firend{
		text-align: center;
		color: #fff;
		font-weight: 700;
		font-size: 0.6rem;
		line-height: 1.15rem;
		height: 1.15rem;
	}
	.username{
		text-align: center;
		color: #fff;
		height: .8rem;
		line-height: .8rem;
		font-size: .4rem;
		margin-bottom: .25rem;
	}
	.money{
		width:8.8125rem;
		margin: 0 auto;
		display: flex;
		background: #074a35;	
	}
	.money div{
		flex: 1;
	}
	.sort{
		margin-top: 0.235rem;
		flex-wrap: wrap;
		display: flex;
	}
	.sort .item{
		width:33.33%;
		padding: 0.2rem 0;
	}
	.money p{
		font-size: .3rem;
		text-align: center;
		line-height: 0.8rem;
		height: 0.8rem;
		color: #d59b09;
	}
	.login a:hover,.money a:hover{
		text-decoration: none;
		color: #fff;
	}
	.ani{
		margin: 0;
		width: 100%;
		height: 100%;
		left: 0;
		position: absolute;
	}
	.ks-box{
		overflow: hidden;
		margin: 0 auto;
		width:1rem;
		height: 1rem ;
		border-radius: 50%;
		position: relative;
	}
	.ks-box img{
		vertical-align: top;
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	.name{
		height: 1rem;
		line-height: 1rem;
		font-size: 0.35rem;
		color: #48b892;
		text-align: center;
	}
	.money p a {
		color: #fff;
	}
	.login{
		position: absolute;
		right: .6rem;
		font-size: .35rem;
		top:0.6rem;
	}
	.login a {
		color: #fff;
	}
	.login a span{
		margin: 0 .03rem;
		color: #fff;
	}  
	.clearfix:after,
	.clearfix:before{content: '';display: table;}
	.clearfix:after{clear: both;}
</style>
<script>
	export default {
		data () {
		  return {
			  logintype:false,
			imgurl:'',
			username:'',
		  	isLogin:true,
		  	time:'早上',
		  	hour:0,
		  	mod:1420,
		  	soc:2,
		  	img1:'http://haoxg.xyz/lottery/img/happyk3.ea0489f1.png',
		  	img2:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',
		    arr:[{
			    	isCli:true,
			    	name:'北京快三',
			    	add:'beijing'
			    },{
			    	isCli:true,
			    	name:'河北快三',
			    	add:'hebei'
			    },{
			    	
			    	isCli:true,
			    	name:'安徽快三',
			    	add:'anhui'
			    },{
			    	isCli:true,
			    	name:'江苏快三',
			    	add:'jiangsu'
			    },{
			    	isCli:true,
			    	name:'江西快三',
			    	add:'jiangxi'
			    },{
			    	isCli:true,
			    	name:'内蒙古快三',
			    	add:'neimeng'
			    },{
			    	isCli:true,
			    	name:'吉林快三',
			    	add:'jilin'
			    },{
			    	isCli:true,
			    	name:'湖北快三',
			    	add:'hubei'
			    },{
			    	isCli:true,
			    	name:'贵州快三',
			    	add:'guizhou'
			    },{
			    	isCli:true,
			    	name:'广西快三',
			    	add:'guangxi'
			    },{
			    	isCli:true,
			    	name:'甘肃快三',
			    	add:'gansu'
			    },{
			    	isCli:true,
			    	name:'福建快三',
			    	add:'fujian'
			    },{
			    	isCli:true,
			    	name:'上海快三',
			    	add:'shanghai'
			    }
			]
		  };
		},
		methods:{
			exit(){
				localStorage.clear()
				this.$store.commit('reTickets')
			},
			local(url){
				console.log(url)
				localStorage.setItem('routerUrl',url)
			},
			getTime(){
				var tim = new Date();
				this.hour = tim.getHours();
				// console.log(this.hour)
				if (this.hour >= 4 && this.hour < 6){
					this.time = '早上';
				}else if (this.hour >= 6 && this.hour <10) {
					this.time = '上午';
				}else if(this.hour >= 10 && this.hour < 14){
					this.time = '中午';
				}else if(this.hour >= 14 && this.hour < 18){
					this.time = '下午';
				}else if(this.hour >= 18 && this.hour < 20){
					this.time = '傍晚';
				}else {
					this.time = '晚上';
				}
			},
		},
		created(){
			if(localStorage.username){
				this.username=localStorage.username
				this.imgurl=localStorage.url
				this.mod=localStorage.usermoni
				this.soc=localStorage.userpoint
				this.logintype=false
			}else{
				this.username='用户名'
				this.imgurl=''
				this.logintype=true
			}

			this.getTime()
			var _this = this
			setInterval(function(){
				_this.getTime()
			},60000)
		},
	};
</script>