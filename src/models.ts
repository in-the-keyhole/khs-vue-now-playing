export interface Movie {
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    backdropPathW1280: string;
    voteAverage: number;
    credits: object;
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
}