const dotenv = require('dotenv');
import { stat } from 'fs';
import { CodeforcesClient } from './CodeforcesClient';
import {Result,Member, Root} from './interfaces/contest.status.interface'
import {GetAllHandles} from './getAllHandels';

dotenv.config({path:'../.env'});
const key:string = process.env.KEY as string;
const secret:string =process.env.SECRET as string;
const contestId:string = process.env.CONTEST_ID as string;


// Run Your functions Here
GetAllHandles(key,secret,contestId);


export default CodeforcesClient;