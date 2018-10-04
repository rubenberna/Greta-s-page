<template>
  <p class='body-text'
     :class='objectClass'>
    <slot/>
  </p>
</template>

<script>
  export default {
    name: 'heading',
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
      maxWidth: {
        type: String
      },
      primary: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'none',
        validator: value => {
          return ['none', 'danger'].includes(value)
        }
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
          'danger': this.type === 'danger'
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../style/main';

  .heading {
    font-weight: $normal;
    font-family: $font-family-p;
    $color: $color-text;

    &.xs {
      font-size: $heading-size-xs;
      line-height: $heading-size-xs + $line-height-diff;
    }
    &.s {
      font-size: $heading-size-s;
      line-height: $heading-size-s + $line-height-diff;
    }
    &.m {
      font-size: $heading-size-m;
      line-height: $heading-size-m + $line-height-diff;
    }
    &.l {
      font-size: $heading-size-l;
      line-height: $heading-size-l + $line-height-diff;
    }
    &.xl {
      font-size: $heading-size-xl;
      line-height: $heading-size-xl + $line-height-diff;
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
  }

</style>
