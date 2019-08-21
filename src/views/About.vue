<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    number: { type: Number, required: true },
    size: { type: String, required: true },
    type: String
  },
  data() {
    return {
      list: [{ a: 1 }, { a: 2 }]
    }
  },
  methods: {
    submit(message: string) {
      this.list.push({ a: 1 })
    },
    async getData(id: number) {}
  }
})
</script>
