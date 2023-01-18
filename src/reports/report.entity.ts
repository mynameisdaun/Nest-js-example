import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Report {
    @PrimaryGeneratedColumn() private _id: number;

    @Column() private _price: number;


    get id(): number {
        return this._id;
    }

    get price(): number {
        return this._price;
    }
}