import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', () => {
  const isExample = ref(false)
  function show() {
    isExample.value = true
  }
  function hide() {
    isExample.value = false
  }

  return { isExample, show, hide }
})
