<template>
  <div class="events-interested">
    <transition name="slide-fade" mode="out-in">
      <sui-button animated
                  v-if='!interested'
                  key='not-interested'
                  class="button-not-interested"
                  @click.stop="toggle">
        <sui-button-content visible>Not interested</sui-button-content>
        <sui-button-content hidden>
          <sui-icon name="right arrow" />
        </sui-button-content>
      </sui-button>
       <sui-button  v-else
                    key='interested'
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
    }
  }
}
</script>

<style lang="scss">

  button.button-not-interested.ui-animated-button {
    background: white !important;
    border: 1px solid grey !important;
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
