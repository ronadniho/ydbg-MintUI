<template>
  <div>
    <Header
      :headerName="headerName"/>
    <div class="page-indexlist my-container">
      <h1 class="page-title">Index List</h1>
      <p class="page-indexlist-desc">此例请使用手机查看</p>
      <div class="page-indexlist-wrapper">
        <mt-index-list>
          <mt-index-section v-for="item in alphabet" :index="item.initial">
            <mt-cell v-for="cell in item.cells" :title="cell"></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </div>
  </div>

</template>

<style lang="less">
    .page-indexlist {
      .page-indexlist-desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;/*no*/
      }

      .page-indexlist-wrapper {
        width: 100%;
        border-top: solid 1px #ddd;/*no*/
      }
    }
</style>

<script type="text/babel">
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
  import Header from '@/components/Header'
  export default {
    components: {Header},
    data() {
      return {
        headerName:'index-list',
        alphabet: []
      };
    },

    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
    }
  };
</script>
