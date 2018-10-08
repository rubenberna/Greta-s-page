<template>
  <div class="not-found" style="background-image: linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url('https://firebasestorage.googleapis.com/v0/b/greta-f481d.appspot.com/o/lance-grandahl-699001-unsplash.jpg?alt=media&token=4645951f-de93-472f-af60-0ac360ba56c7');">
    <section class="not-found-help">
      <heading size='xl'
               weight='bold'>
               Ben je verloren?
      </heading>
      <router-link :to="{ name: 'home'}">
        <paragraph size='xl'>
          Home
        </paragraph>
      </router-link>
    </section>
  </div>
</template>

<script>
  import Heading from '@/components/typography/Heading'
  import Paragraph from '@/components/typography/Paragraph'

  export default {
    name: 'not-found',
    components: {
      Heading,
      Paragraph
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .not-found {
    color: $white;
    height: 100vh;
    background-size: cover !important;
    .not-found-help {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        color: $white;
        text-decoration: none;
        border: 3px solid $white;
        padding: 5px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
          color: $charcoal-grey;
          background-color: $white;
          text-decoration: none;
        }
      }
    }
  }
</style>
