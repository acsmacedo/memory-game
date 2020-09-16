<template>
  <section class="instructions">
    <InstructionsTitle />
    <InstructionsForm />
  </section>
</template>

<script>
import InstructionsTitle from './Instructions/InstructionsTitle'
import InstructionsForm from './Instructions/InstructionsForm'

export default {
  name: 'InstructionsGame',
  components: {
    InstructionsTitle,
    InstructionsForm
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
