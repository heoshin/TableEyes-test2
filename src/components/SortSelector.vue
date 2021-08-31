<template>
  <div id="bg">
    <div class="select-sort">
      <div id="cur-kind" v-bind:style="getCurKindMargin()"></div>
      <div class="sort-kind-frame">
        <div @click="setCurKind(0)" class="sort-kind" id="congestion">혼잡도순</div>
        <div @click="setCurKind(1)" class="sort-kind" id="distance">거리순</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'sortSelector',
  data() {
    return {
      
    }
  },
  methods : {
    setCurKind(idx) {
      this.$parent.setCurKind(idx);
    },
    getCurKindMargin() {
      return this.$parent.getCurKindMargin();
    }
  }
}
</script>

<style>
#bg {
  width: 90%; height: 50px;
  background-color: white;
}
.select-sort {
  position: relative;
  width: 300px; height: 40px;
  margin: 0 auto;
  background-color: #F2F2F2;
  border-radius: 20px;
}
#cur-kind {
  width: calc(100% / 2); height: 100%;
  background-color: #C653FF;
  border-radius: 20px;
}
.sort-kind-frame {
  position: absolute;
  width: 100%; height: 100%;
  top: 0;
  left: 0;
  line-height: 40px;
}
.sort-kind {
  float: left;
  width: 150px; height: 100%;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  font-weight: bold;
}
</style>