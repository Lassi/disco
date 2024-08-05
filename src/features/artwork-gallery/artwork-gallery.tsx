import { Masonry } from '@mui/lab';
import { Box, LinearProgress, Stack } from "@mui/material";

import { useGetArtworksQuery } from "services/artic/artic";

import { ArtworkPreview } from './artwork-preview';
import { ErrorMessage } from './error-message';

export const ArtworkGallery = () => {
  const { data, error, isLoading } = useGetArtworksQuery();

  if (error) {
    return (<ErrorMessage />);
  }

  return (
    <Box position="relative">
      {isLoading && (
        <Box position="absolute" width="100%">
          <LinearProgress />
        </Box>
      )}
      {data && (
        <Stack alignItems="center" px={8} py={4}>
          <Masonry columns={4} spacing={6}>
            {data.data.map((artwork) => (
              <ArtworkPreview
                key={artwork.id}
                artist={artwork.artist_title}
                date={artwork.date_display}
                imageAlt={artwork.thumbnail.alt_text}
                imageId={artwork.image_id}
                title={artwork.title}
              />
            ))}
          </Masonry>
        </Stack>
      )}
    </Box>
  );
};
