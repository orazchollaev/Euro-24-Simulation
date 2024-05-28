export interface Nation {
    id: number
    name: string
    abbreviation: string
    flag: string
    // color: string

    goals: number[]
    totalScored: number
    totalConceded: number
    average: number
    points: number
    tour: number

    group: string
    groupRanking: number
    isBestThirdPlace: boolean

    rivalTeams: number[]
}

// 21.05.2024 14:04