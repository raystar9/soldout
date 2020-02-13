import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity({name: "Schedules"})
export class Schedule extends BaseEntity {

    @PrimaryColumn({
        length: 25
    })
    userId: string;

    @PrimaryColumn({
        length: 7
    })
    artYmd: string

    @Column({
        type: "char",
        length: 4
    })
    taskId: string

    @Column({
        type: "char",
        length: 2
    })
    status: string
}
