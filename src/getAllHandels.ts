import { CodeforcesClient } from './CodeforcesClient';
const  fs  = require('fs');
import {Root} from './interfaces/contest.status.interface'

// Filestream
var logger = fs.createWriteStream('handles.xml', {
    flags: 'a' // 'a' means appending (old data will be preserved)
})
const handleFormat = async(handle:string)=>{
    const arr:string[]=[
        '<team>',
        `<id> ${1} </id>`,
        `<name> ${handle} </name>`,
        `<university> AinShames </university>`,
        `<nationality> Egyption </nationality>`,
        `<icpc-id> ${1} </icpc-id>`,
        '</team>',
    ];
    arr.forEach(async element=>{
        await logger.write(element);
    });
}

const exportHandles = (handleSet:Set<string>)=>{
    // export handles in xml File
    handleSet.forEach(async handle =>{   
        await handleFormat(handle);
    });
}
export const GetAllHandles = async(key:string,secret:string,contestId:string)=>{
    const client = new CodeforcesClient(key,secret);
    var handleSet:Set<string> = new Set();
    const root =  await client.callMethod("contest.status", {contestId:contestId}).then((data) => {
        return data as Root;
    });
    await root.result.forEach( status =>{
        status.author.members.forEach(object => {
            handleSet.add(object.handle);
        })
    })
    exportHandles(handleSet);
};
export default CodeforcesClient;