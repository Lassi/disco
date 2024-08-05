type Pagination = {
  total_pages: number;
};

type GetArtworksRawData = {
  id: number;
  artist_title: string;
  image_id: string;
  date_display: string;
  thumbnail?: {
    alt_text: string;
  };
  title: string;
};

export type GetArtworksResponse = {
  data: GetArtworksRawData[];
  pagination: Pagination;
};

type GetArtworkDetailsRawData = {
  artist_display: string;
  credit_line: string;
  date_display: string;
  description: string;
  dimensions: string;
  image_id: string;
  inscriptions?: string;
  main_reference_number: string;
  medium_display: string;
  place_of_origin: string;
  thumbnail?: {
    alt_text: string;
  };
  title: string;
};

export type GetArtworkDetailsResponse = {
  data: GetArtworkDetailsRawData;
};
