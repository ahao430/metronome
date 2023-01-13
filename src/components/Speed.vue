<script setup>
// 速度 bpm
import {useSpeedStore} from "@/stores/speed"
import {MIN_SPEED, MAX_SPEED, DEF_SPEED} from '@/constants'
import { storeToRefs } from 'pinia'

const store = useSpeedStore()
const {increment, decrement, setSpeed} = store

</script>

<template>
  <section class="section-speed">
    <div class="row input">
      <nut-button class="btn btn-minus" @click="decrement(10)">-10</nut-button>
      <nut-button class="btn btn-minus" @click="decrement(1)">-1</nut-button>
      <span class="title">BPM: </span>
      <input type="number" :value="store.speed" @change="e => setSpeed(e.target.value)">
      <nut-button class="btn btn-add" @click="increment(1)">+1</nut-button>
      <nut-button class="btn btn-add" @click="increment(10)">+10</nut-button>
      <!-- <nut-inputnumber v-model="store.speed" :min="MIN_SPEED" :max="MAX_SPEED" /> -->
    </div>
    <div class="row range">
      <!-- <span class="section-title">BPM:</span> -->
      <span>{{MIN_SPEED}}</span>
      <input type="range" :min="MIN_SPEED" :max="MAX_SPEED" :value="store.speed" @change="e => setSpeed(e.target.value)">
      <span>{{MAX_SPEED}}</span>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
.section-speed{
  padding: 10px;
  background: var(--color-orange);
  margin-bottom: 10px;
}
.section-title{
  white-space: nowrap;
}
.row{
  width: 100%;
  overflow: hidden;
  &.range{
    display: flex;
    justify-content: center;
    align-items: center;
    input{ 
      flex: 0 0 auto;
      width: 500px;
    }
    span{
      display: inline-block;
      /* background: var(--color-grey); */
      margin: 0 10px;
      padding: 10px;
      border-radius: 6px;
      color: var(--color-grey2);
      font-size: 40px;
    }
  }
  &.input{
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
      color: var(--color-black);
      margin: 20px 0 0 20px;
      font-size: 40px;
      display: inline-block;
    }
    input{ 
      flex: 0 0 auto;
      width: 130px;
      font-size: 50px;
      text-align: center;
      height: 100px;
      background: transparent;
      border: none;
      outline: none;
      margin: 10px 10px 0 0;
    }
    .btn{
      flex: 0 0 auto;
      display: inline-block;
      background: var(--color-grey);
      margin: 0 10px;
      padding: 10px;
      border-radius: 6px;
      color: var(--color-white);
      min-width: 80px;
      height: 80px;
      text-align: center;
    }
  }
  &.preview{

  }
}
</style>