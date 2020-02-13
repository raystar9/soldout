import { User } from "../entity/User"
import { timeout } from "../common/exception"

export class userInfoSvc {

    private static _instance: userInfoSvc;

    private constructor() {}

    public static getInstance(): userInfoSvc {
        return this._instance || (this._instance = new userInfoSvc());
    }

    public async getUser(userId: string): Promise<{}> {

        const user: User = await User.findOne(userId)

        return JSON.stringify(user);
    }
}