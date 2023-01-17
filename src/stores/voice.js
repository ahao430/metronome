import { defineStore } from 'pinia'
import {DEF_VOICE, VOICE_OPTIONS} from '@/constants'
import {ref, computed} from 'vue'

export const useVoiceStore = defineStore('voice', () => {
  const voice = ref(DEF_VOICE)
  const voiceText = computed(() => {
    return VOICE_OPTIONS.find(item => item.value === voice.value)?.label
  })

  function setVoice(val) {
    voice.value = val
  }

  return { voice, voiceText, setVoice }
})