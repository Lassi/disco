import { Box } from "@mui/material";

import { buildImageSrc, imageFullWidth } from "services/artic/images";

type HeroArtworkProps = {
  imageAlt: string;
  imageId: string;
};

export const HeroArtwork = ({
  imageAlt,
  imageId,
}: HeroArtworkProps) => (
  <Box display="flex" justifyContent="center" p={8} bgcolor="lightgrey">
    <img
      alt={imageAlt}
      src={buildImageSrc(imageId, 'full')}
      style={{ maxWidth: imageFullWidth}}
    />
  </Box>
);
