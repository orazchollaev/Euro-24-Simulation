<script lang="ts" setup>

const props = defineProps<{
  match: any,
  index: number
}>()

if (!props.match.team_one.goals[props.index] || !props.match.team_two.goals[props.index]) {
  props.match.team_one.goals[props.index] = 0;
  props.match.team_two.goals[props.index] = 0;
}

const db = useDBStore();

const random = () => {
  props.match.team_one.goals[props.index] = Math.floor(Math.random() * 5);
  props.match.team_two.goals[props.index] = Math.floor(Math.random() * 5);
}

</script>

<template>
  <div class="match">
    <div class="match__wrapper">
      <div class="match__team">
        <p class="match__team-name">{{ match.team_one.name }}</p>
        <input class="match__team-score" type="number" v-model="props.match.team_one.goals[props.index]">
      </div>
      <div class="match__center">-</div>
      <div class="match__team">
        <input class="match__team-score" type="number" v-model="props.match.team_two.goals[props.index]">
        <p class="match__team-name">{{ match.team_two.name }}</p>
      </div>
    </div>

    <div class="match__button-wrapper">
      <BaseButton size="small" color="secondary" @click="random">Random</BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.match {
  width: 65%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;

  &__wrapper {
    width: 100%;
    padding: 12px;
    box-shadow: 1px 3px 6px #222;
    border: 1px solid #222;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__team {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__team-score {
    width: 50px;
    height: 44px;
    font-size: 30px;
    text-align: center;
    background-color: transparent;
    color: var(--secondary);
    border-radius: 12px;
    box-shadow: 2px 2px 10px var(--primary);
    background-color: var(--secondary);
    color: var(--primary);
    border: 1px solid #222;
  }

  &__team-name {
    color: var(--secondary);
    font-size: 22px;
  }

  &__button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>