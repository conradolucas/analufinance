import { Card } from './card.entity';

export interface CardRepositoryInterface {
  save(card: Card): Promise<void>;
  findAll(): Promise<Card[]>;
}
