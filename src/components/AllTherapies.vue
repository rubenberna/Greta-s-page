<template>
  <div class="all-therapies container">
    <div v-for="therapy in therapies"
         :key="therapy.id">
    <div class="all-therapies-label">
      <h5>Treatments</h5>
    </div>
    <div class="all-therapies-card">
      <div class="all-therapies-card-image">
        <sui-image :src='therapy.image' size="large" />
      </div>
      <div class="all-therapies-card-description">
        <h1>{{therapy.teaser}}</h1>
        <div class="all-therapies-card-description-availability">
          <span>Make appointment</span>
          <span>{{therapy.availability}}</span>
        </div>
      </div>
    </div>
    <p class="all-therapies-card-text">
      {{therapy.indications}}.
    </p>
    <span style="font-weight:bold">Read More <font-awesome-icon icon="coffee" /> </span>
    <br>
    <br>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'allTherapies',
    computed: mapGetters(['therapies'])
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  .all-therapies-label {
    text-transform: uppercase;
    font-family: "Open Sans";
    margin-bottom: 20px;
    font-weight: $font-weight-p;
    letter-spacing: .24rem;
    line-height: 1.8;
    font-style: normal;
    h5 {
      font-size: 1rem;
    }
  }
  .all-therapies-card {
    display: flex;
    max-width: 750px;
    height: 300px;
    justify-content: space-between;

    .all-therapies-card-image {
     width: 45%;
     max-height: inherit;
    }

    .all-therapies-card-description {
      display: flex;
      flex-direction: column;
      max-width: 45%;
      max-height: 250px;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      font-family: 'Raleway', sans-serif;
      line-height: 1.2;
      font-weight: 400px;
      h1 {
        font-size: 2.2rem;
      }

      .all-therapies-card-description-availability {
        display: flex;
        justify-content: center;
        align-items: baseline;
        span {
          padding: 9px 15px;
          font-size: 12px;
          letter-spacing: .10rem;
          text-transform: uppercase;
          border-right: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          &:last-child {
            margin-left: 9px;
          }
        }
      }
    }
  }

  .all-therapies-card-text {
    max-width: 750px;
    margin-top: -40px;
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: $font-family-p;
    font-weight: $font-weight-p;
  }
</style>
