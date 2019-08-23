<template>
  <mo-page>
    <div class="stage" @click="showAnime">
      <div class="stage-bg">
        <div class="stage-bg-cell" v-for="(item, i) in stage" :key="i"></div>
      </div>
      <div class="cell-list" v-if="isMounted">
        <template v-for="(line, lineIndex) in cellTable">
          <div
            class="cell"
            v-for="(cell, i) in line"
            :key="`${lineIndex}-${i}`"
            :title="`${lineIndex}-${i}`"
            :style="getCellStyle(lineIndex, i)"
          ></div>
        </template>
      </div>
    </div>
  </mo-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { createList } from '../../utils/createList'
import anime from 'animejs'
import moPage from '../mo/index.vue'
let control: null | anime.AnimeInstance = null
export default Vue.extend({
  components: { moPage },
  data() {
    return {
      stage: Object.freeze(createList(18 * 18, i => 0)),
      cellTable: createList(19, i => createList(19, i => 0)),
      isMounted: false,
      cellSize: 25
    }
  },
  mounted() {
    this.isMounted = true
    // anime({
    //   targets: 'div',
    //   translateX: 250,
    //   rotate: '1turn',
    //   backgroundColor: '#FFF',
    //   duration: 800
    // })
  },
  methods: {
    showAnime() {
      control && control.restart()
      control = anime({
        targets: ['.stage-bg-cell'],
        // scale: [1, 0.9, 1],
        // translateY: [0, -10, 0],
        // backgroundColor: ['#ccc', '#aaa', '#ccc'],
        scale: [
          { value: 0.95, easing: 'easeOutSine', duration: 500 },
          { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ],
        // rotateY: [
        //   { value: 90, easing: 'easeOutSine', duration: 500 },
        //   { value: 180, easing: 'easeInOutQuad', duration: 1200 }
        // ],
        // backgroundColor: [
        //   { value: '#f66', easing: 'easeOutSine', duration: 500 },
        //   { value: '#fff', easing: 'easeInOutQuad', duration: 1200 }
        // ],
        translateY: [
          { value: -10, easing: 'easeOutSine', duration: 500 },
          { value: 0, easing: 'easeInOutQuad', duration: 1200 }
        ],
        delay: anime.stagger(80, { grid: [18, 18], from: 'center' }),
        duration: 1800,
        round: 10
      })
      anime({
        targets: ['.cell'],
        // scale: [1, 0.9, 1],
        // translateY: [0, -10, 0],
        // backgroundColor: ['#ccc', '#aaa', '#ccc'],
        scale: [
          { value: 0.95, easing: 'easeOutSine', duration: 500 },
          { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ],
        // rotateY: [
        //   { value: 90, easing: 'easeOutSine', duration: 500 },
        //   { value: 180, easing: 'easeInOutQuad', duration: 1200 }
        // ],
        backgroundColor: [
          { value: '#000', easing: 'easeOutSine', duration: 500, step: 1 },
          { value: '#ccc', easing: 'easeInOutQuad', duration: 1200, step: 1 }
        ],
        translateY: [
          { value: -10, easing: 'easeOutSine', duration: 500 },
          { value: 0, easing: 'easeInOutQuad', duration: 1200 }
        ],
        delay: anime.stagger(80, { grid: [19, 19], from: 'center' }),
        duration: 1800,
        round: 10
      })
    },
    getCellStyle(i: number, j: number) {
      const bgCell = document.querySelector('.stage-bg-cell')
      if (!bgCell) return
      const width = +(window.getComputedStyle(bgCell).width || '0px').split('px')[0] + 1
      console.log(`calc(50% - ${(9 - i) * width + 5}px)`)
      return {
        width: this.cellSize + 'px',
        height: this.cellSize + 'px',
        left: `calc(50% - ${(9 - j) * width + this.cellSize / 2}px)`,
        top: `calc(50% - ${(9 - i) * width + this.cellSize / 2}px)`
      }
    }
  }
})
</script>

<style lang="less">
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  .stage {
    border: 5px solid #999;
    padding: 4vmin;
    position: relative;
    .stage-bg {
      width: 70vmin;
      height: 70vmin;
      display: grid;
      grid-template-columns: repeat(18, 1fr);
      grid-template-rows: repeat(18, 1fr);
      grid-gap: 1px;
      background-color: #999;
      padding: 3px;
      overflow: hidden;
      .stage-bg-cell {
        background-color: #fff;
        // transform: scale(1) translateY(0px);
      }
    }
    .cell {
      position: absolute;
      background-color: #ccc;
      border-radius: 50%;
    }
  }
}
</style>
