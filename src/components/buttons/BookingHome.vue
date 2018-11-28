<template lang="html">
  <div class="booking">
    <div class="currentUser">
       <sui-button  class="booking-home-button"
                    @click.native="toggle">
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
                    close
              </span>
            </sui-header>
            <div class="booking-description">
              <p>Thank you for choosing the {{ therapy.name }} therapy!</p>
              <p>This treatment is available on {{ therapy.availability.toLowerCase() }} at €{{ therapy.price }} per session.</p>
              <p>Please enter your details to make an appointment.</p>
            </div>
            <sui-form>
              <div class="booking-details">
                <sui-form-field v-if='!currentUser'>
                  <label>Email address</label>
                  <input v-model="booking.email" type="email" placeholder="your@email.com" class="booking-form-input">
                </sui-form-field>
                <sui-form-field>
                  <label>Phone number</label>
                  <input v-model="booking.phone" type="tel" placeholder="0489 555 555" class="booking-form-input">
                </sui-form-field>
              </div>

              <div class="booking-details">
                <sui-form-field>
                  <label>Preferred date</label>
                  <input v-model="booking.date" type="date" placeholder="dd.mm.jj" class="booking-form-input">
                </sui-form-field>
                <sui-button type='submit'
                              v-if='!outcome.success'
                              class='schedule-button'
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
                </div>
                <sui-label v-if='outcome.error'
                           basic color="red" pointing='above'
                           class="notification">
                           {{outcome.errorMsg}}
                </sui-label>
            </sui-form>
          </sui-modal-description>
      </sui-modal-content>
    </sui-modal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
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
          email: null
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
      validateBooking() {
        if (!this.booking.phone || !this.booking.date) {
          this.outcome.error = true
          this.outcome.errorMsg = null
          this.outcome.errorMsg = 'Please fill all fields'
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
        if (this.currentUser) {
          this.booking.userId = this.currentUser.uid
          this.booking.clientName = this.profile.name
          this.booking.email = this.profile.email
        } else {
          this.booking.userId = "no account"
          this.booking.clientName = "no account"
        }
        this.booking.therapyId = this.therapy.id
        this.booking.therapyName = this.therapy.name
        this.createBooking(this.booking);
        setTimeout(() => this.toggle(), 3300)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../style/main.scss';

  .modal {
    max-height: 50% !important;
    left: 27% !important;
    top: 25% !important;
  }

  .booking-home-button {
    padding: 9px 15px !important;
    font-size: 11px !important;
    letter-spacing: .10rem !important;
    text-transform: uppercase !important;
    border-right: 1px solid #e5e5e5 !important;
    border-bottom: 1px solid #e5e5e5 !important;
    border-radius: 0px !important;
    background-color: $white !important;
    font-family: $font-family-p !important;
    font-weight: $normal !important;
    transition: all 0.5s !important;
    &:hover{
      background-color: #f2f3ee !important;
      border-radius: 4px !important;
    }
  }

  .booking-image {
    display: flex !important;
    align-items: center;
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
      text-transform: lowercase;
      font-size: 13px;
      cursor: pointer;
      color: $steel;
      &:hover {
        color: $color-text;
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
    max-width: 80%;
    margin-top: 37px;
    display: flex;
    justify-content: space-between;
    input.booking-form-input {
      height: 17px;
      width: 150px !important;
    }
    .notification {
      margin-bottom: 12px;
      max-width: 175px;
    }
    .booking-success {
      transition: all 3s;
      color: $success;
    }
  }

  button.schedule-button.ui.button {
    height: 41px;
    width: 196px;
    margin-top: 22px
  }
</style>
