<template>
  <div>
    <NavbarGrey/>
    <div class="manage container">
      <sui-table basic="very" celled collapsing size='large'>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>Therapy</sui-table-header-cell>
            <sui-table-header-cell>Nr. Appointments</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>

        <sui-table-body>
          <sui-table-row v-for='therapy in therapies' :key='therapy.id'>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image :src='therapy.image' shape="rounded" size="mini" />
                <sui-header-content>
                  {{therapy.name}}
                  <sui-header-subheader>{{therapy.therapist}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
            <sui-table-cell>
              0
            </sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
      <div class="fixed-action-btn">
        <router-link to='/newtherapy' class="btn-floating btn-large green">
          <i class="fa fa-plus"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import NavbarGrey from '@/components/NavbarGrey'

  export default {
    name: 'manage',
    computed: {
      ...mapGetters(['therapies'])
    },
    methods: {
      ...mapActions(['fetchTherapies'])
    },
    created() {
      this.fetchTherapies()
    },
    components: {
      NavbarGrey
    }
  }
</script>

<style lang="scss" scoped>
  .manage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    th:first-child {
      width: 300px;
    }

    .ui.basic.table tbody tr:hover {
        background-color: #f7f7f7;
        cursor: pointer;
    }
  }
</style>
