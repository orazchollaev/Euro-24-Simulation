<script lang="ts" setup>
import type { Nation } from '~/types/Nation';


const route = useRoute();
const db = useDBStore();

const nations = db.nations.filter(item => item.group === route.params.group);
const fixture = ref<any[]>([]);

for (let nation of nations) {
  for (let rivalTeamID of nation.rivalTeams) {
    const rivalTeam = nations.filter(item => item.id === rivalTeamID);

    fixture.value.push({
      team_one: nation,
      team_two: rivalTeam[0]
    })
  }
}

const save = () => {

  for(let i = 0; i < 4; i++){
    fixture.value[i].team_one.points = 0;
    fixture.value[i].team_two.points = 0;
    
    fixture.value[i].team_one.totalScored = 0;
    fixture.value[i].team_two.totalScored = 0;

    fixture.value[i].team_one.totalConceded = 0;
    fixture.value[i].team_two.totalConceded = 0;

    fixture.value[i].team_one.average = 0
    fixture.value[i].team_two.average = 0
  }

  for(const match in fixture.value){
    const result = matchResult(fixture.value[match].team_one.goals[match], fixture.value[match].team_two.goals[match]);

    fixture.value[match].team_one.totalScored = fixture.value[match].team_one.goals.reduce((a: number, b : number) => a + b, 0);
    fixture.value[match].team_two.totalScored = fixture.value[match].team_two.goals.reduce((a: number, b : number) => a + b, 0);

    fixture.value[match].team_one.totalConceded += fixture.value[match].team_two.goals[match];
    fixture.value[match].team_two.totalConceded += fixture.value[match].team_one.goals[match];

    fixture.value[match].team_one.average = fixture.value[match].team_one.totalScored - fixture.value[match].team_one.totalConceded;
    fixture.value[match].team_two.average = fixture.value[match].team_two.totalScored - fixture.value[match].team_two.totalConceded;

    if(result === 0){
      fixture.value[match].team_one.points += 1;
      fixture.value[match].team_two.points += 1;
    }else if(result === 1){
      fixture.value[match].team_one.points += 3;
    }else if (result === 2){
      fixture.value[match].team_two.points += 3;
    }
  }

  goTo('/group-page')
}

</script>


<template>

  <div class="fixture">
    <div class="fixture__container">
      <div class="fixture__match" v-for="(match, index) in fixture">
        <Match :match="match" :index="index"></Match>
      </div>

      <div class="fixture__button-wrapper">
        <BaseButton size="small" color="secondary" @click="save">Save</BaseButton>
      </div>
    </div>
  </div>  
</template>

<style lang="scss" scoped>

.fixture{

  padding-top: 20px;

  &__container{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__button-wrapper{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}

</style>