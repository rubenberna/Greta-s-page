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
                   @click="login">
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
                   X
             </span>
           </sui-header>
           <div class="booking-description">
             <p>Thank you for your interest in the {{ therapy.name }} therapy!</p>
             <p>This treatment is available {{ therapy.availability.toLowerCase() }} with a price of {{ therapy.price }} per session.</p>
             <p>Would you like to schedule an appointment?</p>
           </div>
           <sui-form class="booking-details">
             <sui-form-field>
               <label>Preferred date</label>
               <input placeholder="18.11.2018">
             </sui-form-field>
             <sui-form-field>
               <label>Phone number</label>
               <input placeholder="0489 555 555">
             </sui-form-field>
           </sui-form>
         </sui-modal-description>
         <sui-button primary
                     class="booking-submit">
                     Schedule appointment
        </sui-button>
     </sui-modal-content>
   </sui-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import router from '../../router';

  export default {
    name: 'BookingHome',
    data() {
      return { open: false };
    },
    props: {
      therapy: Object
    },
    computed: mapGetters(['currentUser']),
    methods: {
      toggle() {
        this.open = !this.open;
      },
      login() {
        router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

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
    left: 27%;
    top: 25%;
  }

  .booking-button {
    color: white;
    font-size: 19px;
    font-weight: bolder;
    transition: all 0.5s;
    width: 170px;
    height: 63px;
    background: no-repeat;
    &:hover {
      opacity: 0.8;
      background: $white;
      color: $color-text;
    }
  }

  .booking-image {
    display: flex !important;
    align-items: center;
  }

  .booking-header {
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    width: 510px;
    .booking-header_close {
      color: white;
      width: 26px;
      border: 1px solid grey;
      border-radius: 50%;
      text-align: center;
      height: 26px;
      background: grey;
      font-size: 13px;
      cursor: pointer;
    }
  }

  .booking-description {
    margin-top: 23px;
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
  }

  .booking-submit {
    position: absolute;
    // bottom: 240px;
    // left: 353px;
    bottom: 82px;
    left: 353px;
  }
</style>
