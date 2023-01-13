import { defineStore } from 'pinia'
import {BEAT_OPTIONS, DEF_BEAT} from '@/constants'
import {ref, computed} from 'vue'
import {useRhythmStore} from "@/stores/rhythm"
import {useBeatStore} from "@/stores/beat"
import {useSpeedStore} from "@/stores/speed"

export const usePlayStore = defineStore('play', () => {
  // const player = document.getElementById('audio1')
  // const player2 = document.getElementById('audio2')

  const player = new Audio('./audio/beat1.mp3')
  const player2 = new Audio('./audio/beat2.mp3')

  player.volumn = 1
  player2.volumn = 1

  const isPlaying = ref(false)
  const beatCount = ref(0)
  const rhythmCount = ref(0)
  const rhythmCircleStyle = ref('')

  const ONE_MINUTE = 60 * 1000

  let beat
  let speed
  let rhythm
  let rhythmRate
  let rhythmNotesLen
  let heavy = false
  let timer
  let timer2

  // const isIos = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)

  beat = useBeatStore().beat

  function play() {
    beatCount.value = 0
    rhythmCount.value = 0
    isPlaying.value = true
    playBeat()
  }
  function stop() {
    isPlaying.value = false
    beatCount.value = 0
    rhythmCount.value = 0
    player.currentTime = 0;
    player.pause()
    player2.currentTime = 0;
    player2.pause()
    rhythmCircleStyle.value = 'transform: scale(0); transition: none; opacity: 0;'
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    if (timer2) {
      clearTimeout(timer2)
      timer2 = null
    }
  }
  
  // 播放整个小节
  function playBeat () {
    if (!isPlaying.value) return false

    beat = useBeatStore().beat
    console.log('播放节拍：', beat)
    beatCount.value = 0
    heavy = true
    playRhythm()
  }
  
  // 播放整个节奏型(可能多拍)
  function playRhythm () {
    if (!isPlaying.value) return false

    rhythm = useRhythmStore().rhythm.value
    rhythmRate = useRhythmStore().rhythm.rate
    console.log('播放节奏型：', rhythm)

    rhythmNotesLen = 0
    rhythmCount.value = 0
    rhythm.forEach(item => {
      rhythmNotesLen += item.length
    })

    playNote()
  }
  // 播放单个音符位置，可能是空拍
  function playNote () {
    // 一个节奏型可能有多拍
    speed = useSpeedStore().speed
    // 调整播放倍速
      player.playbackRate = Math.max(1, Math.min(10, speed / rhythmRate))
      player2.playbackRate = player.playbackRate

    const rhythmItemIndex = beatCount.value % rhythm.length 
    // 播放音频
    const rhythmItem = rhythm[rhythmItemIndex]
    const note = rhythmItem[rhythmCount.value]
    console.log('播放音频：', 
      note ?
        (heavy ? '重' : '轻')
      : '空'
    )
    if (note) {
      // 播放
      if (heavy) {
        player.currentTime = 0;
        player.play()
        heavy = false
      } else {
        player2.currentTime = 0;
        player2.play()
      }
    }
    // 计算间隔时间
    const oneBeatTime = ONE_MINUTE / speed
    const rhythmNoteTime = oneBeatTime / rhythmItem.length
    
    // 定时器，播放下一个音符
    timer = setTimeout(() => {
      let newRhythmCount = rhythmCount.value + 1
      if (newRhythmCount >= rhythmItem.length) {
        if (newRhythmCount >= rhythmNotesLen) {
          // 新的节奏型
          newRhythmCount = 0
          rhythmCount.value = newRhythmCount
        } else {
          // 当前节奏型新的一拍
          rhythmCount.value = newRhythmCount
        }

        let newBeatCount = beatCount.value + 1
        if (newBeatCount >= beat[0]) {
          newBeatCount = 0
          // 新的节拍
          beatCount.value = newBeatCount
          playBeat()
        } else {
          beatCount.value = newBeatCount
          playRhythm()
        }
      } else {
        rhythmCount.value = newRhythmCount
        playNote()
      }
    }, rhythmNoteTime)

    // 呼吸样式
    if (note) {
      const styleTime = rhythmNoteTime * 0.8
      rhythmCircleStyle.value = `transform: scale(1.5); transition: all linear ${styleTime / 1000}s; opacity: 0.5;`
      timer2 = setTimeout(() => {
        rhythmCircleStyle.value = 'transform: scale(0); transition: none; opacity: 0;'
      }, styleTime)
    }
  }

  // TODO: 定时器逻辑准备放到web workers里

  return { isPlaying, play, stop, beatCount, rhythmCircleStyle}
})