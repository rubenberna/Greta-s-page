<template lang="html">
  <div class="booking">
    <sui-button  class="booking-button"
                 @click.native="toggle">Schedule an appointment!</sui-button>
    <sui-modal v-model="open"
               class="booking-modal">
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
  export default {
    name: 'BookingShow',
    data() {
      return { open: false };
    },
    props: {
      therapy: Object
    },
    methods: {
      toggle() {
        this.open = !this.open;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

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

  .booking-modal {
    opacity: 1;
  }
</style>
