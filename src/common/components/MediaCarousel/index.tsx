import { useRef } from "react";
import { CarouselList, CarouselWrapper, ScrollButton } from "./styled";
import { MoviePicture } from "../../../features/DetailsPage/components/Person2/MoviesGridSection/styled";
import { NavLink } from "react-router-dom";
import { apiUrls, pictureWidths } from "../../constants/pictureConfigs";

interface MediaCarouselProps {
  media: any[];
}

export const MediaCarousel = ({ media }: MediaCarouselProps) => {
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
    <CarouselWrapper>
      <ScrollButton $previous onClick={() => scroll(previousDirection)}>{"<"}</ScrollButton>
      <CarouselList ref={containerRef}>
        {media.map(({ poster_path, title, id }) => (
          <NavLink to={`movie/${id}`}>
            <MoviePicture src={`${apiUrls.image}${pictureWidths.tile}${poster_path}`} alt={title} />
          </NavLink>
        ))}
      </CarouselList>
      <ScrollButton $next onClick={() => scroll(nextDirection)}>{">"}</ScrollButton>
    </CarouselWrapper>
  );
};