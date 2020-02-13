import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity({name: "Users"})
export class User extends BaseEntity {

    @PrimaryColumn({
        length: 25
    })
    userId: string

    @Column()
    name: string
}
