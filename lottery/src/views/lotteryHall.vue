<template>
	<div id="hall">
		<header>
			<div style="border-right:0.015625rem #004832 solid;">
				<p class="title_text">上期开奖</p>
				<p>136</p>
			</div>
			<div>
				<p class="title_text">据01期截止</p>
				<p>{{minute}}:{{second}}</p>
				
			</div>
		</header>
		<div class="nav">
			<div @click="toLeft()" :style="{borderBottom:type==true?'0.06rem solid rgb(204, 152, 48)':''}" :class="type==true?'bg1':''">选号</div>
			<div @click="toRight()" :style="{borderBottom:type==false?'0.06rem solid rgb(204, 152, 48)':''}" :class="type==false?'bg1':''">走势图</div>
		</div>
		
		
	<!--切换效果-->
		<div style="width:10rem;position: relative;height: 13rem;overflow: scroll;top:3.2rem" >
		<div style="width:20rem;position: absolute;top:0;left: 0;" class="toLeft"  @touchstart="touchstart"
      @touchmove="touchmove" id="slider">	
		
		<!--选号-->
		<div style="background:#077552 ;min-height: 13rem;padding: 0.2rem 0.5rem;overflow: scroll;width: 10rem;float: left;">
			
	<!--玩法选择-->
		<div style="height: 1.1rem;margin-bottom: 0.4rem;">
			<!--玩法-->
			<div class="play" style="width: 3.7rem;height:1rem;position: relative;float: left;">
				<button>
					<div @click="playtype=true">
						玩法 : <span style="display:inline-block;margin-right: 0.1rem;">{{playtext}}</span>
					 ﹀
					</div>
					<!--选项-->
					<div style="width: 3.7rem;height: 5.5rem;background: #fff;position: absolute;top: 0;left:0;border-radius:0.0825rem ;z-index: 8;" v-show="playtype">
						<span class="change" v-for="(i,index) in playmain" @click="a(i,index)" :key="index">{{i}}</span>
					</div>
				</button>
			</div>
			<!--问号跳转-->
			<div class="wenhao">?</div>
		</div>
		<!--彩票选项-->
		
		<!--和值-->
			<div v-if="playmains[0]">
				<div style="margin-bottom: 0.2rem;">
					<p style="font-size: 0.4rem;color:#48b892;"><span class="jian">和值</span>  猜开奖号码相加的和</p>
				</div>
				
				<div class="he_main" v-for="(i,index) in he" @click="heightLinght($event)" :key="index">
				      <md-button>
				      	<span>{{index+4}}</span><br />
						<span>奖励{{i}}积分</span>
				      </md-button>
				 </div>
			</div>
			
			
			
		<!--三同号-->
			<div v-else-if="playmains[1]">
				
				<div style="margin-bottom: 0.2rem;">
					<p style="font-size: 0.4rem;color:#48b892;"><span class="jian">三同号</span>  猜中豹子号(三个相同号)</p>
				</div>
				<div class="san_main">
					<div v-for="(i,index) in 6" :key="index">
						<md-button>
					      	<span>{{index+1}}{{index+1}}{{index+1}}</span><br />
							<span>奖励240积分</span>
				      	</md-button>
					</div>
				</div>
				
				<div style="margin-bottom: 0.2rem;margin-top: 5rem;">
					<p style="font-size: 0.4rem;color:#48b892;"><span class="san_jian">三同号通选</span>  猜中豹子号(三个相同号)</p>
				</div>
				<div class="san_main2">
					<div>
						<md-button>
					      	<span>三同号通选</span><br />
							<span>奖励240积分</span>
				      	</md-button>
					</div>
				</div>
			</div>
			
		<!--二同号-->
			<div v-else-if="playmains[2]">
				
				<div style="margin-bottom: 0.2rem;">
					<p style="font-size: 0.4rem;color:#48b892;"><span class="san_jian">二同号单选</span>  选择同号和不同号的组合，奖励80积分</p>
				</div>
				
				<div class="ertong_main">
					<p style="color:#48b892;text-align: center;font-size: 0.4rem;">同号</p>
					<div v-for="(i,index) in 6" :key="index">
						<md-button>
					      	<span>{{index+1}}{{index+1}}</span>
				      	</md-button>
					</div>
				</div>
				<div class="ertong_main">
					<p style="color:#48b892;text-align: center;font-size: 0.4rem;margin: 0.2rem;">不同号</p>
					<div v-for="(i,index) in 6" :key="index">
						<md-button>
					      	<span>{{index+1}}</span>
				      	</md-button>
					</div>
				</div>
				
				
				<div style="margin-bottom: 0.2rem;margin-top:4rem;">
						<p style="font-size: 0.4rem;color:#48b892;"><span class="san_jian">二同号复选</span>  猜开奖中的2个指定的相同号码，奖励15积分</p>
				</div>
				<div class="ertong_main">
					<div v-for="(i,index) in 8" :key="index">
						<md-button>
					      	<span>{{index+1}}{{index+1}}*</span>
				      	</md-button>
					</div>
				</div>
			</div>
				
		<!--三不同-->
			<div v-else-if="playmains[3]">
				
				<div style="margin-bottom: 0.2rem;">
					<p style="font-size: 0.4rem;color:#48b892;"><span class="san_jian">三不同号</span>  猜开奖的三个不同号码，奖励40积分</p>
				</div>
				
				<div class="ertong_main">
					<div v-for="(i,index) in 6" :key="index">
						<md-button>
					      	<span>{{index+1}}</span>
				      	</md-button>
					</div>
				</div>
				
				<div style="margin-bottom: 0.2rem;margin-top: 4rem;">
					<p style="font-size: 0.4rem;color:#48b892;"><span class="san_jian">三连号</span> 123,234,345,456,任一开出即中10积分</p>
				</div>
				<div class="santong_main">
					<div>
						<md-button>
					      	<span>三连号通选</span>
				      	</md-button>
					</div>
				</div>
			</div>
		<!--二不同-->
			<div v-else-if="playmains[4]">
				
				<div style="margin-bottom: 0.2rem;">
					<p style="font-size: 0.4rem;color:#48b892;"><span class="san_jian">二不同号</span>  猜开奖的2个指定的不同号码，奖励8积分</p>
				</div>
				
				<div class="ertong_main">
					<div v-for="(i,index) in 6" :key="index">
						<md-button>
					      	<span>{{index+1}}</span>
				      </md-button>
					</div>
				</div>
			</div>
			
			
		</div>
		
		
		
		<!--走势图-->
		<div  style="width: 10rem;float: right;">
			
			<table class="table-head">
				<tr>
					<th>期次</th>
					<th>开奖号</th>
					<th>大小</th>
					<th>单双</th>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
					<th>6</th>
				</tr>
			</table>
			<div style="height: 12.3rem; overflow-y: auto;">
				<table class="table-body"  >
				<tr v-for="(i,index) in 23" :key="index">
					<td><span>{{i}}期</span></td>
					<td><span>123</span></td>
					<td><span>小</span></td>
					<td><span>双</span></td>
					<td><span class="redCircle">1</span></td>
					<td><span>2</span></td>
					<td><span class="blueCircle">2</span></td>
					<td><span>4</span></td>
					<td><span>5</span></td>
					<td><span>6</span></td>
				</tr>
			</table>
			</div>
		</div>
	</div>
