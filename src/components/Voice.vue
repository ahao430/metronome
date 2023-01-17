<script setup>
// 速度 bpm
import {ref} from 'vue'
import {useVoiceStore} from "@/stores/voice"
import {DEF_VOICE, VOICE_OPTIONS} from '@/constants'

const store = useVoiceStore()
const {setVoice} = store
const show = ref(false)
const confirm = ( { selectedValue, selectedOptions })=>{
  setVoice(selectedValue[0])
}


</script>

<template>
  <section class="section-voice">
    <nut-cell title="" :desc="store.voiceText" @click="()=>{show = true}"></nut-cell>
  </section>  
  <nut-picker
    v-model:visible="show"
    :columns="VOICE_OPTIONS.map(item => ({
      text: item.label,
      value: item.value,
    }))"
    title="选择声音"
    @confirm="confirm"
  ></nut-picker>
</template>  

<style lang="scss" scoped>
.section-voice{
  flex: 0 0 auto;
  width: 200px;
  padding: 20px;
}
</style>