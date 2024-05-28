<script lang="ts" setup>
import BaseButton from '~/components/Base/BaseButton.vue';
import BaseTitle from '~/components/Base/BaseTitle.vue';


const goTo = (path: string) => {
  const router = useRouter();

  router.push(path)
}

</script>

<template>

  <div class="start-page">
    <div class="start-page__container">
        <div class="start-page__card-top">
        <BaseTitle color="secondary" size="large">Euro 24</BaseTitle>
      </div>

      <div class="start-page__card-bottom">
        <BaseButton color="secondary" size="large" @click="goTo('/group-page')">Start</BaseButton>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.start-page{



  &__container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }
}

</style>