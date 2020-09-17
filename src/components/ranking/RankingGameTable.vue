<template>
  <table class="ranking__table">
    <thead>
      <tr>
        <td>Posição</td>
        <td>Usuário</td>
        <td>Tempo</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in table" :key="i">
        <td>#{{i + 1}}</td>
        <td>{{item.user}}</td>
        <td>{{ timeMinutes(item.time) }}</td>
      </tr>
    </tbody>
    <tfoot v-if="table.length === 0">
      <tr>
        <td colspan="3">Sem record</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
  export default {
    name: 'RankingTable',
    methods: {
      timeMinutes(value) {
        const time = value;
        const s = time % 60;
        const m = ((time - s) % 3600) / 60;
        const h = ((time - s - (m * 60)) % 86400) / 3600;

        const s1 = !m && !h ? `${s}s` : s > 0 && s < 10 ? `0${s}s` : s >= 10 ? `${s}s` : h || m ? '00s' : '0s';
        const m1 = !h && m != 0 ? `${m}m ` : h && m > 0  && m < 10 ? `0${m}m ` : h && m >= 10 ? `${m}m ` : h ? '00m ' : '';
        const h1 = h != 0 ? `${h}h ` : h > 0  && h < 10 ? `0${h}h ` : h >= 10 ? `${h}h ` : '';
    
        return `${h1}${m1}${s1}`;
      }
    },
    props: {
      table: Array
    }
  }
</script>

<style lang="scss" scoped>
  .ranking__table {
    border-collapse: collapse;
    text-align: left;
    thead td {
      font-weight: 800;
    }
    tr {
      border-bottom: 0.0625rem solid var(--color);
    }
    td {
      padding: 0.25rem 1rem;
    }
    tfoot tr td {
      text-align: center;
    }
  }
</style>
