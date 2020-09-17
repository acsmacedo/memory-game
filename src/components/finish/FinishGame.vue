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
    },
    mounted() {
      setTimeout(() => { this.$router.push('/') }, 4000);
    }
  }
</script>

<style lang="scss" scoped>
  .finish {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color);
    display: flex;
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
