<template>
  <div class="image-slider">
    <div
      v-for="city in citys"
      :key="city.id"
      :class="['slide', { current: city.currentIsActive }]"
    >
      <img class="image" :src="city.pic" :alt="city.name" />
      <div class="content">
        <h1 class="title">{{ city.name }}</h1>
        <div class="description">
          {{ city.des }}
        </div>
      </div>
    </div>
    <!-- <div :class="['slide', { current: currentIsActive }]">
      <img class="image" src="./assets/image/dongjing.jpg" alt="东京" />
      <div class="content">
        <h1 class="title">东京</h1>
        <div class="description">
          东京（とうきょう、Tōkyō），日本首都，位于日本关东平原中部，是面向东京湾的国际大都市，日本三大都市圈之一东京都市圈的中心城市。“东京”狭义上指东京都、旧东京府或东京都区部（旧东京市），亦可泛指东京都市圈
          。东京是江户幕府的所在地，江户在庆应4年7月（1868年9月）改名为东京。
        </div>
      </div>
    </div>
    <div :class="['slide', { current: currentIsActive }]">
      <img class="image" src="./assets/image/niuyue.jpg" alt="纽约" />
      <div class="content">
        <h1 class="title">纽约</h1>
        <div class="description">
          纽约市（New York
          City，简称NYC），位于美国纽约州东南部大西洋沿岸，是美国第一大城市及第一大港口，纽约都市圈为世界上最大的城市圈之一，与英国伦敦、中国香港并称为“纽伦港”（Nylonkong）。纽约与伦敦并列为全世界最顶级的国际大都市。2018年11月，纽约被GaWC评为Alpha++级世界一线城市。
        </div>
      </div>
    </div> -->

    <div id="prev" @click="handlePrevBtn">
      <i class="iconfont icon-icon-test"></i>
    </div>
    <div id="next" @click="handleNextBtn">
      <i class="iconfont icon-icon-test1"></i>
    </div>
  </div>
</template>

<script>
var citys = [
  {
    id: 0,
    name: '北京',
    pic: require('./assets/image/beijing.jpg'),
    des:
      '北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。',
    currentIsActive: true
  },
  {
    id: 1,
    name: '东京',
    pic: require('./assets/image/dongjing.jpg'),
    des:
      '东京（とうきょう、Tōkyō），日本首都，位于日本关东平原中部，是面向东京湾的国际大都市，日本三大都市圈之一东京都市圈的中心城市。“东京”狭义上指东京都、旧东京府或东京都区部（旧东京市），亦可泛指东京都市圈。东京是江户幕府的所在地，江户在庆应4年7月（1868年9月）改名为东京。',
    currentIsActive: false
  },
  {
    id: 2,
    name: '纽约',
    pic: require('./assets/image/niuyue.jpg'),
    des:
      '纽约市（New YorkCity，简称NYC），位于美国纽约州东南部大西洋沿岸，是美国第一大城市及第一大港口，纽约都市圈为世界上最大的城市圈之一，与英国伦敦、中国香港并称为“纽伦港”（Nylonkong）。纽约与伦敦并列为全世界最顶级的国际大都市。2018年11月，纽约被GaWC评为Alpha++级世界一线城市。',
    currentIsActive: false
  }
]

export default {
  data() {
    return {
      currentIndex: 0, // 记录到第几张图
      isAuto: true,
      autoDirection: true,
      time: 3000,
      citys,
      picInterval: '',
      imgUrl: require('./assets/image/beijing.jpg')
    }
  },
  mounted() {
    if (this.isAuto) {
      this.autoPlay()
    }
  },
  methods: {
    // 点击下一张图
    handleNextBtn() {
      clearInterval(this.picInterval)
      const currentCity = citys[this.currentIndex]
      currentCity.currentIsActive = false
      this.currentIndex++
      if (this.currentIndex >= citys.length) {
        this.currentIndex = 0
      }
      citys[this.currentIndex].currentIsActive = true
      this.autoPlay()
    },
    // 点击前面一张图
    handlePrevBtn() {
      clearInterval(this.picInterval)
      const currentCity = citys[this.currentIndex]
      currentCity.currentIsActive = false
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = citys.length - 1
      }
      citys[this.currentIndex].currentIsActive = true
      this.autoPlay()
    },
    // 自动轮播
    autoPlay() {
      this.picInterval = setInterval(
        this.autoDirection ? this.handleNextBtn : this.handlePrevBtn,
        this.time
      )
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.image-slider {
  width: 100vw;
  height: 100vh;
}

.image-slider .slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all linear 0.2s;
  opacity: 0;
}

.image-slider .slide.current {
  opacity: 1;
}

.image-slider .slide .image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 20;
}

.slide .content {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px;
  width: 600px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  z-index: 50;
}

.image-slider .slide.current .content {
  transition: all ease-in-out 0.5s;
  opacity: 1;
}

h1 {
  margin: 10px;
}

#prev,
#next {
  position: absolute;
  top: 50%;
  left: 20px;
  background: rgba(0, 0, 0, 0.6);
  width: 80px;
  height: 80px;
  color: white;
  text-align: center;
  line-height: 80px;
  z-index: 100;
  border-radius: 10px;
  cursor: pointer;
  transition: all linear 0.5s;
}

#prev:hover,
#next:hover {
  background: rgba(255, 255, 255, 0.6);
  color: black;
}

#next {
  left: unset;
  right: 20px;
}

/* @font-face {
  font-family: 'iconfont';
  src: url('./assets/font/iconfont.eot');
  src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/font/iconfont.woff') format('woff'),
    url('./assets/font/iconfont.ttf') format('truetype'),
    url('./assets/font/iconfont.svg#iconfont') format('svg');
} */

/* i {
  transform: scale(3);
} */
</style>
