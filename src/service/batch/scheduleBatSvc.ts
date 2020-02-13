import { Schedule } from "entity/Schedule";
import { User } from "entity/User";
import * as typeorm from "typeorm";

export class scheduleBatSvc {
    private static _instance: scheduleBatSvc;

    public static getInstance() {
        return this._instance || (this._instance = new scheduleBatSvc())
    }
    private constructor() { }
    doSchedule = async (artYmd: String) => {
        return typeorm.getManager()
            .createQueryBuilder(Schedule, "S")
            .addSelect("S.userId")
            .addSelect("U.name")
            .innerJoin(User, "U", "S.userId = U.userId")
            .getRawMany();

    }
}