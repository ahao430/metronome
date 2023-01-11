import { defineStore } from 'pinia'
import {RHYTHM_OPTIONS, DEF_RHYTHM} from '@/constants'
import {ref, computed} from 'vue'

export const useRhythmStore = defineStore('rhythm', () => {
  const rhythmId = ref(DEF_RHYTHM)
  const rhythm = computed(() => {
    return RHYTHM_OPTIONS.find(item => item.id === rhythmId.value) || {}
  })

  function setRhythm(val) {
    rhythmId.value = val
  }

  return { rhythmId, rhythm, setRhythm }
})