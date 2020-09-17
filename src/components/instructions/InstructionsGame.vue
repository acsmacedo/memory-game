<template>
  <section class="instructions">
    <InstructionsGameTitle />
    <InstructionsGameForm />
  </section>
</template>

<script>
import InstructionsGameTitle from './InstructionsGameTitle'
import InstructionsGameForm from './InstructionsGameForm'

export default {
  name: 'InstructionsGame',
  components: {
    InstructionsGameTitle,
    InstructionsGameForm
  }
}
</script>

<style lang="scss" scoped>
  .instructions {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--background);
  }
</style>
