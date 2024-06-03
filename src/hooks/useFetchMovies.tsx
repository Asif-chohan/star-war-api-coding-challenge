import { gql } from "@apollo/client";
import React, { useState } from "react";
import client from "../config/apolloClient";
import { FETCH_MOVIES_RES, MOVIE } from "../interfaces";

const MOVIES_QUERY = gql`
  query AllFilms {
    films(order: [releaseDate_ASC]) {
      results {
        title
        releaseDate
        characters {
          count
          results {
            name
          }
        }
        planets {
          count
          results {
            name
          }
        }
      }
    }
  }
`;

export default function useFetchMovies() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<MOVIE[]>([] as MOVIE[]);

  const parseMoviesData = (data: FETCH_MOVIES_RES[]): MOVIE[] => {
    const movies = data?.map((movie: any) => {
      const characters = movie?.characters?.results?.map(
        (character: any) => character?.name
      );
      const planets = movie?.planets?.results?.map(
        (planet: any) => planet?.name
      );
      return {
        ...movie,
        characters,
        planets,
        charactersCount: movie?.characters?.count,
        planetsCount: movie?.planets?.count,
      };
    });
    return movies;
  };

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await client.query({
        query: MOVIES_QUERY,
      });

      const movies = parseMoviesData(
        res?.data?.films?.results as FETCH_MOVIES_RES[]
      );

      setMovies(movies);
    } catch (err) {
      console.log("error while", err);
      alert("error while fetching movies");
    } finally {
      setLoading(false);
    }
  };

  return { loading, movies, fetchMovies };
}
