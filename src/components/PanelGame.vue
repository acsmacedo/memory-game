<template>
  <section class="panel"></section>
</template>

<script>
  export default {
    name: 'PanelGame'
  }
</script>

<style lang="scss">
  .panel {
    display: none;
    flex-wrap: wrap;
    flex-direction: column;
    height: calc(100vh - 2rem);
    width: 100%;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    opacity: 0;
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
    }
  }
</style>
