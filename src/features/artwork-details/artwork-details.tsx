import { Box, LinearProgress, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

import { useGetArtworkDetailsQuery } from "services/artic/artic";

import { ArtworkSummary } from "./artwork-summary";
import { ErrorMessage } from "./error-message";
import { HeroArtwork } from "./hero-artwork";
import { ArtworkMetadataTable } from "./artwork-metadata-table";

export const ArtworkDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetArtworkDetailsQuery(id!);

  if (error) {
    return (<ErrorMessage/>);
  }

  return (
    <Box position="relative">
      <>
      {isLoading && (
        <Box position="absolute" width="100%">
          <LinearProgress />
        </Box>
      )}
      {data && (
        <Stack>
          <HeroArtwork
            imageAlt={data.data.thumbnail.alt_text}
            imageId={data.data.image_id}
          />
          <Stack px={50} py={5} spacing={3}>
            <ArtworkSummary
              artist={data.data.artist_display}
              date={data.data.date_display}
              description={data.data.description}
              title={data.data.title}
            />
            <ArtworkMetadataTable
              artist={data.data.artist_display}
              creditLine={data.data.credit_line}
              date={data.data.date_display}
              dimensions={data.data.dimensions}
              inscriptions={data.data.inscriptions}
              medium={data.data.medium_display}
              place={data.data.place_of_origin}
              title={data.data.title}
            />
          </Stack>
        </Stack>
      )}
      </>
    </Box>
  );
};
