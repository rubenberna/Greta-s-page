<template>
  <div class="newsletter container">
    <div class="newsletter-intro">
      <heading weight='bold'
               size='m'>
        We'll keep you posted for more events :)
      </heading>
    </div>
    <div class="newsletter-action">
      <sui-input placeholder="you@email.com"
      class="input"/>
      <sui-button primary
      class="submit">Newsletter
    </sui-button>
    </div>
  </div>
</template>

<script>
  import Heading from './typography/Heading'

  export default {
    name: 'newsletter',
    components: {
      Heading
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
      .submit {
        width: 170px;
        padding-left: 45px;
        background: #005792;
      }
    }
  }
</style>
