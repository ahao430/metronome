<script setup>
// 播放
import {usePlayStore} from "@/stores/play"
import {useBeatStore} from "@/stores/beat"

const beatStore = useBeatStore()
const store = usePlayStore()
const {play, stop} = store

</script>

<template>
  <section class="section-play">
    <!-- 四个小圆圈，预览节拍 -->
    <div class="preview">
      <div class="ul">
        <div :class="['li', {active: store.isPlaying && index === store.beatCount}]" v-for="(item,index) in beatStore.beatTotal" :key="item"></div>
      </div>
    </div>
    <!-- TODO: 给按钮按照节奏型加上呼吸灯动效 -->
    <div class="btn-play">
      <nut-icon v-if="store.isPlaying" name="play-stop" size="5.5rem" @click="stop"></nut-icon>
      <nut-icon v-else name="play-start" size="6rem" @click="play"></nut-icon>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
.btn-play{
  width: 750px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      &.active{
        background: var(--color-orange)
      }
    }
  }
}
</style>