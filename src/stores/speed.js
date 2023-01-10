import { defineStore } from 'pinia'
import {MIN_SPEED, MAX_SPEED, DEF_SPEED} from '@/constants'
import {ref} from 'vue'

export const useSpeedStore = defineStore('speed', () => {
  const speed = ref(DEF_SPEED)
  function increment(step = 1) {
    const nextStep = speed.value + step
    speed.value = nextStep > MAX_SPEED ? MAX_SPEED : nextStep
  }
  function decrement(step = 1) {
    const nextStep = speed.value - step
    speed.value = nextStep < MIN_SPEED ? MIN_SPEED : nextStep
  }
  function setSpeed(val) {
    val = Number(val)
    speed.value = val > MAX_SPEED ? MAX_SPEED : 
      val < MIN_SPEED ? MIN_SPEED : val
  }

  return { speed, increment, decrement, setSpeed }
})