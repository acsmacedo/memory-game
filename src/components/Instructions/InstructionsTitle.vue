<template>
  <div class="instructions__title">
    <h1>Jogo da memória</h1>
    <p>Monstrinhos coloridos para se divertir, enquanto você exercita seu cérebro com este jogo da memória!</p>
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
    p {
      line-height: 1.35em;
    }
  }
</style>
