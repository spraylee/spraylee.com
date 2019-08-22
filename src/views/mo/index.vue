<template>
  <div class="page" id="mo-page" @click="e => onClick(e)">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import mojs from "@mojs/core";
let burst: any = null;
export default Vue.extend({
  props: {
    color: { type: String, default: "#666" }
  },
  data() {
    return {};
  },
  mounted() {
    burst = new mojs.Burst({
      parent: "#mo-page",
      left: 0,
      top: 0,
      radius: { 0: 35 },
      count: 8,
      children: {
        shape: "line",
        radius: 10,
        stroke: this.color,
        easing: "quad.out",
        strokeDasharray: "100%",
        strokeDashoffset: { "-100%": "100%" },
        fill: ["deeppink", "cyan", "yellow"],
        strokeWidth: 4,
        duration: 2000
      }
    });
  },
  methods: {
    onClick(e: any) {
      // const pageX = e.pageX as number
      // const pageY = e.pageY as number
      burst
        .tune({ x: e.pageX, y: e.pageY })
        .setSpeed(3)
        .replay();
    }
  }
});
</script>

<style scoped>
#mo-page {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>