export interface IBoss {
    name:string,
    difficulty: {
        easy: number,
        normal: number,
        hard: number,
        chaos: number,
        extreme: number
    },
    image: string
}