<template>
  <div class='googleMap'>
    <paragraph size='l'
               weight='bold'
               :padding='true'
               :uppercase='true'
               class="googleMap-directions">
               Kwaenijkstraat 13, 3191 Hever Boortmeerbeek | Tel 04 85 64 90 35
    </paragraph>
    <div id="map">
      <gmap-map :center="center"
                :zoom="12"
                style="width:70%;  height: 400px;">
        <gmap-marker :position="center" />
      </gmap-map>
    </div>
  </div>
</template>

<script>
  import paragraph from '@/components/typography/Paragraph'

  export default {
    name: "GoogleMap",
    data() {
      return {
        center: { lat: 50.992, lng: 4.542 },
      };
    },
    components: {
      paragraph
    }
  }
</script>

<style lang="scss" scoped>

  .googleMap-directions {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }

  #map {
    display: flex;
    justify-content: center;
  }
</style>
