<template>
  <form class="instructions__form" v-on:submit.prevent="startGame">
    <input type="text" id="user" placeholder="Digite o seu nome..." autocomplete="off" spellcheck="false" required>
    <div class="instructions__form__level">
      <span>
        <input type="radio" name="level" id="easy" value="easy" checked>
        <label for="easy">Fácil</label>
      </span>
      <span>
        <input type="radio" name="level" id="regular" value="regular">
        <label for="regular">Regular</label>
      </span>
      <span>
        <input type="radio" name="level" id="hard" value="hard">
        <label for="hard">Difícil</label>
      </span>    
    </div>
    <div class="instructions__form__links">
      <button type="submit" v-on:click="dispatchStartGame">Começar</button>
      <router-link to="/ranking">Ranking</router-link>
    </div>
  </form>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'InstructionsGameForm',
    methods: {
      ...mapMutations(['startGame']),
      dispatchStartGame() {
        this.$router.push('/panel');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .instructions__form {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="text"] {
      width: 100%;
      border-bottom: 0.0625rem solid var(--color);
      text-align: center;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      font-size: 1em;
      &::placeholder {
        color: var(--disabled);
      }
    }

    &__level {
      margin-bottom: 1rem;
      display: flex;
      span {
        display: flex;
        align-items: center;
        margin: 0 0.5rem;
      }
    }
    
    &__links {
      display: flex;
      button, a { 
        border: 0.0625rem solid var(--color);
        border-radius: 1000rem;
        padding: 0.5rem 1.5rem 0.75rem 1.5rem;
        font-size: 0.8em;
        font-weight: 800;
      }
      button {
        background-color: var(--color);
        color: #FFFFFF;
        cursor: pointer;
      }
      a {
        color: var(--color);
        margin-left: 1rem;
      }
    }
  }
</style>
