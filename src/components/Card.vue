<template>
  <div class="card">
    <div class="card-thumbnail">
      <img :src="store.logo" />
    </div>
    <div class="card-info">
      <div id="info-title">{{ store.name }}</div>
      <span id="info-star" v-for="i in store.star" :key="i">★</span>
      <span id="info-star" v-for="i in 5 - store.star" :key="i">☆</span>
      <div id="info-time">
        <!-- <img src="../assets/time.png" />{{ store.openTime }}~{{ store.closeTime }} -->
      </div>

      <div id="info-distance">100m<img src="../assets/distance.png" /></div>
      <div id="info-count">
        <!-- <img :src="getCountSrc()" />{{ store.nowPerson }}/{{ store.maxPerson }} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  methods: {
    getCountSrc() {
      let curCountSrc = require("@/assets/count_" +
        (parseInt((this.store.nowPerson / this.store.maxPerson) * 3) + 1) +
        ".png");
      return curCountSrc;
    },
    
  },
  props: {
    store: Object,
  },
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  width: 100%;
  height: 150px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.card-thumbnail {
  float: left;
  width: 150px;
  height: 150px;
  background-color: #f4e2f6;
  border-radius: 20px;
  line-height: 150px;
  text-align: center;
}
.card-thumbnail img {
  width: 85%;
  margin: 0 auto;
  vertical-align: middle;
  border-radius: 50%;
  border: solid 5px white;
}
.card-info {
  position: relative;
  float: left;
  width: calc(100% - 150px);
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
}
#info-title {
  font-size: 25px;
  font-weight: 900;
}
#info-star {
  font-size: 25px;
  color: #ffc000;
}
#info-time {
  margin-top: 20px;
  line-height: 40px;
  font-size: 20px;
}
#info-time img {
  height: 20px;
  padding-right: 5px;
  vertical-align: middle;
}
#info-distance {
  position: absolute;
  right: 15px;
  bottom: 70px;
  font-size: 20px;
}
#info-distance img {
  height: 30px;
  vertical-align: -5px;
}
#info-count {
  position: absolute;
  right: 20px;
  bottom: 10px;
  font-size: 25px;
  font-weight: bold;
}
#info-count img {
  height: 60px;
  vertical-align: -25px;
  margin-right: -10px;
}
</style>