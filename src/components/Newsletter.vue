<template>
  <div class="newsletter container">

    <transition name='fade'>
      <div v-show='!outcome.success'
           class="newsletter-unfinished">
           <div class="newsletter-intro">
             <heading weight='bold'
                      size='m'>
                      Mis onze volgende afspraak niet
             </heading>
           </div>
           <div class="newsletter-data">
             <div class="newsletter-action">
               <sui-input placeholder="you@email.com"
                          class="input"
                          v-model="newsletterData.email"/>
               <button class="submit"
                       @click.prevent='submit'>Newsletter
               </button>
             </div>
             <paragraph v-if='outcome.error'
                        size='l'
                        type='danger'>
                        {{ outcome.error }}
            </paragraph>
          </div>
      </div>
    </transition>

    <transition name="slide">
      <div v-show='outcome.success'
           class="newsletter-sucess">
        <div class="newsletter-sucess-intro">
         <heading weight='bold'
                  size='m'>
                  Vanaf nu ontvang je regelmatig ook onze info in je mailbox. Bedankt hiervoor :)
         </heading>
        </div>
        <div class="newsletter-sucess-giff">
         <iframe src="https://giphy.com/embed/xT1XGHkP7hqm0JvWrS" width="250" height="250" frameBorder="0" class="giphy-embed"/>
        </div>
      </div>
    </transition>
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
    margin-bottom: 95px;
    transition: all 2s;
    .newsletter-unfinished {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .newsletter-action {
        display: flex;
        .submit {
          width: 170px;
          padding-left: 45px;
          background: $green;
          color: $white;
          border-radius: 4px;
        }
      }
    }
    .newsletter-sucess {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      a {
        top: -9%;
      }
    }
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    // opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
