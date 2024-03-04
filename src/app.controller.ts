import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './createBoardDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.appService.getAllBoards();
  }

  @Post()
    createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
        return this.appService.createBoard(createBoardDto);
  }
}
