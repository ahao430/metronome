import { defineStore } from 'pinia'
import {BEAT_OPTIONS, DEF_BEAT} from '@/constants'
import {ref, computed} from 'vue'

export const useBeatStore = defineStore('beat', () => {
  const beat = ref(DEF_BEAT)
  const beatText = computed(() => {
    return beat.value.join('/')
  })
  const beatTotal = computed(() => {
    return beat.value[0]
  })

  function setBeat(val) {
    beat.value = val
  }

  return { beat, beatText, setBeat, beatTotal }
})