import  {
  PaginationState,
  paginationReducer,
  setPage,
} from '../paginationSlice';

describe('paginationReducer', () => {
  const initialState: PaginationState = {
    page: 42,
  };

  it('should start with the initial state', () => {
    expect(paginationReducer(undefined, { type: 'unknown' })).toEqual({
      page: 1,
    });
  });

  it('should handle setPage', () => {
    const actual = paginationReducer(initialState, setPage(21));
    expect(actual.page).toEqual(21);
  });
});
