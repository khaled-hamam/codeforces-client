import { ApiResponse } from './api-response.interface';

export interface ICodeforcesClient {
  callMethod<U, V>(method: string, params: U): Promise<ApiResponse<V>>;
}
