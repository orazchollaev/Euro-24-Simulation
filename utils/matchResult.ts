import type { Nation } from "~/types/Nation";

export default (teamOne : Nation, teamTwo : Nation) => {

  if(teamOne === teamTwo) return 0;
  if(teamOne > teamTwo) return 1;
  if(teamOne < teamTwo) return 2;
}
