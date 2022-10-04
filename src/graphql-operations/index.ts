import {gql} from "graphql-tag";
import type {Credits, Images, Movie} from "@/models";

export const NOW_PLAYING = gql`
  query NowPlaying {
    nowPlaying {
      id
      title
      images{
        posterPath
        posterPathW185
      }
      voteAverage
      credits{
                cast{
                    id
                    name
                    character
                    profilePath
                }
            }
      releaseDate
    }
  }
`;

export const MOVIE_QUERY = gql`query movie($id: ID!) {
        movie(id: $id) {
          id
          title
          overview
          images{
            posterPath
            posterPathW185
            backdropPathW1280
          }
          voteAverage
          tagline
          runtime
          releaseDate
          genres
          productionCountries
          credits{
                cast{
                    id
                    name
                    character
                    profilePath
                }
            }
          
          }
      }`;