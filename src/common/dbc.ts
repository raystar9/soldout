import { Connection, createConnection } from "typeorm";

export async function connect() {
    const db: Connection = await createConnection();
    console.log("DB Connected!")
};