export type MOVIE = {
  characters: string[];
  planets: string[];
  charactersCount: number;
  planetsCount: number;
  title: string;
  releaseDate: Date;
};

export type FETCH_MOVIES_RES = {
  title: string;
  releaseDate: Date;
  planets: {
    count: number;
    results: PLANETS[];
  };
  characters: {
    count: number;
    results: CHARACTERS[];
  };
};

export type PLANETS = {
  name: string;
};

export type CHARACTERS = {
  name: string;
};
