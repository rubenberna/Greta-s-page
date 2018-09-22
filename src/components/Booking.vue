<template lang="html">
  <div class="booking container">
    <sui-button  class="booking-button"
                 @click.native="toggle">Make appointment</sui-button>
    <sui-modal v-model="open">
      <sui-modal-header>Select a Photo</sui-modal-header>
      <sui-modal-content image>
        <sui-image wrapped size="medium" :src='therapy.image' />
        <sui-modal-description>
          <sui-header>Default Profile Image</sui-header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="toggle">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Booking',
    data() {
      return { open: false };
    },
    props: {
      therapy: Object
    },
    methods: {
      toggle() {
        this.open = !this.open;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .booking-button {
    padding: 9px 15px;
    font-size: 12px;
    letter-spacing: .10rem;
    text-transform: uppercase;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    border-radius: 0px;
    background-color: white;
    font-family: $font-family-p;
    font-weight: $font-weight-p;
    &:hover{
      background-color: $light-grey;
    }
  }
</style>
