<template>
  <slider>
    <div v-for="item in sliderList">
      <a :href="item.linkUrl">
        <img :src="item.picUrl" />
      </a>
    </div>
  </slider>
</template>

<script>
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import Slider from 'base/slider'

  export default {
    data() {
      return {
        sliderList: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.sliderList = res.data.slider
          }
        })
      }
    },
    components: {
      Slider
    }
  }
</script>