</div>
		
		
		<footer>
			<div style="width:7.6rem;float: left;text-align: center;">
				共0注 <span style="color:#ffc107 ;">0模拟金</span>
			</div>
			<div class="que">确定</div>
		</footer>
	</div>
</template>

<script>
	export default {
		 name: 'RegularButtons',
		data(){
			return{
//			移动端触摸移动
				startPointX: 0,
		        changePointX: 0,
		        showIndex: 0,
		        imgSrc:[
		          '1',
		          '2',
		        ],
				
				type:true,
				
//				倒计时
				minutes:10,
     			seconds: 0,
//			玩法选项切换
				playtext:'和值',
				playtype:false,
				playmain:['和值','三同号','二同号','三不同','二不同'],
				playmains:[true,false,false,false,false],
				
//				和值
				he:['80','40','25','16','12','10','12','16','25','40','80']

	
			}
			
		},
		mounted() {
		    this.add();
		},
		methods: {
			heightLinght(evt){
				console.log(evt.path)
				for(var i=0;i<evt.path.length;i++){
					if(evt.path[i].localName=='button'){
						if((evt.path[i].className=='')){
							evt.path[i].className='active_bor_bkd_clo'
						}else{
							evt.path[i].className=''
						}
					}
				}
				
			},
			
			
//移动端 触摸移动
			show(index){
			      this.changePointX=this.startPointX;
			//    let slider = document.getElementById('slider');
			//    slider.style.marginLeft=`-${330*index}px`;
				var toLeft=document.querySelector('.toLeft')
					   	toLeft.style.transition=0.35+'s'
					   	toLeft.style.left=`-${10*index}rem`;
			    },
			    touchstart(e){
			      this.startPointX = e.changedTouches[0].pageX;
			    },
			    touchmove(e){
			      if(this.startPointX==this.changePointX){
			        return ;
			      }
			      let currPointX = e.changedTouches[0].pageX;
			      let leftSlide = this.startPointX-currPointX;
			      if(leftSlide&&this.showIndex<this.imgSrc.length-1){
			        this.show(++this.showIndex)
			        this.type=false
			      }else if(leftSlide<-30&&this.showIndex>0){
			        this.show(--this.showIndex)
			        this.type=true
			      }
			    },
			
			
			
//		玩法切换
			a(ia,index){
				for(var i=0;i<this.playmains.length;i++){
					this.playmains[i]=false
				}
				this.playmains[index]=true
				this.playtype=false
				this.playtext=ia
			},
		// 倒计时
		    num(n) {
		      return n < 10 ? "0" + n : "" + n;
		    },
		    add() {
		      var _this = this;
		      var time = window.setInterval(function() {
		        if (_this.seconds === 0 && _this.minutes !== 0) {
		          _this.seconds = 59;
		          _this.minutes -= 1;
		        } else if (_this.minutes === 0 && _this.seconds === 0) {
		          _this.seconds = 0;
		          window.clearInterval(time);
		        } else {
		          _this.seconds -= 1;
		        }
		      }, 1000);
		    },
		     toLeft(){
			   	this.type=true
			   	var toLeft=document.querySelector('.toLeft')
			   	toLeft.style.transition=0.35+'s'
			   	toLeft.style.left=0+'rem'
			   },
			   toRight(){
			   	this.type=false
			   	var toLeft=document.querySelector('.toLeft')
			   	toLeft.style.transition=0.35+'s'
			   	toLeft.style.left=-10+'rem'
			   }
		    
		},
		watch: {
		  	second: {
		    	handler(newVal) {
		        this.num(newVal);
		        if(this.minutes==0&&this.seconds==0){
		        	this.minutes=10
		        }
		      }
		    },
		    minute: {
		      handler(newVal) {
		        this.num(newVal);
		      }
		    }
		},
		computed: {
		    second() {
		      return this.num(this.seconds);
		    },
		    minute() {
		      return this.num(this.minutes);
		    }
		},
		created() {
			this.$axios
			.get("/index/kuai", {
				params: {
				}
			})
			.then(data => {
				console.log(data);
			});
		}
	}
