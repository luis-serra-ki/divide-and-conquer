import { BoardDocument } from 'src/modules/boards/schemas/board.schema';
import CardDto from '../../dto/card.dto';

export interface CreateCardService {
  create(
    cardId: number,
    userId: string,
    card: CardDto,
    colIdToAdd: string,
  ): Promise<BoardDocument>;
}