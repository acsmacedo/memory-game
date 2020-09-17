<template>
  <div class="instructions__title">
    <h1>Jogo da memória</h1>
    <p>Monstrinhos coloridos para se divertir, enquanto você exercita seu cérebro com este jogo da memória!</p>
  </div>
</template>

<script>
  export default {
    name: 'InstructionsGameTitle'
  }
</script>

<style lang="scss" scoped>
  .instructions__title {
    max-width: 500px;
    margin: 0 auto 1.5rem auto;
    text-align: center;
    h1 {
      font-size: 2.2em;
      font-weight: 800;
      margin-bottom: 0.5rem;
    }
    p {
      line-height: 1.35em;
    }
  }
</style>
