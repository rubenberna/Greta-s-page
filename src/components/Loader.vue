<template >
    <div v-if="loading">
      <clip-loader :loading="loading"
                   :color="color"
                   :height="height"
                   :width="width" />
    </div>
</template>

<script>
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

  export default {
    props: {
      loading: Boolean,
      color: String,
      height: String,
      width: String
    },
    components: {
     ClipLoader
    }
}
