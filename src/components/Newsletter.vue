<template>
  <div class="newsletter container">
    <div class="newsletter-intro">
      <heading weight='bold'
               size='m'>
        We'll keep you posted for more events :)
      </heading>
    </div>

    <div class="newsletter-action">
      <sui-input placeholder="you@email.com"
      class="input"
      v-model="newsletterData.email"/>
      <sui-button primary
      class="submit"
      @click.prevent='submit'>Newsletter
    </sui-button>
    </div>
  </div>
</template>

<script>
  import Heading from './typography/Heading'
  import { mapActions } from 'vuex'
  import { validateEmail } from './_helpers/validateEmail'

  export default {
    name: 'newsletter',
    data () {
      return {
        newsletterData: {
          email: null
        },
        err: null
      }
    },
    components: {
      Heading
    },
    methods: {
      ...mapActions(['register']),
      submit() {
        this.register(this.newsletterData)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .newsletter {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 95px;
    .newsletter-action {
      display: flex;
      .submit {
        width: 170px;
        padding-left: 45px;
        background: #005792;
      }
    }
  }
</style>
