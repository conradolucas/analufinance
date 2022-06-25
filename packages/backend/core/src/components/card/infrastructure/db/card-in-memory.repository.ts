import { Card } from '../../domain/card.entity';

export class CardInMemoryRepository {
  items: Card[] = [];

  async save(item: Card): Promise<void> {
    this.items.push(item);
  }

  async findAll(): Promise<Card[]> {
    return this.items;
  }
}
