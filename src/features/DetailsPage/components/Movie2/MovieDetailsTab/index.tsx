import {DetailedMovieItem} from "../../../../../common/aliases/interfaces/movie.types";
import {OrUndefined} from "../../../../../common/aliases/types/OrUndefined";
import {
  EntityLinkData,
  EntityLinksList,
} from "../../../../../common/components/EntityLinksList";

interface MovieDetailsTabProps {
  movieDetails: OrUndefined<DetailedMovieItem>;
}

export const MovieDetailsTab = ({movieDetails}: MovieDetailsTabProps) => {
  interface Config {
    name: string;
    value: OrUndefined<EntityLinkData[]>;
  }

  const config: Config[] = [
    {
      name: "studios",
      value: movieDetails?.production_companies.map(({name, id}) => ({
        name,
        routePath: `/studio/${id}`,
      })),
    },
    {
      name: "countries",
      value: movieDetails?.production_countries.map(({name, id}) => ({
        name,
        routePath: `/film/country/${id}`,
      })),
    },
    {
      name: "spoken languages",
      value: movieDetails?.spoken_languages.map(({english_name}) => ({
        name: english_name,
        routePath: `/film/language/${english_name}`,
      })),
    },
  ];

  return (
    <>
      {config.map(({name, value}) => (
        <div key={name}>
          <h3>{name}</h3>
          <EntityLinksList entities={value} />
        </div>
      ))}
    </>
  );
};
