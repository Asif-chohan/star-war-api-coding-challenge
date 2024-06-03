import { Table, Tag } from "antd";
import { MOVIE } from "../../interfaces";

const { Column, ColumnGroup } = Table;

type MoviesProps = {
  movies: MOVIE[];
};

export default function Movies({ movies }: MoviesProps) {
  return (
    <Table dataSource={movies} bordered pagination={false} className="moviesTimeline">
      <Column title="Title of Movie" dataIndex="title" key="title" />
      <ColumnGroup title="Characters">
        <Column
          title="Count"
          dataIndex="charactersCount"
          key="charactersCount"
          align="right"
        />
        <Column
          title="List"
          dataIndex="characters"
          key="characters"
          render={(characters: string[]) => (
            <>
              {characters.map((character, index) => (
                <Tag color="blue" key={index}>
                  {character}
                </Tag>
              ))}
            </>
          )}
        />
      </ColumnGroup>

      <ColumnGroup title="Planets">
        <Column title="Count" dataIndex="planetsCount" key="planetsCount"    align="right"  />
        <Column
          title="List"
          dataIndex="planets"
          key="planets"
          render={(planets: string[]) => (
            <>
              {planets.map((planet, index) => (
                <Tag color="blue" key={index}>
                  {planet}
                </Tag>
              ))}
            </>
          )}
        />
      </ColumnGroup>
    </Table>
  );
}
