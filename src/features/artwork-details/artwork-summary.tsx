import { Typography } from "@mui/material";

type ArtworkSummaryProps = {
  artist: string;
  date: string;
  description: string;
  title: string;
};

export const ArtworkSummary = ({
  artist,
  date,
  title,
  description,
}: ArtworkSummaryProps) => (
  <>
    <Typography variant="h4">{title}</Typography>
    <Typography color="GrayText">{date}</Typography>
    <Typography color="GrayText">{artist}</Typography>
    <Typography dangerouslySetInnerHTML={{ __html: description }}/>
  </>
);