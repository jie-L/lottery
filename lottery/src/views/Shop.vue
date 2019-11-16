<template>
  <div class="Shoppingpointsexchange">
    <div class="application">
      <div class="banner">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544695339701&di=e614a2ae7b5d3fd39738839e46e534ed&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8415a77c3a4a80120a12372925c.jpg%402o.jpg"
          alt
        />
        <div class="broadcast">恭喜用户123****321，购买32个烟斗，获赠999模拟金</div>
      </div>
      <div class="district">
        <div class="rate">
          <div class="exchangearea">
            <p @click="toRights" :class="[type?'active':'']">兑换区</p>
          </div>
          <div class="shoppingdistricts">
            <p @click="toLefts" :class="[!type?'active':'']">购物区</p>
          </div>
        </div>
          <div style="width:10rem;position:relative;overflow:hidden;height:13rem">
          <div
            class="outNode"
            style="width:20rem;height:13rem;position:absolute;top:0.15rem;left:0"
            @touchmove="touchmove"
            @touchstart="touchstart"
          >
            <div class="item" style="width:10rem;float:left">

              <div class="list1" style="margin:2%;width:46%;float:left;" v-for="(i,$index) in pointarr" :key="$index">
                <popup :shopid="i.shopid" @isSure="issurepoint">
                <div class="item-img">
                  <img
                    :src="i.img"
                    style="width:3rem;height:2.75rem"
                    alt
                  />
                </div>
                <p>{{i.name}}</p>
                <p>积分：{{i.goldcoin.toFixed(2)}}</p>
                <p>市场参考价：{{i.shopprize.toFixed(2)}}</p>
                </popup>
              </div>
            </div>


            
            <div class="item" style="width:10rem;float:right">
              
              <div class="list1" style="margin:2%;width:46%;float:left;" v-for="(i,$index) in shoparr" :key="$index">
                <popup :shopid="i.shopid" @isSure="issure">
                <div class="item-img">
                  <img
                    :src="i.img"
                    style="width:2.688rem;height:2.75rem"
                    alt
                  />
                </div>
                <p>{{i.name}}</p>
                <p>金币：{{i.goldcoin.toFixed(2)}}</p>
                <p>市场参考价：{{i.shopprize.toFixed(2)}}</p>
                </popup>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</template>
<script>
import popup from '../components/Popup'
export default {
  // name:'Shoppingpointsexchange',
  components:{
    popup,
  },
  data() {
    return {
      type: true,
      startPointX: 0,
      changePointX: 0,
      showIndex: 0,
      imgSrc: ["1", "2"],
      shoparr:[],
      pointarr:[]
    };
  },
  created(){
    this.$axios.get('/shops/hq').then((data)=>{
      console.log(data)
      this.shoparr=data.data.shoplist
      this.pointarr=data.data.pointlist
    },(err)=>{
      console.log(1)
    })
  },
  methods: {
    issurepoint(data){
      console.log(data)
      if(data[0]){
        if(localStorage.username){
          //执行购买
          this.$axios.post('/shops/dh',{shopid:data[1],username:localStorage.username}).then(data=>{
            console.log(data)
            alert(data.data.type)
            localStorage.userpoint=data.data.point
          })
        }else{
          alert('请先返回首页登录')
        }
      }
    },
    issure(data){
      console.log(data)
      if(data[0]){
        if(localStorage.username){
          //执行购买
          this.$axios.post('/shops/gm',{shopid:data[1],username:localStorage.username}).then(data=>{
            console.log(data)
            alert(data.data.type)
            localStorage.usercoin=data.data.usercoin
            localStorage.usermoni=data.data.usermoni
          })
        }else{
          alert('请先返回首页登录')
        }
      }
    },
    toRights() {
      this.type = true;
      var outNode = document.querySelector(".outNode");
      outNode.style.transition = 0.5 + "s";
      outNode.style.left = 0 + "rem";
    },
    toLefts() {
      this.type = !this.type;
      var outNode = document.querySelector(".outNode");
      outNode.style.transition = 0.5 + "s";
      outNode.style.left = -10 + "rem";
    },
    show(index) {
      this.changePointX = this.startPointX;
      var outNode = document.querySelector(".outNode");
      outNode.style.transition = 0.5 + "s";
      outNode.style.left = `-${10 * index}rem`;
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
      if (leftSlide > 30 && this.showIndex < this.imgSrc.length - 1) {
        this.show(++this.showIndex);
        this.type = false;
      } else if (leftSlide < -30 && this.showIndex > 0) {
        this.show(--this.showIndex);
        this.type = true;
      }
    }
  },
  // components:{

  // }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
}
.item-img {
  display: inline-block;
  max-height: 3.75rem;
  width: 50%;
  margin-left: 23%;

  vertical-align: middle;
}
/* .item-img img{
 
  width: 2.9375rem;
  height: 3.75rem;
  padding: 0.3125rem 0;
} */
.item p {
  text-align: center;
  color: #807474;
  line-height: 0.6rem;
}
.Shoppingpointsexchange {
  width: 10rem;
  overflow: hidden;
}
.application {
  width: 10rem;
}
.banner {
  width: 10rem;
  position: relative;
}
.banner img {
  width: 10rem;
  /* height: 1.3906rem; */
  border-style: none;
}
.broadcast {
  width: 10rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.1563rem;
  color: red;
  height: 0.65rem;
  line-height: 0.65rem;
  text-align: center;
}
.district {
  width: 10rem;
}
.rate {
  width: 10rem;
  height: 1.3rem;
  background-color: rgba(0, 0, 0, 0.1);
}
.exchangearea {
  width: 5rem;
  height: 1.3rem;
  /* background-color: rgba(0,0,0,0); */
  display: inline-block;
}
.exchangearea p {
  height: 1.3rem;
  line-height: 1.3rem;
  font-size: 0.4rem;
  color: #000;
  text-align: center;
}
.shoppingdistricts {
  width: 5rem;
  height: 1.3rem;
  /* background-color: rgba(0,0,0,0); */
  display: inline-block;
}
.shoppingdistricts p {
  height: 1.3rem;
  line-height: 1.3rem;
  color: #000;
  font-size: 0.4rem;
  text-align: center;
}
.active {
  border-bottom: 2px solid red;
}

</style>