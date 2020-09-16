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

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    OrientationViewport,
    PanelGame,
    InstructionsGame
  },
  computed: {
    ...mapState(['gameOn'])
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600;800&display=swap');
  * {
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
    text-transform: lowercase;
    letter-spacing: 0.05em;
  }
  body {
    margin: 0;
  }
  h1, h2, p {
    margin: 0;
  }
  ul, li {
    padding: 0;
    list-style: none;
  }

  #app {
    display: flex;
    padding: 1rem;
  }
  .panel {

  }
  .instructions {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    padding: 1rem;
    background-color: #FFF;

  }

  
</style>
