<template>
  <div>teste</div>
  <DummyComponent />
</template>

<script lang="ts">
  import { Vue, Options } from 'vue-class-component'
  import DummyComponent from './DummyComponent.vue'

  @Options({
    components: {
      DummyComponent,
    },
  })
  export default class App extends Vue {}
</script>

<style>
  body {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #app {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>
