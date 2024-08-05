import { Typography } from "@mui/material";
import { buildImageSrc } from 'services/artic/images';

import { RoutedLink } from "lib/routed-link/routed-link";
import { routes } from "app/routes";

type ArtworkPreviewProps = {
  id: number;
  artist: string;
  date: string;
  imageAlt?: string;
  imageId: string;
  title: string;
};

export const ArtworkPreview = ({
  id,
  artist,
  date,
  imageAlt,
  imageId,
  title,
}: ArtworkPreviewProps) => (
  <RoutedLink to={routes.artworkDetails(id)}>
    <img
      alt={imageAlt ?? title}
      src={buildImageSrc(imageId, 'preview')}
      style={{ width: '100%'}}
    />
    <Typography variant="h6">{title}, {date}</Typography>
    <Typography color="GrayText" variant="subtitle1">{artist}</Typography>
  </RoutedLink>
);
