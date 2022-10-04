export interface Movie {
    id: number;
    title: string;
    overview: string;
    images: Images;
    voteAverage: number;
    credits: Credits;
    tagline: string;
    runtime: number;
    releaseDate: string;
    genres: string[];
    productionCountries: string[];
}


export interface MovieSummary {
    id: number;
    title: string;
    images: Images;
    voteAverage: number;
    credits: Credits;
    details: Movie;
    releaseDate: string;
}

export interface Credits {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profilePath: string;
}

export interface CrewMember {
    id:number;
    name: string;
    job: string;
    profilePath: string;
}

export interface Images {
    posterPath: string;
    posterPathW92: string;
    posterPathW185: string;
    backdropPathW300: string;
    backdropPathW780: string;
    backdropPathW1280: string;
}