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
              <div class="list1" style="width:50%;float:left;background:white;margin-top:0.0581rem">
                <div class="item-img">
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077945538&di=003d3de1479ae95ab6131ca11d042c4a&imgtype=0&src=http%3A%2F%2Fa.vpimg3.com%2Fupload%2Fmerchandise%2Fpdcvis%2F146767%2F2017%2F1104%2F115%2F88257c95-7205-4390-8eab-635fc8384069_t.jpg"
                    alt
                  />
                </div>
                <p>iphoneX(尊贵铂金)</p>
                <p>积分：9999</p>
                <p>市场参考价：9999.00</p>
              </div>
              <div class="list1" style="width:50%;float:left;background:white">
                <div class="item-img">
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546077790483&di=716de166c55fe352462ca970809e926f&imgtype=0&src=http%3A%2F%2Fi1.hexunimg.cn%2F2016-03-15%2F182772684.jpg"
                    style="padding-top:1rem;padding-bottom:0.67rem;"
                    alt
                  />
                </div>
                <p>花费充值卡</p>
                <p>积分：100.00</p>
                <p>市场参考价：9999.00</p>
              </div>
            </div>
            <div class="item" style="width:10rem;float:right">
              <div class="list1" style="width:50%;float:left;">
                <div class="item-img">
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"
                    style="width:2.688rem;height:2.75rem"
                    alt
                  />
                </div>
                <p>烟斗(小号)</p>
                <p>积分：9999</p>
                <p>市场参考价：9999.00</p>
              </div>
              <div class="list1" style="width:50%;float:left;">
                <div class="item-img">
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"
                    style="width:2.688rem;height:2.75rem"
                    alt
                  />
                </div>
                <p>烟斗(小号)</p>
                <p>积分：9999</p>
                <p>市场参考价：9999.00</p>
              </div>
              <div class="list1" style="width:50%;float:left;">
                <div class="item-img">
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546081779966&di=20ebc0440402aa12a980d968b228e5ce&imgtype=0&src=http%3A%2F%2Fimages.51bi.com%2Fopt%2Fsiteimg%2Fp%2F20140610%2F1043b5f316d16f0a00c722bec039fac5.jpeg"
                    style="width:2.688rem;height:2.75rem"
                    alt
                  />
                </div>
                <p>烟斗(小号)</p>
                <p>积分：9999</p>
                <p>市场参考价：9999.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name:'Shoppingpointsexchange',
  data() {
    return {
      type: true,
      startPointX: 0,
      changePointX: 0,
      showIndex: 0,
      imgSrc: ["1", "2"]
    };
  },
  methods: {
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
  }
};
</script>
<style>
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
}
.Shoppingpointsexchange {
  width: 10rem;
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
.list {
}
</style>