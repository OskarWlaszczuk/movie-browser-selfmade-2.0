import { useRef } from "react";
import { CarouselList, CarouselTitle, CarouselTitleSection, CarouselWrapper, ShowMoreLink, ScrollButton } from "./styled";
import { PersonItem } from "../../aliases/interfaces/person.types";
import { MovieItem } from "../../aliases/interfaces/movie.types";
import { MediaTile } from "../MediaTile";

export type MediaType = "movie" | "person";
export type MediaListType = "top_rated" | "upcoming" | "now_playing" | "popular";
interface MediaCarouselProps {
  title: string;
  fullSectionLink: string;
  mediaList: PersonItem[] | MovieItem[];
}

export const MediaCarousel = ({ title, fullSectionLink, mediaList }: MediaCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const previousDirection = "left";
  const nextDirection = "right";

  const scroll = (direction: typeof previousDirection | typeof nextDirection) => {
    const scrollAmount = 300;
    containerRef.current?.scrollBy({
      left: direction === previousDirection ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <CarouselTitleSection>
        <CarouselTitle to={fullSectionLink}>{title}</CarouselTitle>
        <ShowMoreLink to={fullSectionLink}></ShowMoreLink>
      </CarouselTitleSection>
      <CarouselWrapper>
        <ScrollButton $previous onClick={() => scroll(previousDirection)}>{"<"}</ScrollButton>
        <CarouselList ref={containerRef}>
          {mediaList?.map(({ poster_path, title, id }) => (
            <MediaTile
              imagePath={poster_path}
              name={title}
              detailsRoute={`movie/${id}`}
            />
          ))}
        </CarouselList>
        <ScrollButton $next onClick={() => scroll(nextDirection)}>{">"}</ScrollButton>
      </CarouselWrapper>
    </div>
  );
};