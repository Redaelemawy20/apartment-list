export type ApiResponse<T> = T;
export type PostApiResponse<T> = ApiResponse<{ data: T; message: string }>;
export type IdsResponse = ApiResponse<{ _id: string }[]>;
