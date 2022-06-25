import { CardInMemoryRepository } from '../infrastructure/db/card-in-memory.repository';
import { CreateCardUseCase } from './create-card.use-case';

describe('CreateRouteUseCase Tests', () => {
  it('should create a new card', async () => {
    const repository = new CardInMemoryRepository();
    const createCardUseCase = new CreateCardUseCase(repository);

    const output = await createCardUseCase.execute({
      number: '123456',
      flag: 'visa',
      cvv: '123',
      since_at: '25/05/1997',
      valid_at: '27/07/2019',
      due_day: 15,
      closing_day: 10,
    });

    console.log(repository);

    expect(output).toStrictEqual({
      id: repository.items[0].card.id,
      number: '123456',
      flag: 'visa',
      cvv: '123',
      since_at: '25/05/1997',
      valid_at: '27/07/2019',
      due_day: 15,
      closing_day: 10,
    });
  });
});
