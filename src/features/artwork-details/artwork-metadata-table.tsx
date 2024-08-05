import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

type ArtworkMetadataTableProps = {
  artist: string;
  creditLine: string;
  date: string;
  dimensions: string;
  inscriptions?: string;
  medium: string;
  place: string;
  title: string;
};

export const ArtworkMetadataTable = ({
  artist,
  creditLine,
  date,
  dimensions,
  inscriptions,
  medium,
  place,
  title,
}: ArtworkMetadataTableProps) => (
  <TableContainer>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell><Typography fontWeight="fontWeightBold">Artist</Typography></TableCell>
          <TableCell><Typography color="GrayText">{artist}</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography fontWeight="fontWeightBold">Title</Typography></TableCell>
          <TableCell><Typography color="GrayText">{title}</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography fontWeight="fontWeightBold">Place</Typography></TableCell>
          <TableCell><Typography color="GrayText">{place}</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography fontWeight="fontWeightBold">Date</Typography></TableCell>
          <TableCell><Typography color="GrayText">{date}</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography fontWeight="fontWeightBold">Medium</Typography></TableCell>
          <TableCell><Typography color="GrayText">{medium}</Typography></TableCell>
        </TableRow>
        {inscriptions && (
          <TableRow>
            <TableCell><Typography fontWeight="fontWeightBold">Inscriptions</Typography></TableCell>
            <TableCell><Typography color="GrayText">{inscriptions}</Typography></TableCell>
          </TableRow>
        )}
        <TableRow>
          <TableCell><Typography fontWeight="fontWeightBold">Dimensions</Typography></TableCell>
          <TableCell><Typography color="GrayText">{dimensions}</Typography></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Typography fontWeight="fontWeightBold">Credit Line</Typography></TableCell>
          <TableCell><Typography color="GrayText">{creditLine}</Typography></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
