import { LoadingOutlined, LayoutTwoTone } from "@ant-design/icons";
import { Timeline } from "antd";
import dayjs from "dayjs";
import { MOVIE } from "../../interfaces";

type MovieTimelineProps = {
  movies: MOVIE[];
};
function MovieTimeline({ movies }: MovieTimelineProps) {
  return (
    <>
      <Timeline mode={"right"}>
        {movies.map((movie, index) => {
          return (
            <Timeline.Item
              key={index}
              label={dayjs(movie.releaseDate).format("YYYY-MM-DD")}
            >
              {movie.title}
            </Timeline.Item>
          );
        })}
      </Timeline>
    </>
  );
}

export default MovieTimeline;
