import { status } from './status/status';
import { ICodeforcesClient } from '../../interfaces/codeforces-client.interface';

export const contest = (client: ICodeforcesClient) => ({
  status: status(client),
});
