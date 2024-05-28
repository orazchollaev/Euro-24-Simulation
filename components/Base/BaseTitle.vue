<script lang="ts" setup>

const props = defineProps<{
  size: string,

  color: string
}>()

</script>

<template>
  <h1 :class="['base-title', props.color, props.size]">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
.base-title {
  font-weight: 700;
  text-transform: uppercase;

  &.primary {
    color: var(--primary)
  }

  &.secondary {
    color: var(--secondary)
  }

  &.third {
    color: var(--third)
  }

  &.gradient {
    background: -webkit-linear-gradient(var(--third)  , var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.small{
    font-size: 40px;
    line-height: 40px;
  }

  &.medium{
    font-size: 50px;
    line-height: 55px;
  }

  &.large{
    font-size: 60px;
    line-height: 70px;
  }
}
</style>