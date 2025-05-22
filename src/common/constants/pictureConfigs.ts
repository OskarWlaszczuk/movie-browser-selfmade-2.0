export const apiUrls = {
    base: "https://api.themoviedb.org/3",
    image: "https://image.tmdb.org/t/p/"
};

export const pictureWidths = {
    backdrop: "original",
    tile: "w500",
} as const;

export type PictureWidth = typeof pictureWidths[keyof typeof pictureWidths];

export const getInvalidPictureUrl = (pictureWidths: PictureWidth) => `${apiUrls.image}${pictureWidths}null`;