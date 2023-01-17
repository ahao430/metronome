<script setup>
// 播放
import {ref, watch} from 'vue'
import {usePlayStore} from "@/stores/play"
import {useBeatStore} from "@/stores/beat"
import {useRhythmStore} from "@/stores/rhythm"
import {useSpeedStore} from "@/stores/speed"

const beatStore = useBeatStore()
const rhythmStore = useRhythmStore()
const speedStore = useSpeedStore()
const store = usePlayStore()
const {play, stop, restart} = store

watch([
  () => beatStore.beat, 
  () => rhythmStore.rhythm, 
  () => speedStore.speed
], () => {
  console.log('restart')
  restart()
})

</script>

<template>
  <section class="section-play">
    <!-- 四个小圆圈，预览节拍 -->
    <div class="preview">
      <div class="ul">
        <div :class="['li', {active: store.isPlaying && index === store.beatCount}]" v-for="(item,index) in beatStore.beatTotal" :key="item"></div>
      </div>
    </div>
    <div class="rhythm-circle" :style="store.rhythmCircleStyle"></div>
    <div class="btn-play">
      <nut-icon v-if="store.isPlaying" name="play-stop" size="5.5rem" @click="stop"></nut-icon>
      <nut-icon v-else name="play-start" size="6rem" @click="play"></nut-icon>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
.btn-play{
  position: relative;
  z-index: 2;
  width: 750px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rhythm-circle{
  position: absolute;
  z-index: 1;
  width: 500px;
  height: 500px;
  left: 125px;
  border-radius: 50%;
  border: 3px solid var(--color-orange);
  transform: scale(0);
  opacity: 0.5;
  transition: none;
}
.preview{
  .ul{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    .li{
      width: 60px;
      height: 60px;
      background: var(--color-grey);
      border-radius: 50%;
      margin: 0 10px;
      transition: all ease 0.1s;
      &.active{
        background: var(--color-orange);
      }
    }
  }
}
</style>