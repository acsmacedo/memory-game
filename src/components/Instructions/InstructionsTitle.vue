<template>
  <div class="instructions__title">
    <h1>Jogo da memória</h1>
    <p>Monstrinhos divertidos e coloridos para você se divertir, enquanto exercita seu cérebro com este incrível jogo da memória!</p>
  </div>
</template>

<script>
  export default {
    name: 'InstructionsTitle'
  }
</script>

<style lang="scss" scoped>
  .instructions__title {
    max-width: 500px;
    margin: 0 auto 2rem auto;
    text-align: center;
    h1 {
      font-size: 2.5em;
      font-weight: 800;
      margin-bottom: 1rem;
    }
  }
</style>
