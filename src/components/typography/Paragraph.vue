<template>
  <p class='paragraph'
     :class='objectClass'>
    <slot/>
  </p>
</template>

<script>
  export default {
    name: 'paragraph',
    props: {
      size: {
        type: String,
        default: 'm',
        validator: value => {
          return ['xs', 's', 'm', 'l', 'xl'].includes(value)
        }
      },
      uppercase: {
        type: Boolean,
        default: false
      },
      darkenOnHover: {
        type: Boolean,
        default: false
      },
      weight: {
        type: String,
        default: 'normal',
        validator: value => {
          return ['normal', 'semibold', 'bold'].includes(value)
        }
      },
      type: {
        type: String,
        default: 'none',
        validator: value => {
          return ['none', 'danger', 'success'].includes(value)
        }
      },
      padding: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        objectClass: {
          'xs': this.size === 'xs',
          's': this.size === 's',
          'm': this.size === 'm',
          'l': this.size === 'l',
          'xl': this.size === 'xl',
          'uppercase': this.uppercase,
          'hoverDarken': this.darkenOnHover,
          'light': this.theme === 'light',
          'dark': this.theme === 'dark',
          'normal': this.weight === 'normal',
          'semibold': this.weight === 'semibold',
          'bold': this.weight === 'bold',
          'primary': this.primary,
          'danger': this.type === 'danger',
          'success': this.type === 'success',
          'padding': this.type === 'padding'
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../style/main';

  .paragraph {
    font-weight: $normal;
    font-family: $font-family-p;
    $color: $color-text;

    &.xs {
      font-size: $font-size-xs;
      line-height: $font-size-xs + $line-height-diff;
    }
    &.s {
      font-size: $font-size-s;
      line-height: $font-size-s + $line-height-diff;
    }
    &.m {
      font-size: $font-size-m;
      line-height: $font-size-m + $line-height-diff;
    }
    &.l {
      font-size: $font-size-l;
      line-height: $font-size-l + $line-height-diff;
    }
    &.xl {
      font-size: $font-size-xl;
      line-height: $font-size-xl + $line-height-diff;
    }
    &.uppercase {
      text-transform: uppercase;
    }
    &.hoverDarken {
      &:hover {
        color: darken($color-text, 100%);
      }
    }
    &.light {
      color: $color-text-light;
    }
    &.dark {
      color: $color-text-lighter;
    }
    &.normal {
      font-weight: $normal;
    }
    &.semibold {
      font-weight: $semibold;
    }
    &.bold {
      font-weight: $bold;
    }
    &.danger {
      color: $color-text-danger;
    }
    &.success {
      color: $success;
    }
    &.padding {
      padding: 20px;
    }
  }

</style>
