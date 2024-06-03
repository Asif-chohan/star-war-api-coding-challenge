import { Button } from "antd";
import Movies from "./movies";
import useFetchMovies from "../../hooks/useFetchMovies";
import { styles } from "./styles";
import MovieTimeline from "./movieTimeline";

export default function StarWarList() {
  const { loading, movies, fetchMovies } = useFetchMovies();
  console.log("movies", movies);
  return (
    <div style={styles.movieTableCont}>
      <div style={styles.fetchBtnCont}>
        <Button loading={loading} type="primary" onClick={fetchMovies}>
          {loading? "Loading" : "Load now"}
        </Button>
      </div>

      <div style={styles.tableCont}>
        <Movies movies={movies} />
      </div>
      {movies?.length > 0 && (
        <div style={styles.timelineCont}>
          <h2>Timeline</h2>
          <MovieTimeline movies={movies} />
        </div>
      )}
    </div>
  );
}
