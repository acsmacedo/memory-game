<template>
  <div class="instructions__ranking">
  <h2>Ranking</h2>
    <nav>
      <ul>
        <li>Fácil</li>
        <li>Regular</li>
        <li>Difícil</li>
      </ul>
    </nav>
    <InstructionsRankingTable />
  </div>
</template>

<script>
import InstructionsRankingTable from './InstructionsRankingTable'
export default {
  name: 'InstructionsRanking',
  components: {
    InstructionsRankingTable
  }
}
</script>

<style lang="scss" scoped>
  .instructions__ranking {
    max-width: 350px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ul {
      display: flex;
      justify-content: center;
    }
    li {
      padding: 0.5rem 1.5rem;
    }
  }
</style>