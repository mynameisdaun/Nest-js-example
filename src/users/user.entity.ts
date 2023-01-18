import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    private _id: number;

    @Column()
    private _email: string;

    @Column()
    private _password: string;

    get id(): number {
        return this._id;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }
}