<template>
  <section class="panel">
    
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PanelGame',
  computed: {
    ...mapState(['currentGame', 'gameOn'])
  },
  methods: {
    insertImages() {
      const level = this.currentGame.level;
      const quantity = level === 'easy' ? 8 : level === 'regular' ? 10 : 12;
      const images = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
      const divTemp = document.createElement('div');
      const container = document.querySelector('.panel');

      for (let i = 0; i < quantity; i++) {
        const imgEl = document.createElement('img');
        const divContainer = document.createElement('div');
        const span = document.createElement('span');
        const color = (i + 1) % 4;
        const random = Math.floor(Math.random() * (images[color].length - 0) ) + 0;
        const img = images[color][random];

        images[color].splice(random, 1);
        imgEl.setAttribute('src', `/monster-${img}.jpg`);
        imgEl.classList.add('img');
        imgEl.classList.add(`monster-${img}`);
        span.innerText = '?';
  
        divContainer.appendChild(span);
        divContainer.appendChild(imgEl);
        const imgElClone = divContainer.cloneNode(true);
        divTemp.appendChild(divContainer);
        divTemp.appendChild(imgElClone);
      }
      
      for (let i = 0; i < divTemp.children.length;) {
        const random = Math.floor(Math.random() * (divTemp.children.length - 0) ) + 0;
        const imgEl = divTemp.removeChild(divTemp.children[random]);
        container.appendChild(imgEl);
      }

      const img = document.querySelectorAll('img');

      img.forEach(el => {
        const parent = el.parentElement;
        parent.addEventListener('click', () => {
          parent.classList.toggle('invert');
        })
      })
    },
    removeImages() {
      const container = document.querySelector('.panel');
      container.innerHTML = '';
    }
  },
  watch: {
    gameOn() {
      if (this.gameOn) {
        this.insertImages();
      } else {
        this.removeImages();
      }
    }
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
      background-color: #CCC;
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
    }
  }
</style>