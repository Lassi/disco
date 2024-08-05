import { Pagination as MuiPagination } from "@mui/material";

import { useAppDispatch, useAppSelector } from "app/hooks";

import { selectPage, setPage } from "./paginationSlice";

type PaginationProps = {
  count: number;
  disabled?: boolean;
};

export const Pagination = ({
  count,
  disabled,
}: PaginationProps) => {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  return (
    <MuiPagination
      page={page}
      count={count}
      disabled={disabled}
      onChange={(_, page) => dispatch(setPage(page))}
    />
  );
};
