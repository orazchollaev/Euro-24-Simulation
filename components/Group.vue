<script lang="ts" setup>

import BaseButton from './Base/BaseButton.vue';
import BaseTitle from './Base/BaseTitle.vue';


const props = defineProps({
  group: {
    type: String
  }
})

const db = useDBStore()

let nations = db.nations.filter(item => item.group === props.group);

nations.forEach(item => {
  item.isBestThirdPlace = false;
  item.tour = 1;

  if(item.groupRanking <= 2)
    item.tour = 2;
})


nations = setTeamRanking(nations);
for(let i = 0; i < nations.length; i++){
  nations[i].groupRanking = i + 1;
}

let bestThirds = db.nations.filter(nation => nation.groupRanking === 3);

bestThirds = setTeamRanking(bestThirds);

for(let i = 0; i < bestThirds.length - 2; i++){
  if(nations[2].id === bestThirds[i].id){
    nations[2].isBestThirdPlace = true;
    nations[2].tour = 2;
    break;
  }
}

console.log(nations)

</script>

<template>
  <div class="group">
    <BaseTitle color="secondary" size="small">{{ props.group }}</BaseTitle>
    <table class="group__table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>GS</th>
          <th>GC</th>
          <th>AV.</th>
          <th>P.</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(nation, index) in nations" :key="nation.name" :class="[{ 'first-and-second': index >= 0 && index <= 1 }, { 'third': nation.isBestThirdPlace === true }]">
          <td>{{ nation.groupRanking  }}</td>
          <td style="display: flex; align-items: center; justify-content: flex-start; text-align: left; margin-left: auto; gap: 10px; max-width: 170px;"> <img :src="`_nuxt/${nation.flag}`" class="group__table-img"> {{ nation.name }}</td>
          <td>{{ nation.totalScored || 0 }}</td>
          <td>{{ nation.totalConceded || 0}}</td>
          <td>{{ nation.average || 0 }}</td>
          <th>{{ nation.points || 0 }}</th>
        </tr>
      </tbody>
    </table>

    <div class="group__button-wrapper">
      <BaseButton color="secondary" size="small" @click="goTo(`/group-fixtures/${props.group}`)">Fixture</BaseButton>
    </div>
</div>
</template>

<style lang="scss" scoped>
.group{

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__table{
    width: 100%;
    aspect-ratio: 1.8; 
    text-align: center;
    border: 2px solid black;
    border-radius: 16px;
    padding: 10px 8px;
    color: #fff;
    box-shadow: 6px 6px 20px #222;
  }

  &__table-img{
    width: 30px;
    height: 30px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  &__button-wrapper{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .first-and-second{
    color: greenyellow;
  }

  .third{
    color: #a8c4ff;
  }

}
</style>