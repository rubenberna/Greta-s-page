<template>
  <div id='map'>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:70%;  height: 400px;"
    >
      <gmap-marker
        :position="center"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  export default {
    name: "GoogleMap",
    data() {
      return {
        center: { lat: 50.992, lng: 4.542 },
      };
    }
  }
</script>

<style lang="scss" scoped>
  #map {
    display: flex;
    justify-content: center;
  }
</style>
