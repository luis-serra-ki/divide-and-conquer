import {
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';
import CardDto from '../../../cards/dto/card.dto';

export default class ColumnDto {
  @IsOptional()
  _id?: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }): string => value?.trim())
  title!: string;

  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value.trim())
  color!: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  cards!: CardDto[];
}
