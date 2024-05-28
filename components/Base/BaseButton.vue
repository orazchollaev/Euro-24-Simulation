<script lang="ts" setup>

const props = defineProps<{
  size: string,

  color: string
}>()

</script>

<template>
  <button :class="['base-button', props.color, props.size]">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.base-button {

  color: var(--secondary);
  cursor: pointer;

  &.primary {
    background-color: var(--primary);
  }

  &.secondary {
    background-color: var(--secondary);
    color: var(--third);
  }

  &.third {
    background-color: var(--third);
  }

  &.gradient {
    background: linear-gradient(to top, var(--third), var(--secondary));
  }

  &.small {
    padding: 6px 12px;
    font-size: 20px;
    border-radius: 8px;
  }

  &.medium {
    padding: 8px 16px;
    font-size: 24px;
    border-radius: 12px;
  }

  &.large {
    padding: 9px 22px;
    font-size: 30px;
    border-radius: 16px;
  }

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.6;
    scale: 0.98;
  }
}
</style>