<template>
  <section class="orientation">
    <h1>Coloque o dispositivo na posição paisagem</h1>
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
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #CCC;
    z-index: 100;
    @media (orientation: landscape) {
      display: none;
    }
  }
</style>