<template>
  <div id="hall">
    <header>
      <div style="border-right:0.015625rem #004832 solid;">
        <p class="title_text">上期开奖</p>
        <p>{{this.sqkjhm}}</p>
      </div>
      <div>
        <p class="title_text">据01期截止</p>
        <times></times>
      </div>
    </header>
    <div class="nav">
      <div
        @click="toLeft()"
        :style="{borderBottom:type==true?'0.06rem solid rgb(204, 152, 48)':''}"
        :class="type==true?'bg1':''"
      >选号</div>
      <div
        @click="toRight()"
        :style="{borderBottom:type==false?'0.06rem solid rgb(204, 152, 48)':''}"
        :class="type==false?'bg1':''"
      >走势图</div>
    </div>

    <!--切换效果-->
    <div style="width:10rem;position: relative;height: 13rem;overflow: scroll;top:3.2rem">
      <div
        style="width:20rem;position: absolute;top:0;left: 0;"
        class="toLeft"
        @touchstart="touchstart"
        @touchmove="touchmove"
        id="slider"
      >
        <!--选号-->
        <div
          style="background:#077552;padding: 0.2rem 0.5rem;width: 10rem;height:13rem;float: left;"
        >
          <!--玩法选择-->
          <div style="height: 1.1rem;margin-bottom: 0.4rem;">
            <!--玩法-->
            <div class="play" style="width: 3.7rem;height:1rem;position: relative;float: left;">
              <button>
                <div @click="playtype=true">
                  玩法 :
                  <span style="display:inline-block;margin-right: 0.1rem;">{{playtext}}</span>
                  ﹀
                </div>
                <!--选项-->
                <div
                  style="width: 3.7rem;height: 5.5rem;background: #fff;position: absolute;top: 0;left:0;border-radius:0.0825rem ;z-index: 8;"
                  v-show="playtype">
                  <span class="change" v-for="(i,index) in playmain" @click="aindex=index,a(i,index)" :key="index">{{i}}</span>
                </div>
              </button>
            </div>
            <!--问号跳转-->
            <router-link to="/help">
              <div class="wenhao">?</div>
            </router-link>
          </div>
          <!--彩票选项-->

          <!--和值-->
          <div v-if="playtext==playmain[0]">
            <div style="margin-bottom: 0.2rem;">
              <p style="font-size: 0.4rem;color:#48b892;">
                <span class="jian">和值</span> 猜开奖号码相加的和
              </p>
            </div>
        <div class="he_main">
          <div class="btns" v-for="(i,index1) in he" @click="btn($event,index1,index1+4)" :key="index1+i">
          <md-button>
            <span>{{index1+4}}</span>
            <br />
            <span>奖励{{i}}积分</span>
          </md-button>
          </div>	
			</div>	
          </div>

          <!--三同号-->
          <div v-if="playtext==playmain[1]">
            <div style="margin-bottom: 0.2rem;">
              <p style="font-size: 0.4rem;color:#48b892;">
                <span class="jian">三同号</span> 猜中豹子号(三个相同号)
              </p>
            </div>
            <div class="san_main">
              <div class="btns" v-for="(i,index2) in santong" @click="btn($event,index2,i)" :key="index2+i">
                <md-button>
                  <span>{{i}}</span>
                  <br />
                  <span>奖励240积分</span>
                </md-button>
              </div>
            </div>

            <div style="margin-bottom: 0.2rem;margin-top: 5rem;">
              <p style="font-size: 0.4rem;color:#48b892;">
                <span class="san_jian">三同号通选</span> 猜中豹子号(三个相同号)
              </p>
            </div>
            <div class="san_main2">
              <div class="btns" @click="btn($event)">
                <md-button>
                  <span>三同号通选</span>
                  <br />
                  <span>奖励240积分</span>
                </md-button>
              </div>
            </div>
          </div>

          <!--二同号-->
          <div v-if="playtext==playmain[2]" style="height:11rem;overflow-y:scroll">
            <div style="margin-bottom: 0.2rem;">
              <p style="font-size: 0.4rem;color:#48b892;">
                <span class="san_jian">二同号单选</span> 选择同号和不同号的组合，奖励80积分
              </p>
            </div>

            <div class="ertong_main T" style="height: 5rem;">
              <p style="color:#48b892;text-align: center;font-size: 0.4rem;">同号</p>
              <div class="btns" v-for="(i,index3) in ertong" @click="btn($event,index3)" :key="index3+i">
                <md-button>
                  <span>{{i}}</span>
                </md-button>
              </div>
            </div>
            <div class="ertong_main B">
              <p style="color:#48b892;text-align: center;font-size: 0.4rem;margin: 0.2rem;">不同号</p>
              <div class="btns" v-for="(i,index4) in 6" @click="btn($event,index4)" :key="index4+i">
                <md-button>
                  <span>{{index4+1}}</span>
                </md-button>
              </div>
            </div>

            <div style="margin-bottom: 0.2rem;margin-top:4rem;">
              <p style="font-size: 0.4rem;color:#48b892;">
                <span class="san_jian">二同号复选</span> 猜开奖中的2个指定的相同号码，奖励15积分
              </p>
            </div>
            <div class="ertong_main2">
              <div class="btns" v-for="(i,index5) in 8" @click="btn($event)" :key="index5+i">
                <md-button>
                  <span>{{index5+1}}{{index5+1}}*</span>
                </md-button>
              </div>
            </div>
          </div>

          <!--三不同-->
          <div v-if="playtext==playmain[3]">
            <div style="margin-bottom: 0.2rem;">
              <p style="font-size: 0.4rem;color:#48b892;">
                <span class="san_jian">三不同号</span> 猜开奖的三个不同号码，奖励40积分
              </p>
            </div>

            <div class="ertong_main2">
              <div class="btns" v-for="(i,index6) in 6" @click="btn($event)" :key="index6+i">
                <md-button>
                  <span>{{index6+1}}</span>
                </md-button>
              </div>
            </div>

            <div style="margin-bottom: 0.2rem;margin-top: 4rem;">
              <p style="font-size: 0.4rem;color:#48b892;">
                <span class="san_jian">三连号</span> 123,234,345,456,任一开出即中10积分
              </p>
            </div>
            <div class="santong_main">
              <div class="btns" @click="btn($event)">
                <md-button>
                  <span>三连号通选</span>
                </md-button>
              </div>
            </div>
          </div>
          <!--二不同-->
          <div v-if="playtext==playmain[4]">
            <div style="margin-bottom: 0.2rem;">
              <p style="font-size: 0.4rem;color:#48b892;">
                <span class="san_jian">二不同号</span> 猜开奖的2个指定的不同号码，奖励8积分
              </p>
            </div>

            <div class="ertong_main2">
              <div class="btns" v-for="(i,index7) in 6" @click="btn($event)" :key="index7+i">
                <md-button>
                  <span>{{index7+1}}</span>
                </md-button>
              </div>
            </div>
          </div>
        </div>

        <!--走势图-->
        <div style="width: 10rem;float: right;">
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
            <table class="table-body">
              <tr v-for="(i,index) in GrabbingData" :key="index">
                <td><span>{{i[0].substring(i[0].length-3,i[0].length)}}期</span></td>
                <td class="hao"> {{i[2].split(',').join(' ')}}</td>
                <td><span v-if="Number(i[2].split(',')[0])+Number(i[2].split(',')[1])+Number(i[2].split(',')[2])<=10">小</span><span v-else>大</span></td>
                <td><span v-if = "(Number(i[2].split(',')[0])+Number(i[2].split(',')[1])+Number(i[2].split(',')[2]))%2 == 0">双</span><span v-else>单</span></td>
                <td v-for="(j,$index) in 6" :class="{redCircle:j==parseInt(GrabbingData[index][2][0]) || j==parseInt(GrabbingData[index][2][2]) || j==parseInt(GrabbingData[index][2][4])}" :key="$index">
                  <span :class="{blueCircle:j == i[5]/11,blueCircles:j == i[4]/111}">
                    {{j}}
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div style="width:7.6rem;float: left;text-align: center;">
        共{{tickets.zhu}}注
        <span style="color:#ffc107 ;">{{tickets.jin}}模拟金</span>
      </div>
      <div style="color:#fff" class="que" @click="commits()">确定</div>
    </footer>
  </div>
