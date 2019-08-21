<template>
  <div class="test">
    <About></About>
    {{ obj }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import About from './About.vue'
export default Vue.extend({
  components: { About },
  data() {
    return {
      list: [{ a: 3 }],
      obj: { a: { b: 1 }, c: 23 }
    }
  }
})
</script>
