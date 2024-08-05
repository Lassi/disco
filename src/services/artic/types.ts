type Pagination = {
  current_page: number;
  total_pages: number;
};

type GetArtworksRawData = {
  id: number;
  artist_title: string;
  image_id: string;
  date_display: string;
  thumbnail: {
    alt_text: string;
  };
  title: string;
};

export type GetArtworksResponse = {
  config: unknown;
  data: GetArtworksRawData[];
  info: unknown;
  pagination: Pagination;
};
