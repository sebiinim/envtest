import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity{
    @PrimaryGeneratedColumn()
    boardId: number; //게시물 id

    @Column()
    title: string;  //게시물 제목

    @Column()
    content: string;    //설명
}