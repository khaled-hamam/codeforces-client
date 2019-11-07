import { Member } from './member.interface';

type ParticipantType = 'CONTESTANT' | 'PRACTICE' | 'VIRTUAL' | 'MANAGER' | 'OUT_OF_COMPETITION';

export interface Party {
  contestId?: number;
  members: Member[];
  participantType: ParticipantType;
  teamId?: number;
  teamName?: string;
  ghost: boolean;
  room?: number;
  startTimeSeconds?: number;
}
