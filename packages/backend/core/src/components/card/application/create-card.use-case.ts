import { CardRepositoryInterface } from '../domain/card.repository';
import { Card } from './../domain/card.entity';

export class CreateCardUseCase {
  constructor(private CardRepository: CardRepositoryInterface) {}

  async execute(input: CreateCardInput): Promise<CreateCardOutput> {
    const card = new Card(input);
    await this.CardRepository.save(card);
    return card.toJSON();
  }
}

type CreateCardInput = {
  number: string;
  flag: string;
  cvv: string;
  since_at: string;
  valid_at: string;
  due_day: number;
  closing_day: number;
};

type CreateCardOutput = {
  id: string;
  number: string;
  flag: string;
  cvv: string;
  since_at: string;
  valid_at: string;
  due_day: number;
  closing_day: number;
};