</script>

<style scoped>
	/*点击*/
/* .active_bor_bkd_clo{
	margin-top: 0.12rem !important;
	margin-bottom: 0.1rem !important;
	margin-left: 0.26rem !important;
	background: yellow !important;
} */


	small {
    display: block;
  }
	header{
		width: 10rem;
		height: 2.2rem;
		background:#08533c ;
		box-sizing: border-box;
		color: #fff;
		z-index: 2;
		position: fixed;
		top: 0;
		
	}
	header div{
		display: inline-block;
		width: 5rem;
		height: 2.2rem;
		padding-top: 0.2rem;
		font-size: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		box-sizing: border-box;
	}
	header div .title_text{
		font-size: 0.3rem;
	}
	.nav{
		width: 10rem;
		height: 1rem;
		color: #ffab00;
		background: #169967;
		position: fixed;
		top: 2.2rem;
		z-index: 2;
	}
	.nav div{
		display: inline-block;
		width: 5rem;
		height: 1rem;
		font-size: 0.40625rem;
		line-height: 1rem;
		text-align: center;
		box-sizing: border-box;
		transition: background-color .6s;
	}
	.nav .bg1{
		background-color: rgba(204, 152, 48,.3);
	}
	
/*选号*/
	.play button{
		width: 100%;
		height: 100%;
		outline: none;
		font-size: 0.42rem;
		color: #fff;
		padding-left:0.3rem;
		text-align: left;
		border: none;
		background: rgb(22, 153, 103);
	}
	.play button .change{
		display: inline-block;
		width: 3.6rem;
		height: 1.1rem;
		color: black !important;
		text-indent: 1em;
		line-height: 1.1rem;
	}
	.jian{
		display: inline-block;
		width: 1.6rem;
		height: 0.6rem;
		color: #89dec1;
		text-indent: .6em;
		line-height: 0.6rem;
		background: rgb(22, 153, 103);
		border-bottom-right-radius: 6rem;
		border-top-right-radius:6rem;
	}
	.san_jian{
		display: inline-block;
		width: 2.6rem;
		height: 0.6rem;
		color: #89dec1;
		text-indent: .6em;
		line-height: 0.6rem;
		background: rgb(22, 153, 103);
		border-bottom-right-radius: 6rem;
		border-top-right-radius:6rem;
	}
	.wenhao{
		width: 0.5rem;
		height: 0.5rem;
		color: #ccc;
		font-size: 0.5rem;
		line-height:0.5rem;
		text-align:center;
		border-radius: 50%;
		margin: 0.25rem;
		border: #ccc 0.056rem solid;
		float: right;
	}
	.he_main button{
		width:2.5rem;
		height: 1.26rem;
		color: #fff !important;
		margin-top: 0.6rem;
		margin-left: 0.12rem;
		float: left;
		border: 0.09rem #229474 solid;
		background: #08533c;
		box-sizing: border-box;
	}
	.he_main:nth-last-of-type(2){
		margin-left: 1.8rem !important;
	}
	.san_main button{
		width:2.5rem;
		height: 1.26rem;
		color: #fff !important;
		text-align: center;
		margin-top: 0.6rem;
		margin-left: 0.12rem;
		float: left;
		border: 0.09rem #229474 solid;
		background: #08533c;
		box-sizing: border-box;
	}
	.san_main2 button{
		width:8.5rem;
		height: 1.26rem;
		color: #fff !important;
		text-align: center;
		margin-top: 0.6rem;
		margin-left: 0.12rem;
		float: left;
		border: 0.09rem #229474 solid;
		background: #08533c;
		box-sizing: border-box;
	}
	.santong_main button{
		width:8.5rem;
		height: 1.26rem;
		font-size: 0.4rem;
		line-height: 1rem;
		color: #fff !important;
		text-align: center;
		margin-top: 0.6rem;
		margin-left: 0.42rem;
		float: left;
		border: 0.09rem #229474 solid;
		background: #08533c;
		box-sizing: border-box;
	}
	.ertong_main button{
		width:2.5rem;
		height: 1.26rem;
		line-height: 1.26rem;
		color: #fff !important;
		text-align: center;
		margin-top: 0.12rem;
		margin-bottom: 0.1rem;
		margin-left: 0.26rem;
		float: left;
		border: 0.09rem #229474 solid;
		background: #08533c;
		box-sizing: border-box;
	}
	
	

	
