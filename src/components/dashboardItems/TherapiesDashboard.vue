<template>
  <div class="therapies">
    <heading> Therapies </heading>
    <sui-table fixed single-line>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell>Name</sui-table-header-cell>
          <sui-table-header-cell>Bookings</sui-table-header-cell>
          <sui-table-header-cell>Description</sui-table-header-cell>
          <sui-table-header-cell>Action</sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body v-for="therapy in therapies" :key="therapy.id" selectable>
        <sui-table-row class="therapies-item">
          <sui-table-cell>{{ therapy.name }}</sui-table-cell>
          <sui-table-cell class="therapies-bookings">0</sui-table-cell>
          <sui-table-cell>
            {{ therapy.description }}
          </sui-table-cell>
          <sui-table-cell class="therapies-actions">
            <span class="therapies-actions_item" @click.prevent="storeTherapy(therapy); view(therapy.name)">View </span>
            <span class="therapies-actions_item" @click.prevent='edit'>Edit </span>
            <span class="therapies-actions_item" @click.prevent='erase'>Delete</span>
          </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
  </sui-table>
  </div>
</template>

<script>
  import Heading from '@/components/typography/Heading'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'therapies-dashboard',
    components: {
      Heading
    },
    computed: {
      ...mapGetters(['therapies']),
    },
    methods: {
      ...mapActions(['storeTherapy']),
      view(therapy) {
        this.$router.push(`/therapy/${therapy}`)
      },
      edit() {
        console.log('edit');
      },
      erase() {
        console.log('erase');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

  .therapies {
    width: 64%;

    th:nth-of-type(3) {
      width: 40%;
    }

    th:nth-of-type(4) {
      width: 17%;
      text-align: center;
    }

    .therapies-actions {
      text-align: right;
      display: flex;
      justify-content: space-around;
      cursor: pointer;
      .therapies-actions_item:hover {
        font-weight: $semibold;
      }
    }
    .therapies-item:hover {
      background: rgba(203, 155, 66, 0.3);
      cursor: default;
    }
  }
</style>
