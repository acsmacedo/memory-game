<template>
  <div id="app">
    <OrientationViewport />
    <transition name="transition" mode="out-in">
      <InstructionsGame v-if="!gameOn" />
    </transition>
    <PanelGame />
    <FinishGame />
  </div>
</template>

<script>
  import OrientationViewport from './components/OrientationViewport'
  import PanelGame from './components/PanelGame'
  import InstructionsGame from './components/InstructionsGame'
  import FinishGame from './components/FinishGame'
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'App',
    components: {
      OrientationViewport,
      PanelGame,
      InstructionsGame, 
      FinishGame
    },
    computed: {
      ...mapState(['gameOn', 'ranking', 'currentGame'])
    },
    methods: {
      ...mapMutations(['loadRanking', 'validationChange', 'validationCompare']),
      insertImages() {
        const level = this.currentGame.level;
        const quantity = level === 'easy' ? 8 : level === 'regular' ? 10 : 12;
        const images = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
        const divTemp = document.createElement('div');
        const container = document.querySelector('.panel');

        for (let i = 0; i < quantity; i++) {
          const imgEl = document.createElement('img');
          const spanEl = document.createElement('span');
          const divEl = document.createElement('div');
          const color = (i + 1) % 4;
          const random = Math.floor(Math.random() * (images[color].length - 0) ) + 0;
          const img = images[color][random];

          images[color].splice(random, 1);
          imgEl.setAttribute('src', `/monster-${img}.jpg`);
          imgEl.classList.add(`monster-${img}`);
          spanEl.innerHTML = '<i class="las la-question"></i>';
          divEl.appendChild(spanEl);
          divEl.appendChild(imgEl);

          const divElClone = divEl.cloneNode(true);
          divTemp.appendChild(divEl);
          divTemp.appendChild(divElClone);
        }
        
        for (let i = 0; i < divTemp.children.length;) {
          const random = Math.floor(Math.random() * (divTemp.children.length - 0) ) + 0;
          const divEl = divTemp.removeChild(divTemp.children[random]);
          container.appendChild(divEl);
        }

        const img = document.querySelectorAll('img');

        img.forEach(el => {
          el.addEventListener('click', ev => {
            ev.stopPropagation();
          })

          el.parentElement.addEventListener('click', ev => {
            el.parentElement.classList.toggle('invert');
            this.validationChange(ev);
            this.validationCompare(ev);
          })
        })
      },
      removeImages() {
        const container = document.querySelector('.panel');
        container.innerHTML = '';
      }
    },
    watch: {
      ranking: {
        handler: function (newValue) { 
          const ranking = JSON.stringify(newValue);
          window.localStorage.setItem('ranking', ranking);
        },
        deep: true
      },
      gameOn() {
        const panel = document.querySelector('.panel');
        if (this.gameOn) {
          this.insertImages();
          setTimeout(() => {
            panel.style.display = 'flex';
            panel.style.opacity = 1;
          }, 600)
        } else {
          this.removeImages();
          panel.style.display = 'none';
          panel.style.opacity = 0;
        }
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

  #app {
    width: 100%;
    height: 100vh;
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
