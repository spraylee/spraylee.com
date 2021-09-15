<template>
  <mo-page class="page">
    <section>
      <p class="title">我叫<span class="name">李军</span></p>
      <p>或者你也可以叫我 <span class="name">Spray Lee</span> 。</p>
      <div class="gap"></div>
      <p>
        我是一名前端开发者，热衷于用代码驱动这个世界。闲暇时我会用代码去实现一些好玩有趣的东西。下面有我最近写的五子棋小游戏，自带简单的AI，感兴趣可以尝试下。
      </p>
      <div class="link">
        <a href="http://go.spraylee.com" target="_blank" title="五子棋"
          ><img src="~@/assets/go.png" alt=""
        /></a>
      </div>
      <p>
        如果你碰巧也喜欢前端、热衷于创造，或许我们可以一起交流下，你可以通过以下途径找到我。
      </p>
      <div class="link">
        <a
          href="https://github.com/spraylee"
          target="_blank"
          title="https://github.com/spraylee"
          ><img src="~@/assets/github.png" alt=""
        /></a>
        <a href="javascript:;" title="Spray-521"
          ><img src="~@/assets/wechat.png" alt=""
        /></a>
      </div>
      <!-- <p>
      I like to write some thing fun. You can hava a try.
    </p> -->
      <!-- <p class="title">My name is Spray Lee.</p>
    <p>A front-end developer.</p>
    <div class="gap"></div>
    <p>
      I like to write some thing fun. You can hava a try.
    </p> -->
      <a class="beian" href="https://beian.miit.gov.cn/">粤ICP备18038053号</a>
    </section>
  </mo-page>
</template>

<script lang="ts">
import Vue from "vue";
import MoPage from "../mo/index.vue";
export default Vue.extend({
  components: { MoPage },
});
</script>

<style lang="less" scoped>
section {
  min-height: 100vh;
  padding-left: 20%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  font-size: 18px;
  padding-bottom: 15vh;
  color: #666;
  background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
  p {
    width: 40vw;
    max-width: 600px;
    min-width: 500px;
    text-indent: 36px;
    line-height: 1.7;
  }
  .name {
    font-size: 1.5em;
    padding: 0 0.2em;
  }
  .title {
    font-size: 28px;
    color: #333;
    margin: 0;
  }
  .gap {
    height: 10px;
  }
  .link {
    padding-top: 20px;
    padding-left: 36px;
    padding-bottom: 10px;
    a {
      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        object-position: center;
        margin-right: 30px;
        transition: all 0.3s;
        user-select: none;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .beian {
    position: absolute;
    left: 50%;
    bottom: 1em;
    transform: translateX(-50%);
    font-size: 12px;
    color: #666;
    user-select: none;
  }
}

@media (max-width: 800px) {
  section {
    display: flex;
    padding: 30px 20px 0px;
    font-size: 14px;
    p {
      width: auto;
      max-width: auto;
      min-width: auto;
    }
    .name {
      font-size: 1.5em;
      padding: 0 0.2em;
    }
    .title {
      font-size: 18px;
      color: #333;
      margin: 0;
    }
    .beian {
      position: relative;
      margin-top: auto;
      text-align: center;
      padding-top: 30px;
    }
  }
}
</style>
