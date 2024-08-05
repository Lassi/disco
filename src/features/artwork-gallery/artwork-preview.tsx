import { Box, Typography } from "@mui/material";
import { buildImageSrc } from 'services/artic/images';

type ArtworkPreviewProps = {
  artist: string;
  date: string;
  imageAlt: string;
  imageId: string;
  title: string;
};

export const ArtworkPreview = ({
  artist,
  date,
  imageAlt,
  imageId,
  title,
}: ArtworkPreviewProps) => (
  <Box>
    <img
      alt={imageAlt}
      src={buildImageSrc(imageId, 'preview')}
      style={{ width: '100%'}}
    />
    <Typography variant="h6">{title}, {date}</Typography>
    <Typography color="GrayText" variant="subtitle1">{artist}</Typography>
  </Box>
);
