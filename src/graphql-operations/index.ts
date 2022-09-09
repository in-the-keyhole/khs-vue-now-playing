import { gql } from "graphql-tag";

export const NOW_PLAYING = gql`
  query NowPlaying {
    nowPlaying {
      id
      title
      overview
      posterPath
    }
  }
`;

export const MOVIE_QUERY = gql
    `query movie($id: ID!) {
        movie(id: $id) {
          id
          title
          overview
          posterPath
          backdropPathW1280
          voteAverage
          }
      }`;