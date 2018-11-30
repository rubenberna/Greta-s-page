<template lang="html">
  <div class="booking">
    <div class="currentUser">
       <sui-button  class="booking-show-button"
                    @click.native="toggle">
                    Maak een afspraak
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
                    sluiten
              </span>
            </sui-header>
            <div class="booking-description">
              <p>Bedankt om hiervoor te kiezen.</p>
              <p>Deze behandeling is beschikbaar na afspraak.</p>
              <p>Wil je graag een afspraak maken ?</p>
            </div>
            <sui-form>
              <div class="booking-details">
                <sui-form-field v-if='!currentUser'>
                  <label>Email adres</label>
                  <input v-model="booking.email" type="email" placeholder="your@email.com" class="booking-form-input">
                </sui-form-field>
                <sui-form-field>
                  <label>Telefoonnummer</label>
                  <input v-model="booking.phone" type="tel" placeholder="0489 555 555" class="booking-form-input">
                </sui-form-field>
              </div>

              <div class="booking-details">
                <sui-form-field>
                  <label>Voorkeursdag(en)</label>
                  <input v-model="booking.date" type="date" placeholder="dd.mm.jj" class="booking-form-input">
                </sui-form-field>
                <sui-button type='submit'
                              v-if='!outcome.success'
                              class='schedule-button'
                              @click.prevent='validateBooking()'>
                              Boek een afspraak
                 </sui-button>
                 <div v-else
                       class="booking-success">
                    <paragraph size='l'
                               weight='semibold'>
                               Bedankt !!
                    </paragraph>
                    <paragraph size='l'
                               weight='semibold'>
                               Ik zal je binnenkort contacteren!
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

  .booking-show-button {
    color: $white !important;
    font-size: 19px !important;
    font-weight: bolder !important;
    transition: all 0.5s !important;
    width: 170px !important;
    height: 63px !important;
    background: no-repeat !important;
    &:hover {
      opacity: 0.8 !important;
      background: $white !important;
      color: $color-text !important;
    }
  }

</style>
