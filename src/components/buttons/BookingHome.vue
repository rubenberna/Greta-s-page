<template lang="html">
  <div class="booking">
    <div class="currentUser"
         v-if="currentUser">
         <sui-button  class="booking-button"
                      @click.native="toggle">
                      Make appointment
       </sui-button>
    </div>
    <div v-else>
      <sui-button  class="booking-button"
                   @click="loginFirst">
                  Make appointment
    </sui-button>
    </div>
    <sui-modal v-model="open">
      <sui-modal-content image>
        <sui-image wrapped size="medium"
                   class="booking-image"
                  :src='therapy.image' />
          <sui-modal-description>
            <sui-header class="booking-header">
              <p>{{ therapy.name }}</p>
              <span class="booking-header_close"
                    @click='toggle'>
                    x
              </span>
            </sui-header>
            <div class="booking-description">
              <p>Thank you for choosing the {{ therapy.name }} therapy!</p>
              <p>This treatment is available {{ therapy.availability.toLowerCase() }} with a price of {{ therapy.price }} per session.</p>
              <p>Would you like to schedule an appointment?</p>
            </div>
            <sui-form class="booking-details">
              <sui-form-field>
                <label>Preferred date</label>
                <input v-model="booking.date" type="date" placeholder="dd.mm.jj">
              </sui-form-field>
              <sui-form-field>
                <label>Phone number</label>
                <input v-model="booking.phone" type="tel" placeholder="0489 555 555">
              </sui-form-field>
              <sui-label v-if='outcome.error'
                         basic color="red" pointing='above'
                         class="notification">
                         {{outcome.errorMsg}}
              </sui-label>
              <sui-button v-if='!outcome.success'
                          primary
                          @click.prevent='validateBooking()'>
                          Schedule appointment
              </sui-button>
              <div v-else
                   class="booking-success">
                   <paragraph size='l'
                              weight='semibold'>
                              Thank you!!
                  </paragraph>
                   <paragraph size='l'
                              weight='semibold'>
                              I will get in touch with you shortly!
                  </paragraph>
              </div>
            </sui-form>
          </sui-modal-description>
      </sui-modal-content>
    </sui-modal>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import router from '../../router'
  import { validatePhone } from '../_helpers/validatePhone'
  import { validateMobile } from '../_helpers/validateMobile'
  import Paragraph from '@/components/typography/Paragraph'

  export default {
    name: 'BookingHome',
    data() {
      return {
        open: false,
        booking: {
          createdOn: new Date(),
          userId: null,
          clientName: null,
          date: null,
          phone: null,
          therapyId: null,
          therapyName: null,
        },
        outcome: {
          success: false,
          error: false,
          errorMsg: null
        }
       }
    },
    props: {
      therapy: Object
    },
    components: {
      Paragraph
    },
    computed: mapGetters(['currentUser', 'profile']),
    methods: {
      ...mapActions(['createBooking']),
      toggle() {
        this.open = !this.open;
      },
      loginFirst() {
        router.push('/login')
      },
      validateBooking() {
        if (!this.booking.phone || !this.booking.date) {
          this.outcome.error = true
          this.outcome.errorMsg = null
          this.outcome.errorMsg = 'Please fill in both fields first'
        // } else if (!validatePhone(this.booking.phone) || !validateMobile(this.booking.phone)) {
        //   this.outcome.errorMsg = null
        //   this.outcome.errorMsg = 'Please enter a valid Belgian number'
        } else {
          this.outcome.error = false
          this.outcome.errorMsg = null
          this.outcome.success = true
          this.makeBooking()
        }
      },
      makeBooking() {
        this.booking.userId = this.currentUser.uid
        this.booking.clientName = this.profile.name
        this.booking.therapyId = this.therapy.id
        this.booking.therapyName = this.therapy.name
        this.createBooking(this.booking);
        setTimeout(() => this.toggle(), 3300)
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

  .modal {
    max-height: 59% !important;
    left: 27% !important;
    top: 25% !important;
  }

  .sui-modal .ui.standart.modal.transition.visible.active {
    max-height: 59% !important;
    left: 27%;
    top: 25%;
  }
  .modal.active {
    max-height: 59% !important;
    left: 27%;
    top: 25%;
  }

  .modal.visible.active {
    max-height: 59% !important;
    left: 27%;
    top: 25%;
  }
  .ui.modal.visible.active {
    max-height: 59% !important;
    left: 27%;
    top: 25%;
  }

  .modal.ui.modal.visible.transition.ui.active.modal {
    max-height: 59% !important;
    left: 27%;
    top: 25%;
  }

  div.ui.modal.visible.active {
    max-height: 59% !important;
    left: 27%;
    top: 25%;
  }
  div.ui.standart.modal.transition.visible.active {
    max-height: 59% !important;
    left: 27% !important;
    top: 25% !important;
    display: flex !important;
  }

  .booking-button {
    padding: 9px 15px;
    font-size: 11px;
    letter-spacing: .10rem;
    text-transform: uppercase;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    border-radius: 0px;
    background-color: white;
    font-family: $font-family-p;
    font-weight: $normal;
    transition: all 1s;
    &:hover{
      background-color: $white;
      border-radius: 4px;
    }
  }

  .booking-image {
    display: flex !important;
    align-items: flex-end;
  }

  .booking-header {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    width: 510px;
    p {
      font-weight: 700;
      letter-spacing: .135em;
    }
    .booking-header_close {
      border: 1px solid grey;
      background: $white;
      color: $charcoal-grey;
      width: 26px;
      border-radius: 50%;
      text-align: center;
      height: 26px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.5s;
      padding-left: 0.5px;
      &:hover {
        color: $white;
        background: grey;
      }
    }
  }

  .booking-description {
    margin-top: 23px;
    font-family: $font-family-p;
    color: $color-text;
    font-weight: 300;
  }
  .booking-details {
    max-width: 55%;
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    input {
      height: 23px;
    }
    .notification {
      margin-bottom: 12px;
    }
    .booking-success {
      // text-align: center;
      transition: all 3s;
      color: $marine;
      letter-spacing: .1em;
    }
  }

  // .booking-submit {
  //   position: absolute;
  //   bottom: 240px;
  //   left: 353px;
  //   // bottom: 82px;
  //   // left: 353px;
  // }

  .ui.primary.button {
    background: rgba(0, 173, 181, 0.7);
    width: 111%;
    height: 45px;
    margin-top: 3px;
    &:hover {
    background: $marine
    }
  }
</style>
