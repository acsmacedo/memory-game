<template>
  <section class="panel"></section>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'PanelGame',
    computed: {
      ...mapState(['currentGame', 'validation'])
    },
    methods: {
      ...mapMutations(['validationChange', 'validationCompare', 'resetFinish', 'startGame']),
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
          imgEl.setAttribute('src', `/assets/img/monster-${img}.jpg`);
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
          el.addEventListener('click', ev => ev.stopPropagation());

          el.parentElement.addEventListener('click', ev => {
            el.parentElement.classList.toggle('invert');
            this.validationChange(ev);
            this.validationCompare();
          })
        })
      },
      removeImages() {
        const container = document.querySelector('.panel');
        container.innerHTML = '';
      }
    },
    watch: {
      validation: {
        handler: function (newValue) { 
          if (newValue.finish === true) { setTimeout(() => { this.$router.push('/finish') }, 1000); }
        },
        deep: true
      }
    },
    mounted() {
      this.insertImages();
      this.startGame();
    },
    destroyed() {
      this.removeImages();
      this.resetFinish();
    }
  }
</script>

<style lang="scss">
  .panel {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: calc(100vh - 2rem);
    width: 100%;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    position: relative;
    div {
      display: flex;
      position: relative;
      &.invert img {
        transform: rotateY(360deg);
        transition: transform 0.6s;
      }
      &.invert span {
        transform: rotateY(180deg);
        transition: transform 0.6s;
      }
    }
    span {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      width: calc(100% - 1rem);
      height: calc(100% - 1rem);
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotateY(360deg);
      transition: transform 0.6s;
      background-color: var(--disabled);
      backface-visibility: hidden;
      cursor: pointer;
      i {
        font-size: 2.5em;
        margin-left: 0.1em;
        @media (min-width: 900px) {
          font-size: 4em;
        }
      }
    }
    img {
      padding: 0.5rem;
      max-width: calc((100vw - 2rem) / 6);
      max-height: calc((100vh - 2rem) / 4);
      object-fit: cover;
      object-position: center;
      backface-visibility: hidden;
      transform: rotateY(180deg);
      transition: transform 0.6s;
      overflow: hidden;
      cursor: not-allowed;
    }
  }
</style>
