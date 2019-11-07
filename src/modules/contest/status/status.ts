import { ICodeforcesClient } from '../../../interfaces/codeforces-client.interface';
import { Submission } from '../../../interfaces/submission.interface';

type ContestStatusParams = {
  contestId: string;
  handle?: string;
  from?: number;
  count?: number;
};

export const status = (client: ICodeforcesClient) => async (params: ContestStatusParams) => {
  return client.callMethod<ContestStatusParams, Submission[]>('contest.status', params);
};
