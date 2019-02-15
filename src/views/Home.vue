<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>{{ message2 }}</p>
    <div>
      <input v-model="message2">
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Lol Stahhhp",
      message2: "haha no"
    };
  },
  created: function() {},
  methods: {}
};
</script>