<template>
  <div class="newsletter container">
    <div class="newsletter-intro">
      <heading weight='bold'
               size='m'>
        I'll keep you posted for more events :)
      </heading>
    </div>

    <div v-if='!outcome.success'
         class="newsletter-unfinished">
      <div class="newsletter-action">
        <sui-input placeholder="you@email.com"
        class="input"
        v-model="newsletterData.email"/>
        <sui-button primary
        class="submit"
        @click.prevent='submit'>Newsletter
        </sui-button>
      </div>
      <paragraph v-if='outcome.error'
                 size='l'
                 type='danger'>
                 {{ outcome.error }}
      </paragraph>
    </div>

    <div v-else
         class="newsletter-sucess">
         <paragraph size='l'>
            Thank you for joining our newsletter!
         </paragraph>
         <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/l3mZfIZ6ZFlkIUH8A" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/cute-dogs-high-five-l3mZfIZ6ZFlkIUH8A">via GIPHY</a></p>
    </div>
  </div>
</template>

<script>
  import Heading from './typography/Heading'
  import Paragraph from './typography/Paragraph'
  import { mapActions } from 'vuex'
  import { validateEmail } from './_helpers/validateEmail'

  export default {
    name: 'newsletter',
    data () {
      return {
        newsletterData: {
          email: null
        },
        outcome: {
          success: false,
          error: null
        }
      }
    },
    components: {
      Heading,
      Paragraph
    },
    methods: {
      ...mapActions(['register']),
      submit() {
        if (!this.newsletterData || !validateEmail(this.newsletterData.email)) {
          this.outcome.error = "I'm afraid that was not a valid email..."
        } else {
          this.outcome.error = null
          this.outcome.success = true
          this.register(this.newsletterData)
        }
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
      transition: all 1s;
      .submit {
        width: 170px;
        padding-left: 45px;
        background: #005792;
      }
    }
  }
</style>
