import { OmitType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class CatCurrentDto extends OmitType(Cat, ['password'] as const) {}
