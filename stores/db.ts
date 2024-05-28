import { defineStore } from 'pinia'
import type { Nation } from '~/types/Nation'

export const useDBStore = defineStore('db', () => {


  const nations = ref<Nation[]>([

    // A Group

    // Germany
    {
      id: 1,
      name: "Germany",
      abbreviation: "GER",
      flag: "assets/flags/germany.png",

      group: "A",
      groupRanking: 1,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 2, 4 ]
    },

    // Scotland
    {
      id: 2,
      name: "Scotland",
      abbreviation: "SCO",
      flag: "assets/flags/scotland.png",

      group: "A",
      groupRanking: 2,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 3 ]
    },

    // Hungary
    {
      id: 3,
      name: "Hungary",
      abbreviation: "HUN",
      flag: "assets/flags/hungary.png",

      group: "A",
      groupRanking: 3,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 1 ]
    },

    // Switzerland
    {
      id: 4,
      name: "Switzerland",
      abbreviation: "SWI",
      flag: "assets/flags/switzerland.png",

      group: "A",
      groupRanking: 4,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 2, 3 ]
    },

    // B Group

    // Spain
    {
      id: 5,
      name: "Spain",
      abbreviation: "SPN",
      flag: "assets/flags/spain.png",

      group: "B",
      groupRanking: 1,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 6, 8 ]
    },

    // Croatia
    {
      id: 6,
      name: "Croatia",
      abbreviation: "CRO",
      flag: "assets/flags/croatia.png",

      group: "B",
      groupRanking: 2,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 7 ]
    },

    // Italy
    {
      id: 7,
      name: "Italy",
      abbreviation: "ITA",
      flag: "assets/flags/italy.png",

      group: "B",
      groupRanking: 3,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 5 ]
    },

    // Albania
    {
      id: 8,
      name: "Albania",
      abbreviation: "ALB",
      flag: "assets/flags/albania.png",

      group: "B",
      groupRanking: 4,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 6, 7 ]
    },

    // C Group

    // Slovenia
    {
      id: 9,
      name: "Slovenia",
      abbreviation: "SLN",
      flag: "assets/flags/slovenia.png",

      group: "C",
      groupRanking: 1,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 10, 12 ]
    },

    // Denmark
    {
      id: 10,
      name: "Denmark",
      abbreviation: "DEN",
      flag: "assets/flags/denmark.png",

      group: "C",
      groupRanking: 2,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 11 ]
    },

    // Serbia
    {
      id: 11,
      name: "Serbia",
      abbreviation: "SRB",
      flag: "assets/flags/serbia.png",

      group: "C",
      groupRanking: 3,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 9 ]
    },

    // England
    {
      id: 12,
      name: "England",
      abbreviation: "ENG",
      flag: "assets/flags/england.png",

      group: "C",
      groupRanking: 4,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 10, 11 ]
    },

    // D Group

    // Poland
    {
      id: 13,
      name: "Poland",
      abbreviation: "POL",
      flag: "assets/flags/poland.png",

      group: "D",
      groupRanking: 1,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 14, 16 ]
    },

    // Netherlands
    {
      id: 14,
      name: "Netherlands",
      abbreviation: "NED",
      flag: "assets/flags/netherlands.png",

      group: "D",
      groupRanking: 2,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 15 ]
    },

    // Austria
    {
      id: 15,
      name: "Austria",
      abbreviation: "AUT",
      flag: "assets/flags/austria.png",

      group: "D",
      groupRanking: 3,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 13 ]
    },

    // France
    {
      id: 16,
      name: "France",
      abbreviation: "FRA",
      flag: "assets/flags/france.png",

      group: "D",
      groupRanking: 4,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 15, 14 ]
    },

    
    // E Group

    // Belgium
    {
      id: 17,
      name: "Belgium",
      abbreviation: "BEL",
      flag: "assets/flags/belgium.png",

      group: "E",
      groupRanking: 1,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 18, 20 ]
    },

    // Slovakia
    {
      id: 18,
      name: "Slovakia",
      abbreviation: "SLO",
      flag: "assets/flags/slovakia.png",

      group: "E",
      groupRanking: 2,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 19 ]
    },

    // Romania
    {
      id: 19,
      name: "Romania",
      abbreviation: "ROM",
      flag: "assets/flags/romania.png",

      group: "E",
      groupRanking: 3,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 17 ]
    },

    // Ukraine
    {
      id: 20,
      name: "Ukraine",
      abbreviation: "UKR",
      flag: "assets/flags/ukraine.png",

      group: "E",
      groupRanking: 4,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 18, 19 ]
    },

    // F Group

    // Turkiye
    {
      id: 21,
      name: "Turkiye",
      abbreviation: "TUR",
      flag: "assets/flags/turkiye.png",

      group: "F",
      groupRanking: 1,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 22, 24 ]
    },

    // Georgia
    {
      id: 22,
      name: "Georgia",
      abbreviation: "GEO",
      flag: "assets/flags/georgia.png",

      group: "F",
      groupRanking: 2,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 23 ]
    },

    // Czech
    {
      id: 23,
      name: "Czech",
      abbreviation: "CZE",
      flag: "assets/flags/czech.png",

      group: "F",
      groupRanking: 3,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 21 ]
    },

    // Portugal
    {
      id: 24,
      name: "Portugal",
      abbreviation: "POR",
      flag: "assets/flags/portugal.png",

      group: "F",
      groupRanking: 4,
      isBestThirdPlace: false,

      points: 0,
      tour: 1,
      goals: [],
      average: 0,
      totalConceded: 0,
      totalScored: 0,
      
      rivalTeams: [ 22, 23 ]
    }
  ])

  const groups = ref<string[]>(["A", "B", "C", "D", "E", "F"]);

  const fixture = ref<any[]>([]);

  return {
    nations,
    groups,
    fixture
  }
})
