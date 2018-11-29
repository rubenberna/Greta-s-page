<template>
  <div class="events-interested">
    <transition name="slide-fade" mode="out-in">
      <sui-button animated
                  v-if='!interested'
                  key='not-interested'
                  class="button-not-interested">
        <sui-button-content visible>Interested?</sui-button-content>
        <sui-button-content hidden style="background: white">
          <input type="text"
                 placeholder="your@email.com"
                 style="padding-bottom: 25px;">
         <sui-icon name="right arrow"
                   @click.stop="toggle"/>
        </sui-button-content>
      </sui-button>
       <sui-button  v-else
                    key='interested'
                    class="button-interested"
                    positive content="I'm in!"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'booking-event',
  data() {
    return {
      interested: false,
    }
  },
  methods: {
    toggle() {
      this.interested = !this.interested
    },
    changeClass() {
      console.log('changed');
    }
  }
}
</script>

<style lang="scss">

  .ui.animated.button {
    width: 180px;
  }

  div.hidden.content:parent {
    width: 30px;
    margin-bottom: 30px;
    height: 10px;
    padding-bottom: 90px;
    text-align: center;
  }

  .button-not-interested {
    background: wheat !important;
    margin-top: 13px !important;
    letter-spacing: 1px;
  }

  .button-interested {
    letter-spacing: 1px;
    margin-top: 13px !important;
  }

  .slide-fade-enter-active {
  transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
