const home = () => '/';

const artworkGallery = () => '/artworks';

const artworkDetails = (id: number) => `/artworks/${id}`;

export const routes = {
  artworkDetails,
  artworkGallery,
  home,
};
