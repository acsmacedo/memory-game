<template>
  <div id="app">
    <OrientationViewport />
    <InstructionsGame v-if="!gameOn" />
    <PanelGame />
  </div>
</template>

<script>
  import OrientationViewport from './components/OrientationViewport'
  import PanelGame from './components/PanelGame'
  import InstructionsGame from './components/InstructionsGame'
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'App',
    components: {
      OrientationViewport,
      PanelGame,
      InstructionsGame
    },
    computed: {
      ...mapState(['gameOn', 'ranking'])
    },
    methods: {
      ...mapMutations(['loadRanking'])
    },
    watch: {
      ranking: {
        handler: function (newValue) { 
          const ranking = JSON.stringify(newValue);
          window.localStorage.setItem('ranking', ranking);
        },
        deep: true
      }
    },
    created() {
      if(window.localStorage.getItem('ranking')) {
        const json = window.localStorage.getItem('ranking');
        const ranking = JSON.parse(json);
        this.loadRanking(ranking);
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600;800&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    text-transform: lowercase;
    letter-spacing: 0.08em;
    color: #35328C;
  }

  body {
    margin: 0;
    background-color: #CFCEF2;
  }

  h1, h2, p {
    margin: 0;
  }

  ul, li {
    padding: 0;
    list-style: none;
  }

  #app {
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
  }  
</style>
