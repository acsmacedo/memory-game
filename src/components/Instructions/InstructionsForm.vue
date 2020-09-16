<template>
  <form action="" class="instructions__form" v-on:submit.prevent="startGame">
    <input type="text" id="user" placeholder="Digite o seu nome..." required>
   
    <div>
      <h2>Nível de dificuldade</h2>
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
    
    <button type="submit">Jogar</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'InstructionsForm',
  methods: {
    ...mapMutations(['startGame'])
  }
}
</script>

<style lang="scss" scoped>
  .instructions__form {
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    input[type="text"] {
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      border-bottom: 0.0625rem solid black;
      text-align: center;
      margin-bottom: 0.5rem;
    }
    div {
      margin-bottom: 0.5rem;
      h2 {
        margin-bottom: 0.5rem;
      }
      span {
        margin: 0 0.5rem;
      }
    }
    button {
      background-color: #CCC;
      border: none;
      outline: none;
      padding: 0.5rem 1.5rem;
    }
  }
</style>
