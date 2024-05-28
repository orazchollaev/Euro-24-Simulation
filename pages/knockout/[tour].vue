<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const db = useDBStore();

const nations = ref<any>(null);

let tourIndex = ref<number>(0);
let tour = route.params.tour as any;
tour = parseInt(tour);

const tierToTourMap = {
  16: 2,
  8: 3,
  4: 4,
  2: 5,
} as any;

if (tierToTourMap.hasOwnProperty(tour)) {
  const tier = tierToTourMap[tour];
  nations.value = db.nations.filter(item => item.tour === tier);
  tourIndex.value = tier + 2;
}

db.fixture[tourIndex.value] = [];

for (let i = tour - 1; i >= Math.floor(tour / 2); i--) {
  db.fixture[tourIndex.value].push({
    team_one: nations.value[i],
    team_two: nations.value[i - Math.floor(tour / 2)],
  })
}

const next = () => {
  for (const match of db.fixture[tourIndex.value]) {
    const winnerId = match.team_one.goals[tourIndex.value] > match.team_two.goals[tourIndex.value]
      ? match.team_one.id
      : match.team_two.id;

    const index = db.nations.findIndex(item => item.id === winnerId);
    db.nations[index].tour += 1;

    const nextTour = tour / 2;
    const destination = `/knockout/${nextTour}`;
    router.push(destination);
  }
}

</script>


<template>
  <div class="knockout-page">
    <div class="knockout-page__container">
      <ul class="knockout-page__match-list">
        <li class="knockout-page__match-item" v-for="match in db.fixture[tourIndex]">
          <Match :match="match" :index="tourIndex"></Match>
        </li>
      </ul>

      <div class="knockout-page__button-wrapper">
        <BaseButton size="medium" color="secondary" @click="next">Next</BaseButton>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.knockout-page {
  padding: 5px 0;

  &__container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__match-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
  }

  &__button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
}
</style>