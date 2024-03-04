import { Repository } from "typeorm";
import { CustomRepository } from "./db/typeorm-ex.decorator";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./createBoardDto";

@CustomRepository(Board)
export class AppRepository extends Repository<Board> {
    
    async createBoard(createBoardDto: CreateBoardDto): Promise<Board>{
        const {title, content} = createBoardDto;
        const board = this.create({
            title,
            content
        });

        await this.save(board);
        return board;
    }
}