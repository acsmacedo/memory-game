<template>
  <div class="ranking">
    <h1>Ranking</h1>

    <div class="ranking__level">
      <span>
        <input type="radio" name="level" id="easy" v-on:change="rankingViewChange" value="easy" checked>
        <label for="easy">Fácil</label>
      </span>
      <span>
        <input type="radio" name="level" id="regular" v-on:change="rankingViewChange" value="regular">
        <label for="regular">Regular</label>
      </span>
      <span>
        <input type="radio" name="level" id="hard" v-on:change="rankingViewChange" value="hard">
        <label for="hard">Difícil</label>
      </span>    
    </div>

    <RankingTable :table="rankingViewTable" />
    <div>
      <router-link to="/">Voltar</router-link>
      <button v-on:click="rankingClear">Apagar ranking</button>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import RankingTable from './RankingGameTable'

export default {
  name: 'InstructionsRanking',
  components: {
    RankingTable
  },
  computed: {
    ...mapGetters(['rankingViewTable'])
  },
  methods: {
    ...mapMutations(['rankingViewChange', 'rankingViewReset', 'rankingClear'])
  },
  destroyed() {
    this.rankingViewReset();
  }
}
</script>

<style lang="scss" scoped>
  .ranking {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &__level {
      margin-bottom: 1rem;
      display: flex;
      span {
        display: flex;
        align-items: center;
        margin: 0 0.75rem;
      }
    }

    h1 {
      font-size: 2.2em;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    a, button {
      color: var(--color);
      border: 0.0625rem solid var(--color);
      border-radius: 1000rem;
      padding: 0.5rem 1.5rem 0.6rem 1.5rem;
      font-size: 0.8em;
      font-weight: 800;
      margin-top: 1.25rem;
    }

    button {
      margin-left: 1rem;
    }
  }
</style>