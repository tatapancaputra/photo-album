export interface Page<T> {
  meta: {
    total: number;
    page: number;
    limit: number;
  };
  data: T[];
}
