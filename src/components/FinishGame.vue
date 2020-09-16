<template>
  <section class="finish">
    <h1>Parabéns, você terminou o jogo!</h1>
    <p>Seu tempo foi de {{ timeMinutes }}</p>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'FinishGame',
    computed: {
      ...mapGetters(['timeMinutes'])
    }
  }
</script>

<style lang="scss" scoped>

  .finish {
    width: 100%;
    height: 100%;
    background-color: var(--color);
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    h1 {
      color: var(--background);
      font-weight: 800;
    }
    p {
      color: var(--background);
    }
  }
</style>