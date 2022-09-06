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

const MOVIE_QUERY = gql
    `movie($id: ID!) {
        movie(id: $id) {
          id
          title
          overview
          posterPath
          backdropPathW1280
          }
      }`;