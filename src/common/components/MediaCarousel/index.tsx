import { useRef } from "react";
import {
  CarouselList,
  CarouselTitle,
  CarouselTitleSection,
  CarouselWrapper,
  ShowMoreLink,
  ScrollButton
} from "./styled";
import { MediaTile, MediaTileProps } from "../MediaTile";
import { MediaListItem } from "../../aliases/types/MediaListItem";

interface MediaCarouselProps<MediaItemType extends MediaListItem> {
  mediaList?: MediaItemType[];
  tileData: (mediaItem: MediaItemType) => MediaTileProps;
  title: string;
  fullSectionLink: string;
}

export const MediaCarousel = <MediaItemType extends MediaListItem>({
  mediaList,
  tileData,
  title,
  fullSectionLink
}: MediaCarouselProps<MediaItemType>) => {
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
          {mediaList?.map((mediaItem) => (
            <MediaTile
              {...tileData(mediaItem)}
            />
          ))}
        </CarouselList>
        <ScrollButton $next onClick={() => scroll(nextDirection)}>{">"}</ScrollButton>
      </CarouselWrapper>
    </div>
  );
};