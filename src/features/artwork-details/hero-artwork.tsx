import { Box } from '@mui/material';

import { buildImageSrc, imageFullWidth } from 'services/artic/images';

type HeroArtworkProps = {
  imageAlt?: string;
  imageId: string;
  title: string;
};

export const HeroArtwork = ({
  imageAlt,
  imageId,
  title,
}: HeroArtworkProps) => (
  <Box display="flex" justifyContent="center" p={8} bgcolor="lightgrey">
    <img
      alt={imageAlt ?? title}
      src={buildImageSrc(imageId, 'full')}
      style={{ maxWidth: imageFullWidth}}
    />
  </Box>
);
