import { Card, CardProps } from '../../domain/card.entity';
import { CardInMemoryRepository } from './card-in-memory.repository';

describe('CardInMemoryRepository Test', () => {
  describe('save', () => {
    it('should insert a new card', async () => {
      const repository = new CardInMemoryRepository();

      const cardInput: CardProps = {
        number: '123456',
        flag: 'visa',
        cvv: '123',
        since_at: '25/05/1997',
        valid_at: '27/07/2019',
        due_day: 15,
        closing_day: 10,
      };
      const card = new Card(cardInput);

      await repository.save(card);

      expect(repository.items).toHaveLength(1);
      expect(repository.items).toStrictEqual([card]);
    });
  });

  describe('findAll', () => {
    let repository: any;

    beforeAll(async () => {
      repository = new CardInMemoryRepository();

      const cardInput: CardProps = {
        number: '123456',
        flag: 'visa',
        cvv: '123',
        since_at: '25/05/1997',
        valid_at: '27/07/2019',
        due_day: 15,
        closing_day: 10,
      };
      const card = new Card(cardInput);

      await repository.save(card);
      await repository.save(card);
    });

    it('should return all cards', async () => {
      const find = await repository.findAll();
      expect(find).toHaveLength(2);
    });
  });
});
