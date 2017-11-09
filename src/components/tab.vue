<template>
  <ul  class="tab">
    <li>
      <router-link to="/recommend" tag="a" class="tab-item"><span>推荐</span></router-link>
    </li>
    <li>
      <router-link to="/singer" tag="a" class="tab-item"><span>歌手</span></router-link>
    </li>
    <li>
      <router-link to="/rank" tag="a" class="tab-item"><span>排行</span></router-link>
    </li>
    <li>
      <router-link to="/search" tag="a" class="tab-item"><span>搜索</span></router-link>
    </li>
  </ul>
</template>
<script>
  export default{}
</script>

<style coped>
  .tab{
    list-style: none;
    overflow: hidden;
  }
  .tab li{
    float: left;
    text-align: center;
    width: 25%;
    line-height: 35px;
  }
  .tab .tab-item{
    cursor: pointer;
  }
  .tab .tab-item span{
    color: #fff;
  }
  .tab-item.router-link-active span{
    color: bisque;
  }
</style>
