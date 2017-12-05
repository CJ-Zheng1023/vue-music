<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :class="{active: currentIndex===index}"></span>
    </div>
  </div>

</template>
<script>
  import BScroll from 'better-scroll'
  import {addClass} from 'common/js/dom'
  export default {
    data() {
      return {
        dots: [],
        currentIndex: 0
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 2000
      }
    },
    mounted() {
      setTimeout(() => {
        this._setWidth()
        this._initDot()
        this._initSlider()
      }, 20)
    },
    methods: {
      _setWidth(isResize) {
        let sliderWidth = this.$refs.slider.clientWidth
        this.children = this.$refs.sliderGroup.children
        console.log(sliderWidth)
        let width = 0
        for (let i = 0, len = this.children.length; i < len; i++) {
          let child = this.children[i]
          child.style.width = sliderWidth + 'px'
          addClass(child, 'slider-item')
          width += sliderWidth
        }
        if (this.loop && !isResize) {
          width += 2 * sliderWidth
        }
        if (this.autoPlay) {
          this._autoPlay()
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400
        })
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentIndex = pageIndex
          if (this.autoPlay) {
            clearTimeout(this.timer)
            this._autoPlay()
          }
        })
        window.addEventListener('resize', () => {
          if (!this.slider) {
            return
          }
          this._setWidth(true)
          this.slider.refresh()
        })
      },
      _initDot() {
        this.dots = new Array(this.children.length)
      },
      _autoPlay() {
        let pageIndex = this.currentIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      }
    }
  }
</script>

<style scoped>
  .slider{
    overflow: hidden;
    position: relative;
  }
  .slider-group{
    overflow: hidden;
  }
  .slider-group .slider-item{
    float: left;
  }
  .slider-group .slider-item img{
    width: 100%;
  }
  .dots{
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
  }
  .dots .dot{
    display: inline-block;
    height: 18px;
    width: 18px;
    border-radius: 9px;
    background-color: rgba(255, 255, 255, .5);
    margin: 0 5px;
  }
  .dots .dot.active{
    background-color: rgba(0, 0, 0, .6);
    width: 30px;
  }
</style>
