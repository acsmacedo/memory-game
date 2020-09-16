<template>
  <div class="instructions__title">
    <h1>Jogo da memória</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci soluta quo odio excepturi fugit!</p>
  </div>
</template>

<script>
export default {
  name: 'InstructionsTitle'
}
</script>

<style lang="scss" scoped>
  .instructions__title {
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 2rem;
    text-align: center;
    h1 {
      text-transform: lowercase;
      margin-bottom: 0.5rem;
    }
  }
</style>