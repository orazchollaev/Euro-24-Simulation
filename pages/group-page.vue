<script lang="ts" setup>
import BaseButton from '~/components/Base/BaseButton.vue';


const db = useDBStore();

</script>

<template> 
  <div class="group-page">
    <div class="group-page__container">
      <div class="group-page__list">
        <Group v-for="group in db.groups" :group="group" ></Group>
      </div>

      <div class="button-wrapper">
        <BaseButton size="medium" color="secondary" @click="goTo('/knockout/16')">Next</BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.group-page{
  &__container{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  &__list{
    flex: 1 1 90%;
    height: 100%;
    display: grid;
    justify-content: space-between;
    justify-items: center;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .button-wrapper{
    flex: 1 1 10%;
  }
}

</style>