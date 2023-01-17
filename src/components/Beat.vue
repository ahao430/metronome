<script setup>
// 节拍
import {ref} from 'vue'
import {useBeatStore} from "@/stores/beat"
import {BEAT_OPTIONS, DEF_BEAT} from '@/constants'
import {MIN_SPEED, MAX_SPEED, DEF_SPEED} from '@/constants'

const store = useBeatStore()
const {setBeat} = store
const show = ref(false)
const confirm = ( { selectedValue, selectedOptions })=>{
  setBeat(selectedValue[0].split('/').map(i => Number(i)))
}

</script>

<template>
  <section class="section-beat">
    <!-- <select :value="store.beat" @change="val => setBeat(e.target.value)">
      <option v-for="option in BEAT_OPTIONS" :key="option" :value="option">{{option.join('/')}}</option>
    </select> -->
    <nut-cell title="" :desc="store.beatText" @click="()=>{show = true}"></nut-cell>
  </section>  
  <nut-picker
    v-model:visible="show"
    :columns="BEAT_OPTIONS.map(item => ({
      text: item.join('/'),
      value: item.join('/'),
    }))"
    title="选择拍子"
    @confirm="confirm"
  ></nut-picker>
</template>

<style lang="scss" scoped>
.section-beat{
  flex: 0 0 auto;
  width: 200px;
  padding: 20px;
  text-align: center;
}
</style>