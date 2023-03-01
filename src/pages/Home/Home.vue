<template>
  <img src="@/assets/img/voltk-logo.svg" alt="" height="300" width="" />
  <h1>Bem-vindo</h1>
  <p>
    Este é um template padrão, usado para a construção de novos projetos da
    Voltk para usar basta:
  </p>
  <ul>
    <li>1 - Altere a porta `vite.config.ts`</li>
    <li>2 - Altere o nome em `index.html` e em `package.json`</li>
  </ul>

  <p><b>Seja feliz.</b></p>
</template>
<script lang="ts">
  import { Vue, Options } from 'vue-class-component'
  @Options({
    components: {},
  })
  export default class Home extends Vue {}
</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 28px;
  }
</style>
