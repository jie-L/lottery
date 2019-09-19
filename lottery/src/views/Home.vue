<template>
	<div class="box">
		<div class="container">
			<div class="login">
				<router-link to="/one"><span>注册</span>|<span>登录</span></router-link>
			</div>
			<div class="tit">
				<p class="firend"><span>{{time}}</span>好!朋友</p>
				<div class="header-img">
					<img src="../assets/img/tx.png" alt="">
				</div>
				<div class="username">
					<p>用户名</p>
				</div>
				<div class="money clearfix">
					<div><p><span>0</span>模拟金</p></div>
					<div><p><span>0</span>积分 <router-link to="./">兑换</router-link></p></div>
				</div>	
			</div>
			<div class="sort">
				<div class="item" v-for = "i in arr">
					<router-link to="/">
						<div class="ks-box">
							<img :src="i.isCli?img1:img2" alt="">
						</div>
						<p class="name">{{i.name}}</p>
					</router-link>	
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
		background: #08533c;
	}
	.header-img{
		width:1rem;
		height: 1rem;
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
		font-size: 0.35rem;
		line-height: .8rem;
		height: .8rem;
	}
	.username{
		text-align: center;
		color: #fff;
		height: .6rem;
		line-height: .6rem;
		font-size: .3rem;
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
		width:25%;
		padding: 0.2rem 0;
	}
	.money p{
		font-size: .25rem;
		text-align: center;
		line-height: 0.625rem;
		height: 0.625rem;
		color: #d59b09;
	}
	.ks-box{
		margin: 0 auto;
		width:.6rem;
		height: .6rem;
		border-radius: 50%;
	}
	.ks-box img{
		vertical-align: top;
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	.name{
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.15rem;
		color: #fff;
		text-align: center;
	}
	.money p a {
		color: #fff;
	}
	.login{
		position: absolute;
		right: .6rem;
		font-size: .3rem;
		top:0.2rem;
	}
	.login a {
		color: #fff;
	}
	.login a span{
		margin: 0 .03rem;
	}  
	.clearfix:after,
	.clearfix:before{content: '';display: table;}
	.clearfix:after{clear: both;}
</style>
<script>
	export default {
		data () {
		  return {
		  	time:'',
		  	hour:0,
		  	img1:'http://haoxg.xyz/lottery/img/happyk3.ea0489f1.png',
		  	img2:'http://haoxg.xyz/lottery/img/k31.f388457f.jpg',
		    arr:[
			    {
			    	isCli:true,
			    	name:'河北快三'
			    },{
			    	
			    	isCli:false,
			    	name:'安徽快三'
			    },{
			    	isCli:false,
			    	name:'江苏快三'
			    },{
			    	isCli:false,
			    	name:'江西快三'
			    },{
			    	isCli:false,
			    	name:'内蒙古快三'
			    },{
			    	isCli:false,
			    	name:'吉林快三'
			    },{
			    	isCli:false,
			    	name:'湖北快三'
			    },{
			    	isCli:false,
			    	name:'贵州快三'
			    },{
			    	isCli:false,
			    	name:'广西快三'
			    },{
			    	isCli:false,
			    	name:'甘肃快三'
			    },{
			    	isCli:false,
			    	name:'福建快三'
			    },{
			    	isCli:false,
			    	name:'北京快三'
			    },{
			    	isCli:false,
			    	name:'上海快三'
			    }
			]
		  };
		},
		created(){
			var tim = new Date()
			this.hour = tim.getHours()
			if (this.hour > 6 && this.hour <=10) {
				this.time = '上午'
			}else if(this.hour > 10 && this.hour <= 14){
				this.time = '中午'
			}else if(this.hour > 14 && this.hour <= 18){
				this.time = '下午'
			}else if(this.hour > 18 && this.hour <= 24){
				this.time = '晚上'
			}else{
				this.time = '早晨'
			}
		}
	};
</script>