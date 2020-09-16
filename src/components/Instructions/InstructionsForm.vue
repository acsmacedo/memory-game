<template>
  <form class="instructions__form" v-on:submit.prevent="startGame">
    <input type="text" id="user" placeholder="Digite o seu nome..." autocomplete="off" spellcheck="false" required>
    <div>
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
    <button type="submit">Começar</button>
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
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="text"] {
      background-color: transparent;
      border: none;
      outline: none;
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

    div {
      margin-bottom: 2rem;
      display: flex;
      h2 {
        margin-bottom: 0.5rem;
      }
      span {
        display: flex;
        align-items: center;
        margin: 0 0.5rem;
      }
    }
    
    button {
      background-color: var(--color);
      border: none;
      outline: none;
      border-radius: 1000rem;
      padding: 0.5rem 1.5rem 0.75rem 1.5rem;
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 0.75rem;
    }

    input[type="radio"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 16px;
      border: 0.0625rem solid #FFFFFF;
      background: #FFFFFF;
      margin: 0;
      margin-right: 0.5rem;
      outline: none;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      &:after {
        content: "";
        display: block;
      }
      &:checked {
        border: 0.0625rem solid var(--color);
        background: var(--color);
      }
      &:not(.switch) {
        width: 16px;
        &:after {
          opacity: 0;
        }
        &:checked {
          &:after { 
            opacity: 1;
          }
        }
      }
    }
  
    input[type='radio'] {
      border-radius: 1000rem;
      &:after {
        width: 16px;
        height: 16px;
        background: var(--color);
        border-radius: 1000rem;
        position: relative;
        top: calc(50% - (16px / 2));
        left: calc(50% - (16px / 2));
        opacity: 0;
        transform: scale(0.4);
      }
    }
  }
</style>
