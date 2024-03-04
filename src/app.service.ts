import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { Board } from './board.entity';
import { CreateBoardDto } from './createBoardDto';

@Injectable()
export class AppService {
    constructor(
        private AppRepository: AppRepository,
    ) { }

    //VALID한 게시물 전부 가져오기
    async getAllBoards(): Promise<Board[]> {
        return this.AppRepository.find();
    }

    createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        return this.AppRepository.createBoard(createBoardDto);
    }
}
