import { Inject, Injectable } from '@nestjs/common';
import { GetBoardApplication } from '../interfaces/applications/get.board.application.interface';
import { GetBoardService } from '../interfaces/services/get.board.service.interface';
import { TYPES } from '../interfaces/types';
import { BoardDocument } from '../schemas/board.schema';

@Injectable()
export class GetBoardApplicationImpl implements GetBoardApplication {
  constructor(
    @Inject(TYPES.services.GetBoardService)
    private getBoardService: GetBoardService,
  ) {}

  getAllBoards(userId: string): Promise<BoardDocument[]> {
    return this.getBoardService.getAllBoards(userId);
  }

  getBoardWithEmail(boardId: string, userId: string): Promise<BoardDocument> {
    return this.getBoardService.getBoardWithEmail(boardId, userId);
  }
}
