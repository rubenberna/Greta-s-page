<template>
  <div class="all-therapies">
    <div class="all-therapies-intro">
      <heading weight='bold'
               size='l'>
        Luister naar je lichaam
      </heading>
      <paragraph size='xl'>
        Heel vaak zitten we veel te veel in ons hoofd en luisteren niet naar de signalen die ons lichaam ons geeft. En als we al aandacht hebben voor ons lichaam, zijn we het vaak aan’t pushen met intens sporten of net nauwelijks bewegen, met moedig volhouden totdat we crashen, met diëten of overeten enz.
        Ik wil je graag helpen om contact te maken met je lichaam, echt te gaan luisteren naar jouw lijf dat alles weet.
      </paragraph>
    </div>
    <div class="row">
      <div class="all-therapies-group col-xs-6"
           v-for="therapy in therapies"
           :key="therapy.id">
          <heading class="all-therapies-card-teaser"
              @click.prevent="storeTherapy(therapy); router(`/therapy/${therapy.name}`)">
              {{therapy.name}}
          </heading>
          <div class="all-therapies-card_container"
               @click.prevent="storeTherapy(therapy); router(`/therapy/${therapy.name}`)">
            <div class="all-therapies-card-image">
              <clazy-load :src='therapy.image'>
                <transition name="fade" appear>
                  <sui-image :src='therapy.image' size="large"/>
                  <div slot="placeholder">
                    <loader/>
                  </div>
                </transition>
              </clazy-load>
            </div>
            <div class="all-therapies-description">
              <paragraph class="all-therapies-card-text">
                  {{therapy.description}}
              </paragraph>
              <paragraph class="all-therapies-card-text_more">
                Lees meer
             </paragraph >
            </div>
          </div>
            <div class="all-therapies-card-availability">
              <booking :therapy='therapy' />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Booking from '@/components/buttons/BookingHome'
  import Heading from '@/components/typography/Heading'
  import Paragraph from '@/components/typography/Paragraph'
  import Loader from '@/components/Loader'

  export default {
    name: 'allTherapies',
    computed: mapGetters(['therapies']),
    components: {
      Booking,
      Heading,
      Paragraph,
      Loader
    },
    methods: {
      ...mapActions(['storeTherapy']),
      router(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .all-therapies {
    margin: 95px 0 0 95px;
    display: grid;
    max-width: 80%;

    .all-therapies-intro {
      padding: 20px;
      max-width: 79%;
    }

    .all-therapies-group {
      width: 534px;
      background-color: orange;
      height: 356px;
      box-shadow: 0 1px 5px 0 rgba(0,0,0,0.07),0 1px 0 0 rgba(0,0,0,0.03);
      background: rgba(177, 209, 197, 0.3);
      margin-bottom: 78px;
      padding: 9px;
      margin: 18px;
      transition: all 0.3s;
      &:hover {
        box-shadow: 2px 6px 9px 0 rgba(0,0,0,0.07),0 1px 0 0 rgba(0,0,0,0.03);
        background: rgba(177, 209, 197, 0.4);
      }

      .all-therapies-card-teaser {
        justify-content: center;
        width: 100%;
        line-height: 1.2;
        font-weight: $semibold;
        padding: 16px;
        font-size: $heading-size-m;
        opacity: 0.8;
        cursor: pointer;
      }
      .all-therapies-card_container {
        display: flex;
        justify-content: space-around;
        padding-top: 16px;
        padding-bottom: 16px;
        height: 65%;
        cursor: pointer;

        .all-therapies-card-image {
          position: relative;
          overflow: hidden;
          margin-right: 1px;
          width: 35%;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: auto;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
          }
        }

        .all-therapies-description {
          // details for text ellipsis
          $font-size: 19px;
          $line-height: 1.368;
          $lines-to-show: 6;

          width: 50%;
          display: flex;
          padding-right: 16px;
          height: 80%;
          display: inline-block; /* Fallback for non-webkit */
          display: -webkit-inline-box;
          color: $color-text-light;
          p {
            font-family: $font-family-p;
            display: inline-block; /* Fallback for non-webkit */
            display: -webkit-inline-box;
            height: $font-size*$line-height*$lines-to-show; /* Fallback for non-webkit */
            margin: 0 auto;
            font-size: $font-size;
            line-height: $line-height;
            -webkit-line-clamp: $lines-to-show;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            &:last-child {
              font-weight: 600;
              font-size: 15px;
            }
          }
          .all-therapies-card-text_more {
            color: $color-text;
            height: 15%;
          }
        }
      }
      .all-therapies-card-availability {
        display: flex;
        justify-content: flex-end;
        width: 80%;
      }
    }
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 2s;
  }

</style>
