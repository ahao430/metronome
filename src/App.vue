<script setup lang="ts">
import Speed from "./components/Speed.vue";
import Rhythm from "./components/Rhythm.vue";
import Play from "./components/Play.vue";

</script>

<template>
  <p class="title">节拍器</p>
  <Rhythm></Rhythm>
  <Speed></Speed>
  <Play></Play>
</template>

<style lang="scss" scoped>
.title{
  text-align: center;
  color: var(--color-white);
  padding: 20px 0;
}
</style>