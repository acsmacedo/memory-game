<template>
  <section class="orientation">
    <div>
      <i class="las la-mobile"></i>
      <h1>Coloque o dispositivo na posição paisagem!</h1>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'OrientationViewport'
  }
</script>

<style lang="scss" scoped>
  .orientation {
    width: 100%;
    height: 100%;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    i {
      font-size: 8em;
      color: var(--background);
      transform: rotate(-90deg);
    }
    h1 {
      color: var(--background);
      margin-bottom: 2rem;
    }
    @media (orientation: landscape) {
      display: none;
    }
  }
</style>