/*走势图*/
.table-head{
		width: 10rem;
		height: 0.7rem;
		background: #0b5f45;
		color:#48B892;
		font-size: 0.36rem;
		line-height: 0.63rem;
		border-collapse: collapse;
	}
	.table-head th{
		text-align: center;
		width: 9%;
		font-weight: 100;
		border-bottom:1px solid #00422c ;
		border-right:1px solid #00422c ;
	}
	.table-head th:nth-of-type(1){
		width:1.25rem;
	}
	.table-head th:nth-of-type(2){
		width:1.25rem;
	}
	.table-head th:nth-of-type(3){
		width:1.25rem;
	}
	.table-head th:nth-of-type(4){
		width:1.25rem;
	}
	.table-body{
		width:100%;
		border-collapse: collapse;
		background: #08533c;
		color: #488892;
		height: 12rem;
		overflow: hidden;
	}
	.table-body td{
		text-align: center;
		width: 9%;
		color:#48B892;
		font-size: 0.4rem;
		border-bottom:1px solid #00422c ;
		border-right:1px solid #00422c ;
		height: 0.8rem;
	}
	.table-body td:nth-of-type(1){
		width:1.25rem;
	}
	.table-body td:nth-of-type(2){
		width:1.25rem;
	}
	.table-body td:nth-of-type(3){
		width:1.25rem;
	}
	.table-body td:nth-of-type(4){
		width:1.25rem;
	}
	.table-body tr:nth-of-type(2n){
		background: #0b5f45;
	}
	.redCircle,.blueCircle{
		width: 0.625rem;
		height: 0.625rem;
		background: red;
		display: inline-block;
		border-radius: 50%;
		line-height: 0.625rem;
		color: white;
		text-align: center;
		position: relative;
	}
	.blueCircle:before{
		content:'2';
		line-height: 0.375rem;
		width:0.375rem;
		height: 0.375rem;
		position: absolute;
		border-radius: 50%;
		right:-0.10875rem;
		top:-0.078125rem;
		background: blue;
		font-size: 0.15625rem;
		text-align: center;
	}





	footer{
		position: fixed;
		bottom: 0;
		width: 10rem;
		height: 1.6rem;
		color: #fff;
		z-index: 8;
		line-height: 1.6rem;
		font-size: 0.38rem;
		background: rgba(0,0,0,.87);
	}
	footer .que{
		width: 2.4rem;
		height:1.6rem;
		text-align: center;
		background: #b71c1c;
		float: right;
	}
</style>