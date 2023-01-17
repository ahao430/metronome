<script setup lang="ts">
import Speed from "./components/Speed.vue";
import Rhythm from "./components/Rhythm.vue";
import Beat from "./components/Beat.vue";
import Play from "./components/Play.vue";
import Voice from "./components/Voice.vue";

</script>

<template>
  <p class="title">节拍器</p>
  <main>
    <Speed></Speed>
    <div class="flex">
      <Voice></Voice>
      <Beat></Beat>
      <Rhythm></Rhythm>
    </div>
    <Play></Play>
  </main>
</template>

<style lang="scss" scoped>
.title{
  text-align: center;
  color: var(--color-white);
  padding: 20px 0;
}
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>