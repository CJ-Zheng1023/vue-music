<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>

</template>
<script>
  export default {
    mounted() {
      setTimeout(() => {
        this._setWidth()
        this._initSlider()
      }, 20)
    },
    methods: {
      _setWidth() {
        console.log(this.$refs.sliderGroup.children.length)
      },
      _initSlider() {

      }
    }
  }
</script>

<style scoped>

</style>
