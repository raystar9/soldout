import { scheduleBatSvc } from "service/batch/scheduleBatSvc";

export const run = async () => {
    const artGenesisDate: Date = new Date("2020/01/01");
    let artDate: number = (new Date().getTime() - artGenesisDate.getTime() )/ 1000 / 60/60;
    let artSleepDay: number = (0.75 - artDate) % 1;
    if(artSleepDay < 0) {
        artSleepDay += 1;
    }
    let timeoutMills = artSleepDay * 1000 * 60 * 60;
    console.log(timeoutMills);
    setTimeout(() => {
        setInterval(()=>{

        }, 1000*60*60);
    }, timeoutMills)
    scheduleBatSvc.getInstance().doSchedule("0001122").then(schedule => {
        console.log(schedule);
    })
    
}
