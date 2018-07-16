<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-search my-container">
      <mt-search autofocus v-model="value" :result="filterResult"></mt-search>
    </div>
  </div>

</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: 'page-search',

    data() {
      return {
        headerName: 'search',
        value: '',
        defaultResult: [
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          'Pear',
          'Peanut',
          'Other'
        ]
      };
    },

    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    }
  };
</script>

<style lang="css">
  .page-search {
    height: 100%;
  }
</style>
