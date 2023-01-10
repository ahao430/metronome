<script setup>
import {useSpeedStore} from "@/stores/speed"
import {MIN_SPEED, MAX_SPEED, DEF_SPEED} from '@/constants'
import { storeToRefs } from 'pinia'

const store = useSpeedStore()
const {increment, decrement, setSpeed} = store

</script>

<template>
  <section class="section-speed">
    <div class="row range">
      <span class="section-title">速度:</span>
      <span>{{MIN_SPEED}}</span>
      <input type="range" :min="MIN_SPEED" :max="MAX_SPEED" :value="store.speed" @change="e => setSpeed(e.target.value)">
      <span>{{MAX_SPEED}}</span>
    </div>
    <div class="row input">
      <span class="btn btn-minus" @click="decrement(10)">-10</span>
      <span class="btn btn-minus" @click="decrement(1)">-1</span>
      <input type="number" :value="store.speed" @change="e => setSpeed(e.target.value)">
      <span class="btn btn-add" @click="increment(1)">+1</span>
      <span class="btn btn-add" @click="increment(10)">+10</span>
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
      width: 300px;
    }
    span{
      display: inline-block;
      /* background: var(--color-grey); */
      margin: 0 10px;
      padding: 10px;
      border-radius: 6px;
      color: var(--color-black);
    }
  }
  &.input{
    display: flex;
    justify-content: center;
    align-items: center;
    input{ 
      flex: 0 0 auto;
      width: 250px;
      font-size: 40px;
      text-align: center;
      height: 100px;
    }
    .btn{
      flex: 0 0 auto;
      display: inline-block;
      background: var(--color-grey);
      margin: 0 10px;
      padding: 10px;
      border-radius: 6px;
      color: var(--color-white);
      min-width: 100px;
      height: 100px;
      text-align: center;
    }
  }
  &.preview{

  }
}
</style>