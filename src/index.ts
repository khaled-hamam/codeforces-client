const dotenv = require('dotenv');
import { stat } from 'fs';
import { CodeforcesClient } from './CodeforcesClient';
import {Result,Member, Root} from './interfaces/contest.status.interface'
import {GetAllHandles} from './getAllHandels';
import {GetAllProblems} from './getAllProblems';

dotenv.config({path:'../.env'});
const key:string = process.env.KEY as string;
const secret:string =process.env.SECRET as string;
const contestId:string = process.env.CONTEST_ID as string;

// Run Your functions Here
//#### UNCOMMENT TO START ####

//GetAllHandles(key,secret,contestId);
// GetAllProblems(key,secret,contestId).then(data=>{
//     console.log(data);
// });

export default CodeforcesClient;