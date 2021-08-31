<template>
  <router-view></router-view>
  
  <div class="gnb">
    <div @click="$router.push('/search'), activeIdx = 0" :class="{ active: activeIdx == 0}">
      <span>검색</span>
    </div>
    <div @click="$router.push('/wishList'), activeIdx = 1" :class="{ active: activeIdx == 1}">
      <span>찜</span>
    </div>
    <div @click="$router.push('/Home'), activeIdx = 2" :class="{ active: activeIdx == 2}">
      <span>홈</span>
    </div>
    <div @click="$router.push('/history'), activeIdx = 3" :class="{ active: activeIdx == 3}">
      <span>최근</span>
    </div>
    <div @click="$router.push('/myPage'), activeIdx = 4" :class="{ active: activeIdx == 4}">
      <span>마이</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      activeIdx: 2,
    }
  },
  methods : {
    
  },
  mounted() {
    
  },
  components: {
  }
}
</script>

<style>
* {
  margin: 0;
}

.gnb {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  margin: 0 auto;
  background: lightgray;
  width: 600px; height: 60px;
  border-radius: 15px 15px 0px 0px;
}
.gnb > div {
  float: left;
  width: 120px; height: 60px;
  text-align: center;
  line-height: 60px;
}
.gnb > div > span {
  cursor: default;
  font-size: 24px;
  vertical-align: middle;
}
.gnb > div.active {
  background-color: #C653FF;
  border-radius: 15px;
}

</style>
