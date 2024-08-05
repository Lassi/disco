import { Masonry } from '@mui/lab';
import { Box, LinearProgress, Stack } from '@mui/material';

import { useAppSelector } from 'app/hooks';
import { Pagination } from 'features/pagination/pagination';
import { selectPage } from 'features/pagination/paginationSlice';
import { useGetArtworksQuery } from 'services/artic/artic';

import { ArtworkPreview } from './artwork-preview';
import { ErrorMessage } from './error-message';


export const ArtworkGallery = () => {
  const page = useAppSelector(selectPage);
  const { data, error, isFetching } = useGetArtworksQuery(page);

  if (error) {
    return (<ErrorMessage />);
  }

  return (
    <Box position="relative">
      {isFetching && (
        <Box
          position="absolute"
          left={0}
          top={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0, 0, 0, 0.5)"
        />
      )}
      {data && (
        <Stack alignItems="center" px={8} py={4}>
          <Masonry columns={4} spacing={6}>
            {data.data.map((artwork) => (
              <ArtworkPreview
                key={artwork.id}
                id={artwork.id}
                artist={artwork.artist_title}
                date={artwork.date_display}
                imageAlt={artwork.thumbnail?.alt_text}
                imageId={artwork.image_id}
                title={artwork.title}
              />
            ))}
          </Masonry>
          <Pagination count={data.pagination.total_pages} disabled={isFetching}/>
          {isFetching && (
            <Box
              position="fixed"
              left="0"
              right="0"
              bottom="0"
            >
              <LinearProgress/>
            </Box>
          )}
        </Stack>
      )}
    </Box>
  );
};
