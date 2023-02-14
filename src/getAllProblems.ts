import { CodeforcesClient } from './CodeforcesClient';
import {Root} from './interfaces/contest-problems-interface'


export const GetAllProblems = async(key:string,secret:string,contestId:string)=>{
    const client = new CodeforcesClient(key,secret);
    var problems:string[]=[];
    const root =  await client.callMethod("contest.standings", {contestId:contestId}).then((data) => {
        return data as Root;
    });

    await root.result.problems.forEach(problem=>{
        problems.push(problem.name);
    });
    return problems;
}
export default CodeforcesClient;