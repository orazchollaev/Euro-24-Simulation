import type { Nation } from "~/types/Nation";

export default (nations: Nation[]) => {
  return nations.sort((a: Nation, b: Nation) : any => {
    if(a.points !== undefined){

      if(a.points !== b.points)
        return b.points - a.points;
      else if(a.average !== b.average)
        return b.average - a.average
      else
        return b.totalScored - a.totalScored
    }

    return a.id - b.id;
  })
}