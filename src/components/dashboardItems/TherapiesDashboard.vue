<template>
  <div class="therapies">
    <div class="therapies-heading">
      <heading class="therapies-heading_title"> Therapies </heading>
      <router-link :to="{ name: 'newTherapy'}">
        <heading size='s'
                 uppercase
                 weight='semibold'> New
      </heading>
    </router-link>
    </div>
    <sui-table fixed single-line>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell>Name</sui-table-header-cell>
          <sui-table-header-cell>Description</sui-table-header-cell>
          <sui-table-header-cell textAlign='center'>Action</sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body v-for="therapy in therapies" :key="therapy.id" selectable>
        <sui-table-row class="therapies-item">
          <sui-table-cell>{{ therapy.name }}</sui-table-cell>
          <sui-table-cell> {{ therapy.description }} </sui-table-cell>
          <sui-table-cell class="therapies-actions">
            <span class="therapies-actions_item" @click.prevent="storeTherapy(therapy); view(therapy.name)">View</span>
            <span class="therapies-actions_item" @click.prevent="storeTherapy(therapy); edit(therapy)">Edit</span>
            <span class="therapies-actions_item" @click.prevent='deleteTherapy(therapy.id)'>Delete</span>
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
      ...mapGetters(['therapies', 'bookingsTherapy']),
    },
    methods: {
      ...mapActions(['storeTherapy', 'countBookings', 'deleteTherapy']),
      view(therapy) {
        this.$router.push(`/therapy/${therapy}`)
      },
      edit(therapy) {
        this.$router.push({ name: 'editTherapy', params: { therapy_id: therapy.id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

  .therapies {
    width: 64%;

    .therapies-heading {
      display: flex;
      align-items: center;
      width: 27%;
      justify-content: space-between;
      .therapies-heading_title {
        display: inline-block;
        line-height: 1em;
        letter-spacing: .135em;
      }
    }
    th:nth-of-type(1) {
      width: 25%;
    }
    th:nth-of-type(3) {
      width: 20%;
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
      background: rgba(203, 155, 66, 0.1);
      cursor: default;
    }
  }
</style>
