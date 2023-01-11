<script setup>
// 节奏型
import {ref, watch} from 'vue'
import {useRhythmStore} from "@/stores/rhythm"
import {RHYTHM_OPTIONS, DEF_RHYTHM} from '@/constants'
import { storeToRefs } from 'pinia'

const store = useRhythmStore()
const {setRhythm} = store
const show = ref(false)
const confirm = ( { selectedValue, selectedOptions })=>{
  setRhythm(selectedValue[0])
}

</script>

<template>
  <section class="section-rhythm" @click="()=>{show = true}">
    <nut-cell title="节奏: " :desc="store.rhythm.name" >
    </nut-cell>
    <img :src="store.rhythm.img" alt="" />
  </section>  
  <nut-picker
    v-model:visible="show"
    :columns="RHYTHM_OPTIONS.map(item => ({
      text: item.name,
      value: item.id,
    }))"
    title="选择节奏"
    @confirm="confirm"
  ></nut-picker>
</template>

<style lang="scss" scoped>
.section-rhythm{
  flex: 1;
  display: flex;
  align-items: center;
  img{
    width: 90px;
    height: 90px;
    margin: 0 20px;
  }
}
</style>