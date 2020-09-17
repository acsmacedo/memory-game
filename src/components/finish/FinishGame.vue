<template>
  <section class="finish">
    <h1>Parabéns, você terminou o jogo!</h1>
    <p>Seu tempo foi de {{ timeMinutes(ranking[ranking.length - 1].time) }}</p>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'FinishGame',
    computed: {
      ...mapState(['ranking'])
    },
    methods: {
      timeMinutes(value) {
        const time = value;
        const s = time % 60;
        const m = ((time - s) % 3600) / 60;
        const h = ((time - s - (m * 60)) % 86400) / 3600;

        const s1 = !m && !h ? `${s}s` : s > 0 && s < 10 ? `0${s}s` : s >= 10 ? `${s}s` : h || m ? '00s' : '0s';
        const m1 = !h && m != 0 ? `${m}m ` : h && m > 0  && m < 10 ? `0${m}m ` : h && m >= 10 ? `${m}m ` : h ? '00m ' : '';
        const h1 = h != 0 ? `${h}h ` : h > 0  && h < 10 ? `0${h}h ` : h >= 10 ? `${h}h ` : '';
    
        return `${h1}${m1}${s1}`;
      }
    },
    mounted() {
      setTimeout(() => { this.$router.push('/') }, 4000);
    }
  }
</script>

<style lang="scss" scoped>
  .finish {
    width: 100%;
    height: 100vh;
    background-color: var(--color);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    text-align: center;
    h1 {
      color: var(--background);
      max-width: 300px;
      margin: 0 auto 1.5rem auto;
      font-size: 2.2em;
      font-weight: 800;
      line-height: 1.2em;
    }
    p {
      color: var(--background);
      max-width: 300px;
      margin: 0 auto 1.5rem auto;
      font-size: 1.5em;
    }
  }
</style>
