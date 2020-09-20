<template>
  <div id="app">
    <OrientationViewport />
    <transition name="transition" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import OrientationViewport from './components/orientation/OrientationViewport'
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'App',
    components: {
      OrientationViewport
    },
    computed: {
      ...mapState(['ranking', 'currentGame'])
    },
    methods: {
      ...mapMutations(['loadRanking', 'loadUser', 'loadLevel'])
    },
    watch: {
      ranking: {
        handler: function (newValue) { 
          const ranking = JSON.stringify(newValue);
          window.localStorage.setItem('ranking', ranking);
        },
        deep: true
      },
      currentGame: {
        handler: function (newValue) { 
          window.localStorage.setItem('user', newValue.user);
          window.localStorage.setItem('level', newValue.level);
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
      if (window.localStorage.getItem('user')) {
        const user = window.localStorage.getItem('user');
        this.loadUser(user);
      }
      if (window.localStorage.getItem('level')) {
        const level = window.localStorage.getItem('level');
        this.loadLevel(level);
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
    color: var(--color);
  }

  body {
    --color: #35328C;
    --background: #CFCEF2;
    --background2: #8F8EB2;
    --disabled: #9592EC;
  }

  body {
    margin: 0;
    background-color: var(--background);
    &.bingo {
      background-color: var(--background2);
    }
  }

  h1, h2, p {
    margin: 0;
  }

  ul, li {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  input[type="text"] {
    background-color: transparent;
    border: none;
    outline: none;
    &::placeholder {
      opacity: 1;
    }
  }

  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 16px;
    border: 0.0625rem solid #FFFFFF;
    border-radius: 1000rem;
    background: #FFFFFF;
    margin: 0;
    margin-right: 0.5rem;
    outline: none;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    &:after {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      background: var(--color);
      border-radius: 1000rem;
      position: relative;
      top: calc(50% - (16px / 2));
      left: calc(50% - (16px / 2));
      opacity: 0;
      transform: scale(0.4);
    }
    &:checked {
      border: 0.0625rem solid var(--color);
      background: var(--color);
    }
    &:not(.switch) {
      width: 16px;
      &:after {
        opacity: 0;
      }
      &:checked {
        &:after { 
          opacity: 1;
        }
      }
    }
  }

  #app {
    width: 100%;
    min-height: 100vh;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
  }

  .transition-enter, .transition-leave-to {
   opacity: 0;
  }
  
  .transition-enter-active { 
    transition: opacity 1s linear;
  }

  .transition-leave-active { 
    transition: opacity 0.5s ease-in;
  }  
</style>
