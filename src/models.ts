export interface Movie {
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    backdropPathW1280: string;
    voteAverage: number;
    credits: Credits;
}

export interface Credits {
    id: number;
    cast: Cast;
    crew: Crew;
}

export interface Cast {
    id: number;
    name: string;
    character: string;
    profilePath: string;
}

export interface Crew {
    id:number;
    name: string;
    job: string;
    profilePath: string;
}