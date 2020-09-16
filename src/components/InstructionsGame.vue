<template>
  <section class="instructions">
    <InstructionsTitle />
    
    <InstructionsForm />
    
    <InstructionsRanking />
  </section>
</template>

<script>
import InstructionsTitle from './Instructions/InstructionsTitle'
import InstructionsForm from './Instructions/InstructionsForm'
import InstructionsRanking from './Instructions/InstructionsRanking'

export default {
  name: 'InstructionsGame',
  components: {
    InstructionsTitle,
    InstructionsForm,
    InstructionsRanking
  }
}
</script>

<style lang="scss" scoped>
  .instructions {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EFEFEF;
  }
</style>