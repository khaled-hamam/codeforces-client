type ProblemType = 'PROGRAMMING' | 'QUESTION';

export interface Problem {
  contestId: number;
  problemsetName?: string;
  index: string;
  name: string;
  type: ProblemType;
  points?: number;
  rating?: number;
  tags: string[];
}