</template>

<script>
import times from '../components/timer'
export default {
  components:{
    times,
  },
  name: "RegularButtons",
  data() {
    return {
      cit:'',
//		  抓取数据
             GrabbingData:'',
          	isBig:false,
      //			移动端触摸移动
      startPointX: 0,
      changePointX: 0,
      showIndex: 0,
      imgSrc: ["1", "2"],

      type: true,

      //				倒计时
      minute: '10',
      second: '00',
      tid:'',
      //			玩法选项切换
      playtext: "和值",
      playtype: false,
      playmain: ["和值", "三同号", "二同号", "三不同", "二不同"],

      //				和值
      he: ["80", "40", "25", "16", "12", "10","9","9","10", "12", "16", "25", "40", "80"],
      santong:["111","222","333","444","555","666"],
      ertong:["11","22","33","44","55","66"],
      //传tickets
      tickets:{
        type:'和值',
        zhu:0,
        jin:0,
        num:[]
      },

      aindex:'',

      timer:null,
      sqkjhm:'',
    };
  },
  created() {
    // this.minse()
    if(location.href.split('?')[1]){
      this.cit = location.href.split('?')[1]
    }else if(localStorage.routerUrl){
      this.cit = localStorage.routerUrl
    }

    this.qingqiu()
  },
  methods: {
    qingqiu(){
      this.$axios
      .get("/index/kuai", {
        params:{
          city:this.cit,
          username:localStorage.username
          }
      })
      .then(data => {
        console.log(data.data);
        this.GrabbingData=data.data.data
        this.sqkjhm=this.GrabbingData[this.GrabbingData.length-1][2].split(',').join(' ')
        if(data.data.type==1){
          alert('你中奖了,你的中奖号码为'+data.data.userhm+'  ,开奖号码为'+data.data.ksanhm)
          localStorage.userpoint=data.data.point
        }
        console.log('--第1次拉取-------')
      })
      // var min = 1
      // this.timer = setInterval(() => {
      //     this.$axios
      //         .get("/index/kuai", {
      //           params:{
      //             city:this.cit,
      //             username:localStorage.username
      //             }
      //         })
      //         .then(data => {
      //           console.log(data.data);
      //           this.GrabbingData=data.data.data
      //           if(data.data.type==1){
      //             alert('你中奖了,你的中奖号码为'+data.data.userhm+'  ,开奖号码为'+data.data.ksanhm)
      //         localStorage.userpoint=data.data.point
      //           }
      //         })
      //     min++
      //     console.log('--第' + min + '次拉取-------')
      // }, 60000)
    },
    btn(e, index,num) {
      if (this.playtext == this.playmain[2]) {
        var tDiv = document.querySelectorAll(".T .btns");
        var bDiv = document.querySelectorAll(".B .btns");
        e.path.forEach(Element => {
          if (Element.className == "btns") {
            console.log(Element.parentNode);
            Element.className = "btns active";
            if (Element.parentNode.className == "T") {
              bDiv[index].className = "btns";
            } else if (Element.parentNode.className == "B") {
              tDiv[index].className = "btns";
            }
          } else if (Element.className == "btns active") {
            Element.className = "btns";
          }
        });
      } else {
        var suan=null
        for(var i=0;i<e.path.length;i++){
          if(e.path[i].className=='btns'){
              e.path[i].className='btns active'
              if (this.playtext == this.playmain[0]||this.playtext == this.playmain[1]) {
                this.add(this.playtext,1,2,num)
              }else{
                this.tickets.zhu=0;
                this.tickets.jin=0;
              }
          }else if(e.path[i].className=='btns active'){
              e.path[i].className='btns'
              if (this.playtext == this.playmain[0]||this.playtext == this.playmain[1]) {
                this.jian(this.playtext,1,2,num)
              }else{
                this.tickets.zhu=0;
                this.tickets.jin=0;
              }
          }
        }
        this.tickets.num.sort(function(a,b){
                  return a-b;
              })
      }
    },
    add(type,zhu,jin,num){
      this.tickets.type=type
      this.tickets.zhu+=zhu;
      this.tickets.jin += jin;
      this.tickets.num.push(num)
    },
    jian(type,zhu,jin,num){
      this.tickets.type=type
      this.tickets.zhu-=zhu;
      this.tickets.jin -= jin;
      for(var i=0;i<this.tickets.num.length;i++){
        if(this.tickets.num[i]==num){
          this.tickets.num.splice(i,1)
        }
      }
    },
    commits(){
      if(this.tickets.num.length>0){
        this.$store.commit('setTickets',this.tickets)
        this.$router.push('/tickets')
      }else{
        alert('至少选择一注')
      }
    },
    quchong(arr){//this,tickets.num=this.quchong(this.tickets.num)
      let newArr = []
      arr.forEach((val)=>{
            if(newArr.indexOf(val) == -1){
                  newArr.push(val)
              }
        })    
      return newArr  
    },



    //移动端 触摸移动
    show(index) {
      this.changePointX = this.startPointX;
      //    let slider = document.getElementById('slider');
      //    slider.style.marginLeft=`-${330*index}px`;
      var toLeft = document.querySelector(".toLeft");
      toLeft.style.transition = 0.35 + "s";
      toLeft.style.left = `-${10 * index}rem`;
    },
    touchstart(e) {
      this.startPointX = e.changedTouches[0].pageX;
    },
    touchmove(e) {
      if (this.startPointX == this.changePointX) {
        return;
      }
      let currPointX = e.changedTouches[0].pageX;
      let leftSlide = this.startPointX - currPointX;
      if (leftSlide > 20 && this.showIndex < this.imgSrc.length - 1) {
        this.show(++this.showIndex);
        this.type = false;
      } else if (leftSlide <-30&& this.showIndex > 0) {
        this.show(--this.showIndex);
        this.type = true;
      }
    },

    //		玩法切换
    a(ia, index) {
    //   for (var i = 0; i < this.playmain.length; i++) {
        // this.playmains[i] = false;
    //   }
    //   this.playmains[index] = true;
      this.playtype = false;
      this.playtext = ia;
      // if(this.aindex!=index){

      // }
      // console.log(,)
      this.tickets.zhu=0;
      this.tickets.jin=0;
    },
    // 倒计时
    minse() {
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
    toLeft() {
      this.type = true;
      var toLeft = document.querySelector(".toLeft");
      toLeft.style.transition = 0.35 + "s";
      toLeft.style.left = 0 + "rem";
    },
    toRight() {
      this.type = false;
      var toLeft = document.querySelector(".toLeft");
      toLeft.style.transition = 0.35 + "s";
      toLeft.style.left = -10 + "rem";
    }
  },
};
</script>

<style scoped>
.active{
	border: 0.09rem orange solid !important;
}
.active *{
  color: orange !important;
}
small {
  display: block;
}
header {
  width: 10rem;
  height: 2.2rem;
  background: #08533c;
  box-sizing: border-box;
  color: #fff;
  z-index: 2;
  position: fixed;
  top: 0;
}
header div {
  display: inline-block;
  width: 5rem;
  height: 2.2rem;
  padding-top: 0.2rem;
  font-size: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  box-sizing: border-box;
}
header div .title_text {
  font-size: 0.3rem;
}
.nav {
  width: 10rem;
  height: 1rem;
  color: #ffab00;
  background: #169967;
  position: fixed;
  top: 2.2rem;
  z-index: 2;
}
.nav div {
  display: inline-block;
  width: 5rem;
  height: 1rem;
  font-size: 0.40625rem;
  line-height: 1rem;
  text-align: center;
  box-sizing: border-box;
  transition: background-color 0.6s;
}
.nav .bg1 {
  background-color: rgba(204, 152, 48, 0.3);
}

/*选号*/
.play button {
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 0.42rem;
  color: #fff;
  padding-left: 0.3rem;
  text-align: left;
  border: none;
  background: rgb(22, 153, 103);
}
.play button .change {
  display: inline-block;
  width: 3.6rem;
  height: 1.1rem;
  color: black !important;
  text-indent: 1em;
  line-height: 1.1rem;
}
.jian {
  display: inline-block;
  width: 1.6rem;
  height: 0.6rem;
  color: #89dec1;
  text-indent: 0.6em;
  line-height: 0.6rem;
  background: rgb(22, 153, 103);
  border-bottom-right-radius: 6rem;
  border-top-right-radius: 6rem;
}
.san_jian {
  display: inline-block;
  width: 2.6rem;
  height: 0.6rem;
  color: #89dec1;
  text-indent: 0.6em;
  line-height: 0.6rem;
  background: rgb(22, 153, 103);
  border-bottom-right-radius: 6rem;
  border-top-right-radius: 6rem;
}
.wenhao {
  width: 0.5rem;
  height: 0.5rem;
  color: #ccc;
  font-size: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 50%;
  margin: 0.25rem;
  border: #ccc 0.056rem solid;
  float: right;
}
.he_main>div,.san_main>div,.san_main2>div,.santong_main>div,.ertong_main>div,.ertong_main2>div{
  width: 2.5rem;
  height: 1.26rem;
  margin-top: 0.6rem;
  margin-left: 0.2rem;
  float: left;
  border: 0.09rem #229474 solid;
  background: #08533c;
  box-sizing: border-box;
}
.he_main button,.san_main button,.san_main2 button,.santong_main button,.ertong_main button,.ertong_main2 button{
	width: 100% !important;
	height: 100% !important;
	min-width:auto !important;
	font-size:inherit !important;
	text-align: center !important;
	margin: 0;
  	color: #fff !important;
}
.he_main>div:nth-last-of-type(2) {
  margin-left: 1.8rem !important;
}
.san_main button {
  width: 2.5rem;
  height: 1.26rem;
}
.san_main2 button {
  width: 8.5rem;
  height: 1.26rem;
}
.santong_main button {
  width: 8.5rem;
  height: 1.26rem;
}
.ertong_main button,.ertong_main2 button{
  width: 2.5rem;
  height: 1.26rem;
  line-height: 1.26rem;
}

/*走势图*/
.table-head {
  width: 10rem;
  height: 0.7rem;
  background: #0b5f45;
  color: #48b892;
  font-size: 0.36rem;
  line-height: 0.63rem;
  border-collapse: collapse;
}
.table-head th {
  text-align: center;
  width: 9%;
  font-weight: 100;
  border-bottom: 1px solid #00422c;
  border-right: 1px solid #00422c;
}
.table-head th:nth-of-type(1){
		width:2rem;
	}
	.table-head th:nth-of-type(2){
		width:1.5rem;
	}
	.table-head th:nth-of-type(3){
		width:1.1rem;
	}
	.table-head th:nth-of-type(4){
		width:1.1rem;
	}
.table-body {
  width: 100%;
  border-collapse: collapse;
  background: #08533c;
  color: #488892;
  height: 12rem;
  overflow: hidden;
}
.table-body td {
  text-align: center;
  width: 9%;
  color: #48b892;
  font-size: 0.4rem;
  border-bottom: 1px solid #00422c;
  border-right: 1px solid #00422c;
  height: 0.8rem;
}
.table-body td:nth-of-type(1){
		width:2rem;
	}
	.table-body td:nth-of-type(2){
		width:1.1rem;
	}
	.table-body td:nth-of-type(3){
		width:1.1rem;
	}
	.table-body td:nth-of-type(4){
		width:1.1rem;
	}
	.table-body tr:nth-of-type(2n){
		background: #0b5f45;
	}
.redCircle span,.blueCircle,.blueCircles{
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
	.blueCircles:before{
		content:'3';
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

footer {
  position: fixed;
  bottom: 0;
  width: 10rem;
  height: 1.6rem;
  color: #fff;
  z-index: 8;
  line-height: 1.6rem;
  font-size: 0.38rem;
  background: rgba(0, 0, 0, 0.87);
}
footer .que {
  width: 2.4rem;
  height: 1.6rem;
  text-align: center;
  background: #b71c1c;
  float: right;
}
</style>